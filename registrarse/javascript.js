function enviarFormulario( id, url, contenido){
	
	      function inicializa_xhr() {
                  if(window.XMLHttpRequest) {
                    return new XMLHttpRequest();
                    }
                    else if(window.ActiveXObject) {
                           return new ActiveXObject("Microsoft.XMLHTTP");
                           }
                    }
         //************************************************************************************
         var form = document.getElementById(id);
         var form_data, //espero que ya tengáis una buena función para crear objetos ajax definida...
         xmlhttp = inicializa_xhr();
         //****************************************************************************************
         function escribir(){
  	              document.getElementById(contenido).innerHTML= xmlhttp.responseText;
  	              }
         //****************************************************************************************
         if( window.FormData ){
           form_data = new FormData(form);
           }
  	      //**********************************************************************************************
         xmlhttp.open('POST',url,true);
         //**********************************************************************************************
         xmlhttp.send(form_data);
         //***********************************************************************************************
         xmlhttp.addEventListener('load', escribir, false);
         }
         
document.getElementById("nombre").addEventListener('focus', function () {
        enviarFormulario( "formulario", "comprovar.php", "imagen" )
        }, false);