<?php
session_name("sesion");
session_start();

function generarCodigo($longitud) {
 $key = $_SESSION[nombre_usuario];
 $pattern = '1234567890abcdefghijklmnopqrstuvwxyz';
 $max = strlen($pattern)-1;
 for($i=0;$i < $longitud;$i++) $key .= $pattern{random_int(0,$max)};
 return $key;
}
if ($conexion=mysqli_connect("localhost","tiradito","punknotdead"))
   {
    function proteccion ($v,$c)
             {  
              $v = mysqli_real_escape_string($c, $v);
              $v = htmlentities($v , ENT_QUOTES);
              $v = trim($v);
              return $v;
             };

    $usuario = proteccion($_POST["usuario"],$conexion);
    $contrasena = proteccion($_POST["contrasena"],$conexion);
    $perfil_privado = proteccion($_POST["perfil_privado"], $conexion);
    
    if (mysqli_select_db($conexion,"Perfiles"))
       {
        $mysql_consultar_si_existe_usuario="select nombre_de_usuario from usuarios where nombre_de_usuario='".$usuario."'";
        if ($res=mysqli_query($conexion, $mysql_consultar_si_existe_usuario))
           {
            if (mysqli_num_rows($res) === 0)
               {  echo "0";
           //     echo "El usuario ".$usuario." no existe en la base de datos1";
               }
                else{
//******************************************************************************
//Ahora preguntamos el el login y el password coinciden en la base de datos
                     $consulta="select * from  usuarios where nombre_de_usuario='".$usuario."' and contrasena='".$contrasena."'";
                     $result=mysqli_query($conexion,$consulta);
                     if (mysqli_num_rows($result) == 0)
                        {  echo "0";
                //         echo "El usuario y el pass ingresados no conciden";
                        }
                        else{
                              // echo"inicio";
//******************************************************************************
//Ahora le damos acceso a nuestros contenidos restringidos

                              $llave=password_hash($usario, PASSWORD_DEFAULT);
                              $punto=strpos($llave, "\.");
                              $llave= substr($llave,$punto);
                              $llave.generarCodigo($punto);
                              $ID_usuario=$_SESSION["ID_usuario"];
                              $sentencia_MYSQL_agregar_registro= "UPDATE Sesiones_activas SET Llaves=$llave WHERE (ID_usuario= $ID_usuario )";
                              mysqli_query($sentencia_MYSQL_agregar_registro);
                              $_SESSION["usuario"]=$usuario;

                              echo $llave;

//header("Location: index.php");
//******************************************************************************
                              
                              }
//******************************************************************************
                    }
           }
            else {  echo "0";
         //         echo "no se logro consultar a la tabla";
                  };
       }
        else {  echo "0";
      //        echo "no se logro seleccionar la base de datos";
             };
   }
    else { echo "0";
      //    echo "no se logro conectar con la base de datos";
         };
//*******************************************************************************


?>