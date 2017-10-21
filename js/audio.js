/* // This work is licensed under a Creative Commons Attribution-NonCommercial-ShareAlike 2.0 UK: England & Wales Licence.
// Bill Shaw June 2015 (with thanks to James Allright, #code4thekingdom and Harlow College) //2AtheismFri8Sep17 //changelog
2AtheismFri8Sep17 overflow;auto removed from css; now works in Safari 8AtheismFri25Aug17 new code template for mobiles;
audio has 30s intro 10AtheismMon1May17 1st URL called directly; 2nd [p], 3rd [q] 2AtheismMon1May17 updated image changed
back to tarrymin; seeker min and max decreased 2AtheismSun16Apr17 audio html amended to include ogg vorbis 2AtheismSun26Feb17
new audio 44AtheismSun19Feb17 css for mobile amended 12AtheismSat18Feb17 Updated image taken from tarraymax rather than
tarry min in seeker, skip forward and skip back 4AtheismFri17Feb17 mobile css amended intros changed 2AtheismMon16Jan17
updateProgress(); reloated to correct place in playthrough function 10AtheismSun1Jan17 iFrame 3 removed 2AtheismSun1Jan17
code tidied up 34AtheismSat31Dec16 detects length of podcast; top mobile width increased to 99% 24AtheismSat31Dec16 arrays
amended 20ApprenticeFri30Dec16 screengrab array amended to provide code template 2ApprenticeFri30Dec16 top css amended
for mobiles 4ApprenticeWed28Dec16 mobile css amended - width 98%, logo height 15% 4ApprenticeThu22Dec16 html pages replaced
by Screengrab pages 4ApprenticeSun11Dec16 css for tablet amended 2ApprenticeSun11Dec16 mobile images amended 2ApprenticeSat10Dec16
image urls changed to ../Design/ 2ApprenticeWed30Nov16 uploaded image urls changed 26ApprenticeFri25Nov16 intro amended
22ApprenticeFri25Nov16 scrollbars removed in iframes; icons open new windows; 14AtheismSun23Oct16 retimed design included;
audio is now 28Aug16 2AtheismSun16Oct16 position removed from iFrames cc has link span id=one included 2AtheismSat30Jan16
global and local vars labelled Pause flag (flag 1) used to decide whether to go to Playafterseeking in display /////////////////arrays/////////////////////////////////////////////////////////////////////////////////////////////////////
//enter the time in seconds for each swap */
var time = [1, 5, 11, 14, 18, 30, 39, 49, 54, 79, 83, 88, 95, 143, 151, 165, 176, 189, 195, 214, 231, 250, 269, 289, 300, 316, 337, 353, 364,
    376, 380, 384, 388, 392, 600000
];
/* //1 //20 //40 //55 //70 85 100 110 //120 130 140 150 //5 //35 //45 //60 //75 90 105 115
		125 135 145 //10 //30 //50 //65 //80 //95 */
var image = ["../Intro/Intro2.html", "../Intro/Intro2.html", "../Intro/Intro3.html",
    "../Intro/Intro4.html", "../Intro/Intro5.html", "../Intro/Intro6.html", "Screengrab1.html", "Screengrab5.html", "Screengrab10.html",
    "Screengrab20.html", "Screengrab35.html", "Screengrab30.html", "Screengrab40.html", "Screengrab45.html", "Screengrab50.html",
    "Screengrab55.html", "Screengrab60.html", "Screengrab65.html", "Screengrab70.html", "Screengrab75.html", "Screengrab80.html",
    "Screengrab85.html", "Screengrab90.html", "Screengrab95.html", "Screengrab100.html", "Screengrab105.html", "Screengrab110.html",
    "Screengrab115.html", "Screengrab120.html", "Screengrab125.html", "Screengrab130.html", "Screengrab135.html", "Screengrab140.html",
    "Screengrab145.html", "Screengrab150.html", "Screengrab155.html", "Screengrab160.html", "Screengrab165.html", "Screengrab170.html",
]
var imagepos = [];
var skiparray = [0, 0, 0, 0, 0, 0, 0];
/* /////////////////skipback first time ///////////////////skipback
		second and other times /////////////////////skipforward first time ///////////////////////skipforward second and other
		times /////////////////////////in play? ///////////////////////////in pause? /////////////////////////////just been in
		play /////////////////variables/////////////////////////////////////////////////////////////////////////////////////////////////////
		*/
