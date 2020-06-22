<?php

if ($con=mysqli_connect("localhost","tiradito","punknotdead")){
	function proteccion ($v,$c){  
		$v = mysqli_real_escape_string($c, $v);
		$v = htmlentities($v , ENT_QUOTES);
		$v = trim($v);
		return $v;
		};
	$fecha=proteccion($POST["fecha"],$con);
	$cantidad=proteccion($POST["cantidad"],$con);
	$sql="select * from publicaciones order by fecha asc LIMIT "."2".","."5";
    mysqli_select_db($con, "Usuarios");
    if($res=mysqli_query($con, $sql))
      { 
       while ($matriz=mysql_fetch_array($res))
             {
             foreach($matriz as $indice=>$valor)
                    {
                     echo "<br> el indice es:".$indice."su valor es:".$valor;
                    }
             }
      }
     // else { echo mysqli_error($con);}
   }

?>