/** 
 * This function initialise the page with the time tags of the illustrations
 * and it's content.
 * */
function initPage(times, images) {

    /* Variables */
    var currentTag = 0;
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

    /* Events */
    audio.addEventListener("timeupdate", handleTimeUpdate);
    mainButton.addEventListener("click", handleMainButtonClick);
    backButton.addEventListener("click", handleSkipBackward);
    forwardButton.addEventListener("click", handleSkipForward);
    timeline.addEventListener("click", handleTimelineClick);

    /* Event Handler */
    function handleTimeUpdate() {
        updateProgressBar();
        if (currentTag >= allTags.length - 1) return;
        var nextTag = allTags[currentTag + 1]
        if (audio.currentTime > nextTag.time)
            updateIllustrationContent(nextTag.image);
    }

    function handleMainButtonClick() {
        if (audio.paused) {
            play();
        }
        else {
            pause();
        }
    }

    function handleSkipBackward() {
        if (currentTag < 1) return;
        var newTag = allTags[currentTag - 1]
        audio.currentTime = newTag.time;
        updateIllustrationContent(newTag.image);
        currentTag = currentTag - 1;
    }

    function handleSkipForward() {
        if (currentTag >= allTags.length - 1) return;
        var newTag = allTags[currentTag + 1]
        audio.currentTime = newTag.time;
        updateIllustrationContent(newTag.image);
        currentTag = currentTag + 1;
    }

    function handleTimelineClick(e) {
        console.log(audio.currentTime);
        console.log(e.layerX);
        console.log(e.target.clientWidth);
        console.log(audio.duration);
        var newTime = (e.layerX/e.target.clientWidth) * audio.duration;
        console.log(newTime);
        console.log(audio.duration);
        audio.currentTime = newTime;
        console.log(audio.currentTime);
        updateProgressBar();
    }

    /* Functions */
    function play() {
        audio.play();
        mainButton.innerText = "Pause";
    }

    function pause() {
        audio.pause();
        mainButton.innerText = "Play"
    }

    function updateProgressBar() {
        var percentage = (audio.currentTime/audio.duration) * 100;
        var playhead = document.getElementById("playhead");
        playhead.style.left = "calc(" + percentage + "% - 15px";
    }

    function updateIllustrationContent(content) {
        var container = document.getElementById("illustration-content");
        container.innerHTML = content;
    }
}