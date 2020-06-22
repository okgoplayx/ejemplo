//*****************************************************************************************

// verificar sesion
function verificar() {
          xmlhttp = inicializa_xhr();

          function resultado() {
                               if (xmlhttp.responseText=="1") 
                                 {// alert("se logro ingresar")
                                   document.getElementById("perfil").style.display="block";
                                   document.getElementById("ingreso").style.display="none";
                                 }
                               else {//alert(xmlhttp.responseText)
                                     document.getElementById("perfil").style.display="none";
                                     document.getElementById("ingreso").style.display="block";
                                    }
                               }
          xmlhttp.open('POST', "verificar.php",true);
          xmlhttp.send(null);
          xmlhttp.addEventListener('load', resultado, false);

}

window.onload = verificar();

//************************************************************************************************
// ingresar
function ingresar () {
        function cookieDeSesion(){
        if (xmlhttp.responseText !== 0) {
        document.cookie = xmlhttp.responseText;
        }
        enviarFormulario("iniciar_sesion.php","formulario_de_ingreso", null, cookieDeSesion);
}}
document.getElementById("ingresar").addEventListener('click', ingresar, false);

// document.getElementById("formulario_de_registro").submit();


//****************************************************************************************************************
// enviar reguistro


function enviar_registro () {
         if (document.getElementById("nombre").value && document.getElementById("apellido").value && document.getElementById("nombre_de_usuario").value && document.getElementById("email").value && document.getElementById("contra").value && document.getElementById("regi_dia").value && document.getElementById("regi_mes").value && document.getElementById("regi_ano").value)
            {
             if (document.getElementById("repcontra").value === document.getElementById("contra").value)
                {  // alert("contraseñas coinsiden")
                enviarFormulario ("registro.php", "formulario_de_registro")
                } else {  document.getElementById("indicacion_repcontra").innerText="la contraseña con coinside"}
            } else {document.getElementById("indicacion_repcontra").innerText="comprete todo los campos "}
         }



document.getElementById("aceptar_registro").addEventListener('click', enviar_registro, false);

//********************************************************************************************************
//verificar usuario

function verificaUsuario() 
         { 
          usuario_a_verificar= document.getElementById("nombre_de_usuario").value;
          var a_verificar={usuario:usuario_a_verificar};
          usuario_disponible=enviarFormulario("verificar_disponibilidad_de_usuario.php", null, a_verificar, function () {escribir("indicacion_nombre_usuario")} );
          if (usuario_disponible=1) { document.getElementById("indicacion_nombre_usuario").value="Usuario Disponible";}
         }
document.getElementById("nombre_de_usuario").addEventListener('blur', verificaUsuario, false);


//********************************************************************************************************
//validar_formulario

(function () {
var re = new RegExp("[A-Z][a-z]");


function validarNombre(){var expreg= new RegExp("^[A-Za-z]{1,63}$|^[A-Za-z]{1,63}\\s[A-Za-z]{1,63}$");
                         if (expreg.test(document.getElementById("nombre").value)) {
                            document.getElementById("indicacion_nombre").innerText="Todo correcto";
                         }
                         else {document.getElementById("indicacion_nombre").innerText="no cumple con las condiciones"
                         };
                         
                         }
function validarApellido(){var expreg= new RegExp("^[A-Za-z]{1,63}$|^[A-Za-z]{1,63}\\s[A-Za-z]{1,63}$");
                         if (expreg.test(document.getElementById("apellido").value)) {
                            document.getElementById("indicacion_apellido").innerText="Todo correcto";
                         }
                         else {document.getElementById("indicacion_apellido").innerText="No cumple con las condiciones";};
                         }
function validarCorreo(){var expreg= new RegExp("^[A-Za-z0-9]{1,63}@{1}[a-z.0-9]{1,255}$");
                         if (expreg.test(document.getElementById("email").value)) {
                            document.getElementById("indicacion_correo").innerText="Todo correcto";
                         }
                         else {document.getElementById("indicacion_correo").innerText="No cumple"};
                         }
function validarContrasena(){
         var expreg= new RegExp("^[A-Za-z]{2}"); // el "$" al final limitaria a solo dos en total ahora solo tiene que cumplir con dos letras al principio
         if (document.getElementById("contra").value.length == 0 || document.getElementById("repcontra").value.length == 0)
            { document.getElementById("indicacion_contra").innerText="no dejar campo vacio"
             }
            else if(document.getElementById("contra").value!== document.getElementById("repcontra").value) {
            document.getElementById("indicacion_contra").innerText="Todo correcto";
            }
            else if (expreg.test(document.getElementById("repcontra").value)) { document.getElementById("indicacion_repcontra").innerText="Todo correcto"}
            else { document.getElementById("indicacion_repcontra").innerText="campo vacio"}
         }
function validarRepContra(){}
document.getElementById("nombre").addEventListener('blur', validarNombre, false);
document.getElementById("apellido").addEventListener('blur', validarApellido, false);
document.getElementById("email").addEventListener('blur', validarCorreo, false);
document.getElementById("contra").addEventListener('blur', validarContrasena, false);
document.getElementById("repcontra").addEventListener('blur', validarRepContra, false);
document.getElementById("contra").addEventListener('blur', validarContrasena, false);

}
)();

