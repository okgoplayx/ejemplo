<?php

$nombre_anterior = session_name("sesion");
session_start();

$usuario=$_COOKIE["usuario"];
$llave=$_COOKIE["llave"];

$conexion=mysqli_connect("localhost","root","punknotdead");

$consulta="select llave from  Sesiones_activas where nombre_de_usuario='".$usuario."' and llave='".$llave."'";
$res=mysqli_query($conexion, $consulta);
if(0==mysqli_num_rows($res)){};
$_SESSION["nombre"]="susu";

echo $nombre_anterior;
if ($_SESSION["usuario"])
{
	echo "1";
}
else {
echo "0";
}
?>