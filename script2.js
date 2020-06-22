var bandejaDeNotificaciones= [document.getElementById("banno_permisos"),
document.getElementById("banno_mensajes"),
document.getElementById("banno_novedades")];

var botonDeNotificaciones=[document.getElementById("permisos"),
document.getElementById("mensajes"),
document.getElementById("novedades")];

var controlAV = document.getElementById("controlAV");
var tema= document.getElementById("tema");

function crearNodo(tipoElemento, padre, nuevaId, nuevaClass) {
	var madre=document.getElementById(padre);
	var nuevoNodo=document.createElement(tipoElemento);
	nuevoNodo.setAttribute('id', nuevaId);
	nuevoNodo.setAttribute('class', nuevaClass);
	madre.appendChild(nuevoNodo);
	return nuevoNodo;
}
(function () {
	var ultimaPosicionTop= new Array();
	/*var cantidadColumnas=Math.floor(window.innerWidth / 200); */
	cantidadColumnas=3;
	var largo=window.innerWidth/cantidadColumnas;
	var alto= largo*1.6;
	var ultimoIdNoticia="0";
	var cantidadDeNoticias=0;
	
	
	
	
	if (cantidadColumnas===0) {
		cantidadColumnas++;
	};
	
	for (i=0;i<cantidadColumnas;i++) {
		ultimaPosicionTop[i]=0;
	};
	
	function meterImagenNoticia(IdPublicacion,UrlImg) {
		var ImaNoti=crearNodo("img",IdPublicacion,null,img_noticias);
		ImaNoti.src=UrlImg;
	}
	function crearNoticias(cantidadFilas) {
		cantidadDeNoticias+= cantidadFilas;
		var totalNoti=cantidadFilas*cantidadColumnas;
		var cargarNoticas={
			desde:0,
			cantidad:totalNoti
		};
		var xml=enviarFormulario("cargar_noticas.php",null,cargarNoticas);
		var columnasACrear=cantidadColumnas;
		for (columnaActual=0;columnaActual<cantidadColumnas;columnaActual++) {
			var posicionHorizontal=columnaActual*200;
			var idLeft=columnaActual;
			for (i=1;i<=cantidadFilas;i++) {
				var idTop=ultimaPosicionTop[columnaActual]+1;
				var idPublicacion="noticia_"+idLeft+"x"+ idTop;
				var publicacionActual=crearNodo("div","cuerpo",idPublicacion,"caja_de_noticias");/*
				var publicacionActualImagen=crearNodo("img",idPublicacion,idPublicacion+"imagen","caja_de_noticias");
				var publicacionActualTitulo=crearNodo("label",idPublicacion,idPublicacion+"titulo","caja_de_noticias");
				var publicacionActualDescripcion=crearNodo("div",idPublicacion,idPublicacion+"Descripcion","caja_de_noticias");
				var publicacionActualAutor=crearNodo("div",idPublicacion,idPublicacion+"autor","caja_de_noticias");
				*/
				
				
				if (ultimoIdNoticia==="0") {
					publicacionActual.style.left="0%";
					publicacionActual.style.top="30px";
					publicacionActual.style.height= window.innerWidth/2,5 +"px";
					ultimoIdNoticia=idPublicacion;
					ultimaPosicionTop[columnaActual]++;
				}else {
					ultimoIdNoticia=idPublicacion;
					publicacionActual.style.left=columnaActual*33+"%";
					var posicionVertical=400*ultimaPosicionTop[columnaActual]+30;
					posicionVertical=posicionVertical+"px";
					publicacionActual.style.top=posicionVertical;
					ultimaPosicionTop[columnaActual]++;
				}
			}
		}
	}
	crearNoticias(7);
	function cargarNoticas() {
		var elementoDocumento=document.documentElement;
		if (elementoDocumento.scrollHeight - elementoDocumento.scrollTop<=elementoDocumento.clientHeight) {
			crearNoticias(7);
		}
	}
	window.addEventListener('scroll',cargarNoticas,false);
})();

function mostrarOcultar(mostrar, ocultar) {

	function ocultarce(bandeja) {
		if (mostrar!==bandeja) {
			bandeja.style.display="none";
		}else if (mostrar.style.display==="block") {
			mostrar.style.display="none";
		}else {
			mostrar.style.display="block";
		}
	}
	if (ocultar.length>1) {
		ocultar.forEach(ocultarce);
	}else {
		ocultarce(ocultar);
	};
}

if (getElementById("noticia_0x1").style.width="400px") {
	getElementById("barra_menu").style.color="red";
}else {	getElementById("barra_menu").style.color="blue";};