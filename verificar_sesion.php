<?php
$nombre_anterior = session_name("session");

session_start();

/*pow(0, 0);
$a = 0b1111111;
$b = "hola";
$b += $a;
echo $b;
function analizar_bit ($b) 
         {
          for ($i=0 $i<16 $i++) 
              {
               $j=pow(2, $i);
               if ($b>$j) 
                  {
                   //aca en donde esta este comentario se deveria poner que ejecutar
                   $b-=$j;
                  }
              }
         };
*/
echo "El nombre anterior de la sesión era $nombre_anterior<br />";
$conexion=mysqli_connect("localhost","root","punknotdead");
mysqli_select_db($conexion,"perfiles");
echo session_name();
if ($_SESSION["usuario"])
{
?>


hola <?php echo $_SESSION["usuario"];?>
<br />
<a href="aindex.html">ir</a>
<br />
<a href="cerrar_sesion.php">Salir</a>

<?php
}else
{
echo "<script type='text/javascript'>
alert('Usted no está logueado');
/*window.location='index.php'; */

</script>";
echo "hascas";
echo $_SESSION["usuario"];
}








$consulta= mysqli_query($conexion,'SELECT * FROM usuarios WHERE nombre_de_usuario="'.$usuario.'" AND contra="'.$contrasena.'"');
$array_consulta= mysqli_fetch_array($consulta);

if ($array_consulta==false)
   {
    echo "usuario no encontrado en nuestra base de datos";
   }
   else {
         echo "hola";
//   $_SESSION["usuario"]= $array_consulta["usuario"];
        }
   echo $_SESSION["usuario"];
   echo $usuario;
   echo $contrasena;
   echo $consulta;


?>