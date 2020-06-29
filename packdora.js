function crearNodo(tipoElemento, padre, nuevaId, nuevaClass) {
	var madre=document.getElementById(padre);
	var nuevoNodo=document.createElement(tipoElemento);
	nuevoNodo.setAttribute('id', nuevaId);
	nuevoNodo.setAttribute('class', nuevaClass);
	madre.appendChild(nuevoNodo);
	return nuevoNodo;
}

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
	
function mostrarOcultar(mostrar, ocultar) {
	function ocultarce(bandeja) {
		if(mostrar!==bandeja) {
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