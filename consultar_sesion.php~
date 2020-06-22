<?php
session_start();

function proteccion ($v)
{
   $v = mysql_real_escape_string($v);
   $v = htmlentities($v , ENT_QUOTES);
   $v = trim($v); 
   return $v;
}
//*********************************************************************************************************
echo "<br> lo llegado por el post usuario es: " ;
echo $_POST["usuario"];
echo "<br> lo llegado por el post contrasena es: " ;
echo $_POST["contrasena"];
//*************************************************************************************************
$nombre = proteccion($_POST["usuario"]);
$contrasena = proteccion($_POST["contrasena"]); 

$conexion = mysql_connect("localhost","root","punknotdead");

if (mysql_select_db("perfiles",$conexion)){ echo "se conecto con la base de datos";};

//***************************************************************************
//Preguntamos si el usuario existe en la base de datos
$sql="select nombre_de_usuario from usuarios where nombre_de_usuario='".$nombre."'";
//$res=mysql_db_query($bd,$sql,$con);

$res=mysql_query($sql,$conexion);

//**************************************************************************
if (mysql_num_rows($res) == 0)
{
   echo "<script type='text/javascript'>
       alert('El usuario ".$nombre." no existe en la base de datos');
   /* window.location='index.php'; */
   </script>";
}else
{
//******************************************************************************
//Ahora preguntamos el el login y el password coinciden en la base de datos 

$consulta="select * from  usuarios
where
nombre_de_usuario='".$nombre."'
and
contra='".$contrasena."' ";
$result=mysql_query($consulta,$conexion);
//********************************************************************************
if (mysql_num_rows($result) == 0)
{
   echo "<script type='text/javascript'>
    alert('El usuario y el pass ingresados no conciden');
   /* window.location='index.php'; */
   </script>";
}
else
{
//******************************************************************************
//Ahora le damos acceso a nuestros contenidos restringidos
   $_SESSION["usuario"]=$nombre;
// header("Location: index.php");
   echo "<br> tutu";
//******************************************************************************
}
//******************************************************************************
}


//*******************************************************************************

if ($_SESSION["usuario"])
{
?>

<br>
hola usuario: <?php echo $_SESSION["usuario"];?>
<br />
<a href="prueba.php">ir</a>
<br />
<a href="salir.php">Salir</a>

<?php
}
else
{
   echo "<script type='text/javascript'>
      alert('Usted no está logueado');
    /* window.location='index.php'; */
   </script>";
   echo "<br> lo que hay en session usuario es:";
   echo $_SESSION["usuario"];
}





//****************************************************************************************************
$consulta= mysql_query('SELECT * FROM usuarios WHERE nombre_de_usuario="'.$nombre.'" AND contra="'.$contrasena.'" ', $conexion);
$array_consulta= mysql_fetch_array($consulta);

if ($array_consulta==false)
 {
   echo "<br> usuario no encontrado en nuestra base de datos";
    }
   else {
   //   $_SESSION["nombre"]= $array_consulta["nombre"];
   }  
   echo "<br> su secion se llama:";
   echo $_SESSION["usuario"];
   echo "<br> su nombre de perfil es:";
   echo $nombre;
   echo "<br> su contraseña es:";
   echo $contrasena;
   echo "<br> su su consulta es:";
   echo $consulta;

?>