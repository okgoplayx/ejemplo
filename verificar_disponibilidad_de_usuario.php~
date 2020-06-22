<?php
session_name("session");
session_start();
if($conexion=mysqli_connect("localhost","tiradito","punknotdead")) {
	if (mysqli_select_db($conexion, "Perfiles")){
		function proteccion ($v,$c){
			$v = mysqli_real_escape_string($c, $v);
			$v = htmlentities($v , ENT_QUOTES);
			$v = trim($v);
			return $v;
		};
		$nombre_de_usuario = proteccion($_POST["usuario"], $conexion);

 		if($nombre_de_usuario !== "") {
		
			$SQL_verificar_usuario= "SELECT nombre_de_usuario from usuarios WHERE (nombre_de_usuario='".$nombre_de_usuario."')";

			if ($res=mysqli_query($conexion, $SQL_verificar_usuario)){
				if (mysqli_num_rows($res)===0){
					echo "usuario disponible....";
				} else { echo "usuario ya existente......";}
			} else { $error=mysqli_error($conexion); $nuerror=mysqli_errno($conexion); echo $error; echo $nuerror;}
		} else {echo "campo vacio";}
	} else { echo "no se pudo seleccionar la base de datos";}
} else {echo "no se pudo conectar al servidor";}
?>