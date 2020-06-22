<?php
session_name("session");
session_start();
$conexion=mysqli_connect("localhost","tiradito","punknotdead");
    function proteccion ($v,$c)
             {  
              $v = mysqli_real_escape_string($c, $v);
              $v = htmlentities($v , ENT_QUOTES);
              $v = trim($v);
              return $v;
             };

if($_POST) {} else { echo "post esta vacio";}
foreach ($_POST as $item => $valoro) {
            echo "el valor de $item es: $valoro";
             }
echo $_POST["email"];
echo $_POST["contra"];
echo $_POST["regi_dia"];
echo $_POST["regi_mes"];
echo $_POST["regi_ano"];
echo $_POST["nombre"];
echo $_POST["apellido"];
          
             
             
$nombre_de_usuario = proteccion($_POST["nombre_de_usuario"], $conexion);
$correo = proteccion($_POST["email"], $conexion);
$contra = proteccion($_POST["contra"], $conexion);
$dia = proteccion($_POST["dia"], $conexion);
$mes = proteccion($_POST["mes"], $conexion);
$ano = proteccion($_POST["ano"], $conexion);
$nombre= proteccion($_POST["nombre"], $conexion);
$apellido= proteccion($_POST["apellido"], $conexion);

$contra=  password_hash($contra, PASSWORD_BCRYPT); 
mysqli_select_db($conexion, "Perfiles");

$SQL_agregar_usuario="INSERT usuarios (nombre_de_usuario, correo_electronico, contrasena, fecha_de_nacimiento, nombre, apellido) VALUES ('".$nombre_de_usuario."', '".$correo."', '".$contra."', '".$ano."-".$mes."-".$dia."', '".$nombre."', '".$apellido."')";
echo $SQL_agregar_usuario;
$SQL_verificar_usuario= "SELECT nombre_de_usuario from usuarios WHERE (nombre_de_usuario='".$nombre_de_usuario."')";

if ($res=mysqli_query($conexion, $SQL_verificar_usuario))
   {if (mysqli_num_rows($res)===0){
    if (mysqli_query($conexion, $SQL_agregar_usuario)) 
       {
        echo "1";
       }
       else { $error=mysqli_error($conexion);
            echo $error;
           } 
       } else { echo "usuario ya existente";}
   } else { $error=mysqli_errno(); echo $error;}
?>