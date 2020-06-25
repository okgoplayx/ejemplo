var largo=window.innerWidth/cantidadColumnas;
var alto= largo*1.6;
var ultimoIdNoticia="0";
var cantidadDeNoticias=0;
var relacionEspectroVH; /* 0.7*/
var relacionEspectroHV;
var imgRelacionEspectroHV=16/9;
var imgLargo=largo;
var imgAlto=largo/imgRelacionEspectroVH;
var imgAlto=imgAlto.toFixed();
	
function actualizarMedidasNoticas(cantidad) {
	relacionEspectroVH=window.innerHeight/window.innerWidth;
	relacionEspectroHV=window.innerWidth/window.innerHeight;
	largo =window.innerWidth/cantidad;
	largo=largo.toFixed();
	alto= largo;
	fuente1=
	fuente2=
	hojasDeEstilo("label").style.fontSize=20px;
	hojasDeEstilo("label").style.height=20px;
	hojasDeEstilo(".caja_de_noticias").style.width=largo+"px";
	
}

20/40=0.5
h/V

500/0.5

var hojasDeEstilo = document.styleSheets;
function seleccionarRegla (Regla) {
	for (i=0; i>hojasDeEstilo[0].cssRules.length; i++;) {
		if (hojasDeEstilo[0].cssRules[i].selectorText===Regla) {
			alert(hojasDeEstilo[0].cssRules[i].selectorText);
			return hojasDeEstilo[0].cssRules[i];
		}else {
			return null;
			}
	}
};

/* hojasDeEstilo[0].cssRules[i].selectorText; */


function getStyleSheet(tituloUnico) {
  for(var i=0; i<document.styleSheets.length; i++) {
    var hojaEstilos = document.styleSheets[i];
    if(hojaEstilos.title == tituloUnico) {
      return hojaEstilos;
    }
  }
}


var hoja=getStyleSheet("hoja1");




Array.observe()