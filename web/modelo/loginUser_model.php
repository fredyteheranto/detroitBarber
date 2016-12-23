<?php
include 'db.php';

session_start();

$user = $_POST["user"];
$pass = $_POST["pass"];

$Sql = "select * from usuarios where usuario = '$user' and contrasena = '$pass'";
$result = mysqli_query($conexion,$Sql);
$num_row = mysqli_num_rows($result);
$row = mysqli_fetch_array($result);
//echo $Sql ;
//echo $result;
 if ($num_row == 1){
   echo  "1";
   $_SESSION['login_user']=$row['id'];
   //include '../vista/home.php';
}else{
     echo '2';
   // echo $result;
}
mysqli_close($conexion);
?>