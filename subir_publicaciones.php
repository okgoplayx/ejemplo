<?php

function proteccion ($v)
{
   $v = mysql_real_escape_string($v);
   $v = htmlentities($v , ENT_QUOTES);
   $v = trim($v); 
   return $v;
}
$contenido = proteccion ($_POST["texto_de_publicacion"]); 
/*--
+++++++++++++++++++++++++++++++

strlen()

addSlashes(). Devuelve una cadena con barras
invertidas delante de los caracteres que los
necesitan en consultas a Bases de Datos.

stripSlashes(). Es la contraria de la anterior, elimina
las barras invertidas delante de caracteres
especiales. 





*/
 ?>