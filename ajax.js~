function inicializa_xhr() {
          if(window.XMLHttpRequest) {
             return new XMLHttpRequest();
             }
             else if(window.ActiveXObject) {
                     return new ActiveXObject("Microsoft.XMLHTTP");
                     }
          }


function enviarFormulario (url, id, datos_para_form, funcion){
         // ID, id de un formulario seleccionado, no es obligatorio
         // url, la url a donde enviara el formulario
         // contenido: donde se escribira la respuesta
         // datos para agragar  al formulario o los que datos que se usaran si no hay formulario
         var form;
         var documento_xml
         var form_data;
         var fun;
         if (funcion) { fun= funcion;}
         else {fun=null}
         xmlhttp = inicializa_xhr();
          if (id === null)  { // alert("id es null")
                 form_data = new FormData();
                 for ( item in datos_para_form) {
               //  alert(item)
              //   alert(datos_para_form[item])
                 form_data.append(item, datos_para_form[item]);
                 }
          }
          else { 
          //************************************************************************************
                form = document.getElementById(id);
                if ( window.FormData ) { // alert("tiene window formdata")
                   form_data = new FormData(form);
                   for ( item in datos_para_form) {
                       //  alert(item)
                       //   alert(datos_para_form[item])
                       form_data.append(item, datos_para_form[item]);
                   }
                 }
          }
         xmlhttp.open('POST',url,true);
         //**********************************************************************************************
         xmlhttp.send(form_data);
         //***********************************************************************************************
         xmlhttp.addEventListener('load', fun, false);
         return documento_xml;
         }



//*******************************************************************************************
function descargaArchivo() {
         var peticion_http;
         var NO_INICIALIZADO=0; 
         var CARGANDO=1; 
         var CARGADO=2;      //se llamó al método send y ya tenemos la cabecera de la petición HTTP y el status
         var INTERACTIVO=3; //la propiedad responseText tiene datos parciales
         var COMPLETADO=4;
         
         //*****************************************************************************************************
         function muestraContenido() {
                  if(peticion_http.readyState == 4) {
                     if(peticion_http.status == 200) {
                       document.getElementById("nombreDePerfil").innerHTML= peticion_http.responseText;
                       }
                     }
                  }
         //***********************************************************************************************         
         function cargaContenido(url, metodo, funcion) {
                  peticion_http = inicializa_xhr();
 
                  if(peticion_http) {
                     peticion_http.onreadystatechange = funcion; // aca se pone la funcion que se va activar cuando la peticion cambien de estado
                     peticion_http.open(metodo, url, true);
                     peticion_http.send(null);
                     }
                  }
          //************************************************************************************************
         cargaContenido("http://localhost/mipagina/hola.php", "GET", muestraContenido);
} 




/*
d

getElementById(); 
document.getElementsByTagName()[]; devuelve un array con todas las etiquetas de su clase
getElementsByClassName()[]; devuelve un array con todos los elementos con sean de la misma clase
querySelector(); devuelve el primer elemento que concuerde con las especificicacion 
querySelectorAll()[]; devuvel un array con todo los elementos que concuerden con las espesificaciones


Modificadores del dom
 document.getElementById("banno").innerHTML= "hola" ;

*/

 
 
 /*


var NO_INICIALIZADO=0; 
var CARGANDO=1; 
var CARGADO=2;      //se llamó al método send y ya tenemos la cabecera de la petición HTTP y el status
var INTERACTIVO=3; //la propiedad responseText tiene datos parciales
var COMPLETADO=4;
 
var peticion_http;
 
function cargaContenido(url, metodo, funcion) {
  peticion_http = inicializa_xhr();
 
  if(peticion_http) {
    peticion_http.onreadystatechange = funcion; // aca se pone la funcion que se va activar cuando la peticion cambien de estado
    peticion_http.open(metodo, url, true);
    peticion_http.send(null);
  }
}
 
function inicializa_xhr() {
  if(window.XMLHttpRequest) {
    return new XMLHttpRequest();
  }
  else if(window.ActiveXObject) {
    return new ActiveXObject("Microsoft.XMLHTTP");
  }
}
 
function muestraContenido() {
  if(peticion_http.readyState == 4) {
    if(peticion_http.status == 200) {
     document.getElementById("nombreDePerfil").innerHTML= peticion_http.responseText;
      
    }
  }
}
 
function descargaArchivo() {
  cargaContenido("http://localhost/mipagina/hola.php", "GET", muestraContenido);
} 
 
 window.onload = descargaArchivo();

*/





