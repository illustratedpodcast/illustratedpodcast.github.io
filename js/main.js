/** 
 * This function initialise the page with the time tags of the illustrations
 * and it's content.
 * */
function initPage(times, images) {

    /* Variables */
    var currentTag = 0;
    var allTags = [];

    var audio = document.getElementById("sound");
    var timeline = document.getElementById("timeline");
    var mainButton = document.getElementById("mainButton");
    var backButton = document.getElementById("backButton");
    var forwardButton = document.getElementById("forwardButton");

    // initialise variables
    for (i=0; i < times.length; i++) {
        allTags.push({
            time: times[i],
            image: images[i]
        });
    }
    
    /* Events */
    audio.addEventListener("timeupdate", handleTimeUpdate);
    timeline.addEventListener("click", handleTimelineClick);
    mainButton.addEventListener("click", handleMainButtonClick);
    backButton.addEventListener("click", skipBackward);
    forwardButton.addEventListener("click", skipForward);

    /* Functions */
    function skipBackward() {
        if (currentTag < 1) return;
        var newTag = allTags[currentTag - 1]
        audio.currentTime = newTag.time;
        updateIllustrationContent(newTag.image);
        currentTag = currentTag - 1;
    }

    function skipForward() {
        if (currentTag >= allTags.length - 1) return;
        var newTag = allTags[currentTag + 1]
        audio.currentTime = newTag.time;
        updateIllustrationContent(newTag.image);
        currentTag = currentTag + 1;
    }

    function updateProgressBar() {
        var percentage = audio.currentTime/audio.duration;
        var playhead = document.getElementById("playhead");
        playhead.style.left = percentage + "%";
    }

    function seek(time) {

    }

    function handleTimelineClick() {

    }

    function handleMainButtonClick() {
        if (audio.paused) {
            audio.play();
        }
        else {
            audio.pause();
        }
    }

    function handleTimeUpdate(e) {
        if (currentTag >= allTags.length - 1) return;
        var nextTag = allTags[currentTag + 1]
        if (audio.currentTime > nextTag.time)
            updateIllustrationContent(nextTag.image);
    }

    function updateIllustrationContent(content) {
        var container = document.getElementById("illustration-content");
        container.innerHTML = content;
    }
}