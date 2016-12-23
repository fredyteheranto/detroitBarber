<?php
$host="localhost";
$user="dev";
$pass="";
$db="barber";

$conexion=mysqli_connect($host,$user,$pass,$db) or die ("No se pudo conectar");
mysqli_select_db($conexion,$db) or die ("Seleccion de base de datos fallida" . mysql_error());
?>