var myAudio = document.getElementById("sound");
//timelength is length of time array so that Seeker function can iterate enough time to find new screengrab
var timelength;
timelength = time.length; //length is duration var XonClick; var newTime;
var fraction;
var flag = [0, 1, 0, ]; 
////////////////0play/ 
//////////////////1pause 
////////////////////2seek 
////////////////////////////////////////////////programs///////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////programs///////////////////////////////////////////////////////////////////////////
//playthrough 
function playthrough() {
    var cursecs = (sound.currentTime);
    var x = cursecs; //code for swapping urls if(x >
    time[(imagepos.length)] && x < time[(imagepos.length) + 1]) {
    {
        imagepos.push(1);
        document.getElementById("myFrame1").style.left = "0.8";
        document.getElementById("myFrame1").src = image[imagepos.length];
    }
}
updateProgress();
}

function Mute() {
    if (myAudio.muted) {
        vButton.className = "";
        vButton.className = "volume";
        myAudio.muted = false;
    } else {
        vButton.className = "";
        vButton.className = "mute";
        myAudio.muted = true;
    }
}

function Start() {
    if (myAudio.paused) {
        pButton.className = "";
        pButton.className = "pause";
        myAudio.play();
        skiparray[0] = 1;
        flag[0] = 1;
        flag[1] = 0;
    } else {
        myAudio.pause();
        pButton.className = "";
        pButton.className = "play";
        flag[1] = 1;
        flag[0] = 0;
    }
} ////////////////// 
function updateProgress() {
    var progress = document.getElementById("playhead");
    var percentage = Math.floor((100 / sound.duration) * sound.currentTime);
    /* ////progress.value=p ercentage; ////progress.innerHTML=p
    		    ercentage + '% played'; */
    playhead.style.marginLeft = percentage + "%";
} /////////////////////x pos in timeline 
var isIE=document.all ? true : false;
document.getElementById("timeline").onclick = getMousePosition;

function getMousePosition(e) {
    var MousePos;
    if (!isIE) {
        MousePos = e.pageX;
    }
    if (isIE) {
        MousePos = event.clientX + document.body.scrollLeft;
    }
    var podcastTime;
    podcastTime = Math.floor(myAudio.duration);
    posX = MousePos;
    var margLeft = document.getElementById("timeline").offsetLeft;
    XonClick = posX - margLeft;
    var Wide = document.getElementById("timeline").offsetWidth;
    fraction = XonClick / Wide;
    newTime = Math.floor(fraction * podcastTime);
    myAudio.currentTime = newTime;
    Seeker();
    return true;
} 

//////playafterSeeking//////////////
function playafterSeeking() { 
    //currentTime 
    var cursecs=(sound.currentTime); 
    var x=cursecs;
    if(x> time[imagepos.length] && x < time[(imagepos.length) + 1])

    {
        imagepos.push(1);


        document.getElementById("myFrame1").style.left = "0.8%";
        document.getElementById("myFrame1").src = image[imagepos.length];




    } else {

    }
    var progress = document.getElementById("playhead");
    var percentage = Math.floor((100 / sound.duration) *
        sound.currentTime);
    /*
    ////progress.value = percentage;
    ////progress.innerHTML = percentage + '% played';
    */
    var offset = percentage - 4;
    playhead.style.marginLeft = offset + "%";

}


//display
function display() {


    document.getElementById("myFrame1").src = image[imagepos.length];
    document.getElementById("myFrame1").style.left = "0.8%";


    playafterSeeking()


}


//Seeker/////////////////////////////

function Seeker() {
    flag[2] = 1;

    //clear array from https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
    while (imagepos.length > 0) {
        imagepos.pop();
    }

    //currentTime

    var x = (myAudio.currentTime);

    //ensures loop will iterate enough times to find relevant website
    for (loop = -2; loop < timelength; loop++) {


        if (x > time[(imagepos.length) - 1] && x < time[(imagepos.length)]) {

            display()
        } else {

            imagepos.push(1);
        }
    }
}


//SkiptoNext
function SkiptoNext() {

    flag[2] = 1;

    myAudio.currentTime = time[imagepos.length];

    imagepos.push(1);
    display()
}

//SkiptoPrevious
function SkiptoPrevious() {

    flag[2] = 1;
    imagepos.pop()
    myAudio.currentTime = time[(imagepos.length) - 1];

    display()

}



////Reset - flag[1] is 1 if Paused///////////////////////////////////////////////////

function Reset() {
    if (myAudio.paused == true && myAudio.seeking == false) {

        flag[1] = 1;

    }
}







////////////////////

function whichProgram() {
    if (flag[2] == 0) {
        playthrough();
    } else {
        playafterSeeking();
    }
}

///////////////////////////////////////////////initialisation///////////////////////////////////////////////////////////////////////////	

function initAudioPlayer() {

    sound.addEventListener("timeupdate", function () {
        whichProgram();
    });

    //set the first page for the iframe
    document.getElementById("myFrame1").src = "../Intro/Intro1.html";
    document.getElementById("myFrame1").style.left = "0.8%";
}

window.addEventListener("load", initAudioPlayer);