<?php 
// function hash_password($password)
// {
//     $password=md5($password);
//      return $password;
// }
include 'connect.php';
  $name=$mysqli->real_escape_string(htmlspecialchars( $_POST['user_name']));
  $password = $mysqli->real_escape_string(htmlspecialchars( $_POST['Password']));

// Занесение новых пользователей работает
try{
   $query = "INSERT INTO `Users_burger_site` ( `name`, `password`) VALUES ( '$name',  '$password');";
       $success = $mysqli->query($query); 
       if ($mysqli->affected_rows == 1){
            echo True;
            $mysqli->close(); 
        }

}

catch(Exception $e){
    echo False;

}
 

   
   

  
        
 
?>