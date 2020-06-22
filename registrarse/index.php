<!DOCTYPE html>
<html lang="es">
	<head>
        <meta charset='utf-8'> 
		<title>registrarce</title>
		<link rel="stylesheet" type="text/css" href="css.css">
	</head>
	<body>  
	
	  <div>
	     <form id="formulario" name="forml" method="post" action="cargado.php">
	            <ul>
	                <li>
	                <ul> 
	                     <li><label>Nombre de usuario</label></li>
	                     <li><input id="nombre" type="text" name='nombre' value=""></li>
	                     <li id="imagen"><img src="cargando.gif" ></li>
	                </ul>
	                </li>
	                <li>
	                <ul> 
	                     <li><label>Contraseña</label></li>
	                     <li><input id="contra" type="password" name="contra" value=""></li>
	                </ul>
	                </li>
	                <li>
	                <ul> 
	                     <li><label>repita contraseña</label></li>
	                     <li><input type="password" name="repcontra" value=""></li>
	                </ul>
	                </li>
	                   <li>
	                <ul> 
	                     <li><label>correo</label></li>
	                     <li><input type="text" name="correo" value=""></li>
	                </ul>
	                </li>
	                   <li>
	                <ul> 
	                     <li><label>fecha</label></li>
	                     <li><input type="text" name="fecha" value=""></li>
	                </ul>
	                </li>
	                <li><input type="submit" name="aceptar" value="aceptar"></li>
	            
	            </ul>
	     
	     </form>
	  </div>
	  <?php
	  ?>
	  <script type="text/javascript" src="javascript.js">
	  
	  </script>
	</body>
</html>
    