var reproductorAV = document.getElementById("reproductorAV");
function posicionDelAV () {
                           reproductorAV.currentTime=0;} // indica la pocicion del video, en este caso lo vuelve a su inicio osea cero
reproductorAV.load();    // carga el elemento video sirve para cuando se cambia la url del video
reproductorAV.src= " http://hola.com/hola.ogv  ";       // la url del video
reproductorAV.play(); // inicia el video
reproductorAV.pause(); // pone en pausa el video
reproductorAV.volume+=0.1; // se le suma al volumen un 0.1% del valor nativo
reproductorAV.volume-=0.1; // se le resta al volumen un 0.1% del valor natico
reproductorAV.volume=0; // mudo
reproductorAV.playbackRate+= 0.25; // se le suma a la velosidad de reproduccion el 0.25 de la velocidad normal
reproductorAV.playbackRate= 0.25; // va a un 25% de la velocidad inicial
reproductorAV.playbackRate=1;    // va a la velocidad normal
document.getElementById("play").addEventListener('click', permisos, false);
document.getElementById("pause").addEventListener();
document.getElementById("volumen").addEventListener();
document.getElementById("volumenMas").addEventListener();
document.getElementById("volumenMenos").addEventListener();
document.getElementById("velocidad").addEventListener();
document.getElementById("velocidadMas").addEventListener();
document.getElementById("velocidadMenos").addEventListener();
document.getElementById("anteriorContenido").addEventListener();
document.getElementById("siguienteContenido").addEventListener();
document.getElementById("canalAudio").addEventListener();
document.getElementById("subtitulos").addEventListener();
document.getElementById("canalVideo").addEventListener();
document.getElementById("").addEventListener();
document.getElementById("").addEventListener();
document.getElementById("").addEventListener();
document.getElementById("").addEventListener();
document.getElementById("").addEventListener();
document.getElementById("").addEventListener();
document.getElementById("").addEventListener();
document.getElementById("").addEventListener();
document.getElementById("").addEventListener();
document.getElementById("").addEventListener();
document.getElementById("").addEventListener();