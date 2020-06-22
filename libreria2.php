<?php
$con=mysql_connect("localhost","root","punknotdead");
//$bd="trabajo_de_curso";
session_start();

$conexion = mysql_connect("localhost","root","punknotdead");
mysql_select_db("perfiles",$conexion);

//***************************************************************************
//Preguntamos si el usuario existe en la base de datos
$sql="select nombre_de_usuario from usarios
where
nombre_de_usuario='".$_POST["usuario"]."'";
//$res=mysql_db_query($bd,$sql,$con);
$res=mysql_query($sql,$con);
if (mysql_num_rows($res) == 0)
{
	echo "<script type='text/javascript'>
		alert('El usuario ".$_POST["usuario"]." no existe en la base de datos');
	/*	window.location='index.php'; */
	</script>";
}else
{
//******************************************************************************
//Ahora preguntamos el el login y el password coinciden en la base de datos
$consulta="select * from  usarios
where
nombre_de_usuario='".$_POST["usuario"]."'
and
contra='".$_POST["contrasena"]."' ";
$result=mysql_query($consulta,$con);
if (mysql_num_rows($result) == 0)
{
	echo "<script type='text/javascript'>
		alert('El usuario y el pass ingresados no conciden');
	/*	window.location='index.php'; */
	</script>";
}else
{
//******************************************************************************
//Ahora le damos acceso a nuestros contenidos restringidos
	$_SESSION["usuario"]=$_POST["usuario"];
//	header("Location: index.php");
//******************************************************************************
}
//******************************************************************************
}


//*******************************************************************************

if ($_SESSION["usuario"])
{
?>


hola <?php echo $_SESSION["usuario"];?>
<br />
<a href="prueba.php">ir</a>
<br />
<a href="salir.php">Salir</a>

<?php
}else
{
	echo "<script type='text/javascript'>
		alert('Usted no está logueado');
	/*	window.location='index.php'; */
	
	</script>";
	echo "hascas";
	echo $_SESSION["usuario"];
}






function proteccion ($v)
{
	$v = mysql_real_escape_string ($v);
	$v = htmlentities($v , ENT_QUOTES);
	$v = trim($v); 
	return $v;
}



$nombre = proteccion($_POST["usuario"]);
$contrasena = proteccion($_POST["contrasena"]);

$consulta= mysql_query('SELECT * FROM usarios WHERE nombre_de_usuario="'.$nombre.'" AND contra="'.$contrasena.'" ', $conexion);
$array_consulta= mysql_fetch_array($consulta);

if ($array_consulta==false)
 {
   echo "usuario no encontrado en nuestra base de datos";
    }
   else {
	echo "hola";
	//   $_SESSION["nombre"]= $array_consulta["nombre"];

	}
	echo $_SESSION["nombre"];
   echo $nombre;
   echo $contrasena;
   echo $consulta;

?>