<!DOCTYPE html>
<html lang="es">
	<head>
        <meta charset='utf-8'> 
		<title>registrarce</title>
		<link rel="stylesheet" type="text/css" href="css.css">
	</head>
	<body>  

<?php
$conexion = mysql_connect("localhost","root","punknotdead");
mysql_select_db("perfiles");
  if (isset($_POST['nombre'])) {
 $nombre=$_POST['nombre'];
 $contra=$_POST['contra'];
 $repcontra=$_POST['repcontra'];
 $correo=$_POST['correo'];
 $fecha=$_POST['fecha'];
 
 
 
 $sql="select nombre_de_usuario from usuarios where nombre_de_usuario='".$nombre."'";
$res=mysql_query($sql,$conexion);
if (mysql_num_rows($res)===0)
 {
echo $nombre."<br>";
echo $contra."<br>";
echo $repcontra."<br>";
echo $correo."<br>";
echo $fecha."<br>";

     $cad="insert into usuarios (nombre_de_usuario, contra, correo,fecha_de_nacimiento, fecha_de_registro) values ('".$nombre."','".$contra."', '".$correo."','".$fecha."','".$fecha."')";
echo $cad;
mysql_query($cad);
  }
  else {
      echo "nombre de usuario no disponible";
  }
  }
  
  /*

$nombre_fichero = '/var/www/html/mipagina/perfiles/';



if (file_exists($nombre_fichero)) {
    echo "El fichero $nombre_fichero existe";
} else {
    echo "El fichero $nombre_fichero no existe";
}


*/
?>
</body>
</html>