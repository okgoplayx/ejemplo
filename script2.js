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
	largo=largo.toFixed();
	var alto= largo;
	var ultimoIdNoticia="0";
	var cantidadDeNoticias=0;
	var relacionEspectroVH; /* 0.7*/
	var relacionEspectroHV;
	var imgRelacionEspectroHV=16/9;
	var imgLargo=largo;
	var imgAlto;
	var fuente1;
	var fuente2;
	
	var hojasDeEstilo = document.styleSheets;
	function seleccionarRegla (Regla) {
		for (var i=0; i<=hojasDeEstilo[0].cssRules.length; i++) {
			if (i != hojasDeEstilo[0].cssRules.length) {
				if (hojasDeEstilo[0].cssRules[i].selectorText===Regla) {
					return hojasDeEstilo[0].cssRules[i];
				}
			}else {
				hojasDeEstilo[0].insertRule(Regla +" {}", hojasDeEstilo[0].cssRules.length); 
				return  hojasDeEstilo[0].cssRules[i];
				}
		}
	};

	function actualizarMedidasNoticias(cantidad) {
		relacionEspectroVH=window.innerHeight/window.innerWidth;
		relacionEspectroHV=window.innerWidth/window.innerHeight;
		largo =window.innerWidth/cantidad;
		largo=largo.toFixed();
		alto= largo;
		imgRelacionEspectroVH=16/9;
		imgAlto=largo/imgRelacionEspectroVH;
		var imgAlto=imgAlto.toFixed();
		seleccionarRegla("label").style.fontSize="20px";
		seleccionarRegla("label").style.height="20px";
		seleccionarRegla(".caja_de_noticias").style.width=largo+"px";
		seleccionarRegla(".caja_de_noticias").style.height=largo+"px";
		seleccionarRegla("#cuerpo").style.left="50%";
		var centrarCuerpo=window.innerWidth/2;
		seleccionarRegla("#cuerpo").style.marginLeft="-"+centrarCuerpo.toFixed()+"px";
	};
	actualizarMedidasNoticias(3);
	
	var hojasDeEstilo = document.styleSheets;
	var regla = hojasDeEstilo[0].cssRules[1].selectorText;
	var longitud=hojasDeEstilo[0].cssRules.length;
	var otro=hojasDeEstilo[0].cssRules.length;
	
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
					publicacionActual.style.left=columnaActual*largo+"px";
					var posicionVertical=largo*ultimaPosicionTop[columnaActual]+30;
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