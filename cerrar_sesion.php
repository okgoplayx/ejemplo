<?php

    //preguntamos si hay una cookie de sesion activa
if (ini_get("session.use_cookies"))
   {   // preguntamos los parametros de la sesion y lo almacenamos
   echo "se esta cerrando la session";
    $params = session_get_cookie_params();
    //configuramos los parametros cambiando solamente la caducacion de la  sesion llenando el resto con los datos que ya estaba
    setcookie(session_name(), '', time() - 42000,$params["path"],$params["domain"],$params["secure"],$params["httponly"]);
    session_destroy();
   }
   else {
         echo "no hay ninguna sesion abierta";
   	  };
?>