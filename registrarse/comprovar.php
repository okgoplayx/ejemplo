
<?php
$conexion = mysql_connect("localhost","root","punknotdead");
mysql_select_db("perfiles");
$sql="select nombre_de_usuario from usuarios where nombre_de_usuario='".$_POST["nombre"]."'";
$res=mysql_query($sql,$conexion);
if (mysql_num_rows($res)==0)
{
	echo "si esta disponible";
}else
{
	echo "no esta disponible";
}
?>
