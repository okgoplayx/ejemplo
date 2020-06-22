//****************************************************************************************************
// control de video
//********************************************************************************************

(function () {
 var elVideo = document.getElementById("elVideo");
 function playVideo() {
          if (elVideo.pause)
                {
                 elVideo.play();
                }
                else {elVideo.pause();}
             }

 function vTiempo(t) {
         elVideo.currentTime = t;
         }

 function vAdelantar(a) {
          elVideo.currentTime += a;
         }

 function velocidad(ve) {
          elVideo.playbackRate+=ve;
 }
 function mudo () {
          if (elVideo.muted===false) {
          elVideo.muted= false;}
          else {elVideo= true}
 }
 function volumen (vo) {
         elVideo.volume = vo;
 }
 function voMasMen (vo) {
          elVideo.volume += vo;
 }



document.getElementById("bVolumenMen").addEventListener("click", function () {
    voMasMen(-.1); // down by 10%
}, false);
document.getElementById("bVolumenMas").addEventListener("click", function () {
    voMasMen(.1);  // up by 10%
}, false);

// playback speed buttons
document.getElementById("bVelVMasMen").addEventListener("click", function () {
    elVideo.playbackRate -= .25;
}, false);
document.getElementById("bVelVMasMen").addEventListener("click", function () {
    elVideo.playbackRate += .25;
}, false);
document.getElementById("bVelV").addEventListener("click", function () {
    elVideo.playbackRate = 1;
}, false);
document.getElementById("bPausaV").addEventListener("click", function (evt) {
    if (elVideo.muted) {
        elVideo.muted = false;
        evt.target.innerHTML = "<img alt='volume on button' src='vol2.png' />"
    } else {
        elVideo.muted = true;
        evt.target.innerHTML = "<img alt='volume off button' src='mute2.png' />"
    }
}, false);

})();