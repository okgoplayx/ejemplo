

function crearnodos (elemento, padre, nuevoid, nuevoclass) {
        var madre= document.getElementById(padre);
        var nuevo_nodo = document.createElement(elemento);
        nuevo_nodo.setAttribute('id', nuevoid);
        nuevo_nodo.setAttribute('class', nuevoclass);
        madre.appendChild(nuevo_nodo);
        return nuevo_nodo;
        };
//*******************************************************************************************
function escribir(contenido)
         { 
         if (contenido != null) 
            {
            if (xmlhttp.responseText !== null)
               { // alert(xmlhttp.responseText)
                document.getElementById(contenido).innerHTML= xmlhttp.responseText;
               }
               else if(xmlhttp.responseXML != null)
                      {
                       documento_xml = xmlhttp.responseXML;
                      }
                       else {}
            }
          return false;
          // alert(xmlhttp.responseText)
         }


//***********************************************************************************************
// crear bloques de noticas

(function () {
	var ultima_posicion_en_top = new Array();
	//var ultima_posicion_en_left=Math.floor(screen.width / 200) ; 
	var cantidad_de_columnas=Math.floor(window.innerWidth / 200) ; 

	if (cantidad_de_columnas === 0) {
		cantidad_de_columnas++;
   }
   
for (i=0; i < cantidad_de_columnas; i++) 
    {
     ultima_posicion_en_top[i]=0;
    }
     	  
var id_del_ultimo_div= "0";
var cantidadDeNoticias= 0;

 /*  0=primario     1=secundario        */


function meter_imagen_noticia (id_de_la_publicacion, url_img ) {
        var ima_d_noti = crearnodos("img", id_de_la_publicacion , null , null);
        ima_d_noti.src=url_img;
        }
/*
function datos_noticia (){
         var documento_xml = peticion_http.responseXML;
         return true;
         };
*/
function crear_noticias (cantidad_de_filas)
        {
        	cantidadDeNoticias+= cantidad_de_filas;
        	var total_de_noti=cantidad_de_filas*cantidad_de_columnas;
         var cargar_noticias={
             desde:0,
             cantidad:total_de_noti
             };
         var xml=enviarFormulario("cargar_noticias.php", null, cargar_noticias);
         var columnas_a_crear = cantidad_de_columnas - 1;
         
         for (columna_actual=1;  columna_actual < columnas_a_crear;  columna_actual++) 
            {
            	
             var   posicion_en_horisontal= columna_actual * 200;
             var   id_left= columna_actual;
             for (i=1; i<=cantidad_de_filas; i++)
                {
                 var id_top= ultima_posicion_en_top[columna_actual] + 1;
                 var id_publicacion= "noticia_" + id_left + "x" + id_top;
                 
                 crearnodos ("div", "cuerpo", id_publicacion, "caja_de_noticias");

                 if (xml) {
                 var mensaje= xml.getElementsByTagName('img')[0]
                 
                 var textoMensaje=mensaje.childNodes[0].nodeValue;}
                 if (xml) {
                     xml.getElementById()
                     nodo_nuevo=crearnodos ("img", id_publicacion, null, "img_noticias");
                    }
                 if (id_del_ultimo_div==="0") 
                   {
                    document.getElementById( id_publicacion ).style.left="200px";
                    document.getElementById( id_publicacion ).style.top="60px";
                    id_del_ultimo_div=id_publicacion;
                    ultima_posicion_en_top[columna_actual] ++;
                   }
                    else {
                          id_del_ultimo_div=id_publicacion;
                          document.getElementById( id_publicacion ).style.left=""+ posicion_en_horisontal + "px";
                          
                          var posicion_en_vertical= 400*ultima_posicion_en_top[columna_actual] + 60;
                          posicion_en_vertical= posicion_en_vertical + "px";
                          document.getElementById( id_publicacion ).style.top=posicion_en_vertical;
                          ultima_posicion_en_top[columna_actual] ++;
                          
                         }
                }
            }
        }
crear_noticias (7);


function cargarMasNoticias() {
	if (document.documentElement.scrollHeight - document.documentElement.scrollTop <= document.documentElement.clientHeight) {
	crear_noticias (7);
	}
}
window.addEventListener('scroll', cargarMasNoticias, false);
})()

// crear_noticias (3);


// var noti=document.querySelectorAll(" div a");
//*******************************************************************************************************
//Mostra y ocular bandejas 

function permisos(){
        if(document.getElementById("banno_permisos").style.display==="block")
          {
           document.getElementById("banno_permisos").style.display="none";
           document.getElementById("banno_mensajes").style.display="none";
           document.getElementById("banno_novedades").style.display="none";
          }
          else {
                document.getElementById("banno_permisos").style.display="block";
                document.getElementById("banno_mensajes").style.display="none";
                document.getElementById("banno_novedades").style.display="none";
               }
         }

function mensajes (){
        if(document.getElementById("banno_mensajes").style.display==="block")
          {
           document.getElementById("banno_permisos").style.display="none";
           document.getElementById("banno_mensajes").style.display="none";
           document.getElementById("banno_novedades").style.display="none";
          }
          else
              {
               document.getElementById("banno_mensajes").style.display="block";
              }
        }

function novedades(){
        if(document.getElementById("banno_novedades").style.display==="block")
          {
           document.getElementById("banno_permisos").style.display="none";
           document.getElementById("banno_mensajes").style.display="none";
           document.getElementById("banno_novedades").style.display="none";
          }
           else {
                 document.getElementById("banno_novedades").style.display="block";
                }
        }

function cajaderegistro(){
        if(document.getElementById("cajaDeRegistro").style.display==="block")
          {
           document.getElementById("cajaDeRegistro").style.display="none";
          }
           else {
                 document.getElementById("cajaDeRegistro").style.display="block";
                }
        }

function controlAV(){
        if(document.getElementById("controlAV").style.display==="block")
          {
           document.getElementById("controlAV").style.display="none";
           document.getElementById("controlAV").style.height="100px";
          }
           else {
                 document.getElementById("controlAV").style.display="block";
                 document.getElementById("controlAV").style.height="100px";
                }
}


  document.getElementById("permisos").addEventListener('click', permisos, false);
  document.getElementById("mensajes").addEventListener('click', mensajes, false);
  document.getElementById("novedades").addEventListener('click', novedades, false);
  document.getElementById("tema").addEventListener('click', controlAV, false);
  document.querySelectorAll("input")[0].addEventListener('change', novedades, false);
  document.getElementById("sisu").addEventListener('click', cajaderegistro, false);
  
//********************************************************************************************************************************************
//

document.getElementById("permisos").addEventListener('click', function () {
        enviarFormulario("libreria.php", "formulario_de_ingreso", null, function () {escribir ("contenidoDeNotificacion_permisos")}  )
        }, false);
 
document.getElementById("mensajes").addEventListener('click', function () {
        enviarFormulario("libreria.php", "formulario_de_ingreso", null, function () {escribir ("contenidoDeNotificacion_mensajes")}  )
        }, false);
        
document.getElementById("novedades").addEventListener('click', function () {
        enviarFormulario("libreria.php", "formulario_de_ingreso", null, function () {escribir ("contenidoDeNotificacion_novedades")}  )
        }, false);        
 





/*    crearnodos ('div','contenido','contenidoDeNotificacion', 'contenidoDeNotificacion'); */

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