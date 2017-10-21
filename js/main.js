/** 
 * This function initialise the page with the time tags of the illustrations
 * and it's content.
 * */
function initPage(times, images, audioSrc) {

    /* Variables */
    var currentTagIndex = 0;
    var allTags = [];
    // initialise all tabs
    for (i=0; i < times.length; i++) {
        allTags.push({
            time: times[i],
            image: images[i]
        });
    }

    var audio = document.getElementById("sound");

    var mainButton = document.getElementById("mainButton");
    var backButton = document.getElementById("backButton");
    var forwardButton = document.getElementById("forwardButton");
    var timeline = document.getElementById("timeline");

    var timer;

    /* Events */
    mainButton.addEventListener("click", handleMainButtonClick);
    backButton.addEventListener("click", handleSkipBackward);
    forwardButton.addEventListener("click", handleSkipForward);
    timeline.addEventListener("click", handleTimelineClick);

    /* Event Handler */
    function handleMainButtonClick() {
        if (audio.paused) {
            play();
        }
        else {
            pause();
        }
    }

    function handleSkipBackward() {
        if (currentTagIndex < 1) return;
        var newTag = allTags[currentTagIndex - 1]
        audio.currentTime = newTag.time;
        updateIllustrationContent(newTag.image);
        currentTagIndex = currentTagIndex - 1;
    }

    function handleSkipForward() {
        if (currentTagIndex >= allTags.length - 1) return;
        var newTag = allTags[currentTagIndex + 1]
        audio.currentTime = newTag.time;
        updateIllustrationContent(newTag.image);
        currentTagIndex = currentTagIndex + 1;
    }

    function handleTimelineClick(e) {
        var newTime = (e.layerX/e.target.clientWidth) * audio.duration;
        audio.currentTime = newTime;
        updateProgressBar();
    }

    /* Functions */
    function updateTime() {
        updateProgressBar();
        if (currentTagIndex >= allTags.length - 1) return;
        var nextTag = allTags[currentTagIndex + 1]
        if (audio.currentTime > nextTag.time) {
            updateIllustrationContent(nextTag.image);
            currentTagIndex = currentTagIndex + 1;
        }
    }

    function play() {
        audio.play();
        mainButton.innerText = "Pause";
        timer = setInterval(updateTime, 1000);
    }

    function pause() {
        audio.pause();
        mainButton.innerText = "Play"
        clearInterval(timer);
    }

    function updateProgressBar() {
        var percentage = (audio.currentTime/audio.duration) * 100;
        var playhead = document.getElementById("playhead");
        playhead.style.left = "calc(" + percentage + "% - 15px";
    }

    function updateIllustrationContent(content) {
        var container = document.getElementById("illustration-content");
        container.src = content;
    }

    /* Initialize Content */
    var container = document.getElementById("illustration-content");
    container.src = allTags[0].image;
    audio.src = audioSrc;
}