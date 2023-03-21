<?php 

// функция для хэширования
function hash_password($password)
{   $password = trim($password);
    $password = stripslashes($password);
    $password = htmlspecialchars($password);
    $password=md5($password);
     return $password;
}

include 'connect.php';
// Получаем данные с формы
  $name=$mysqli->real_escape_string(htmlspecialchars( $_POST['user_name']));
  $password = $mysqli->real_escape_string(htmlspecialchars( $_POST['Password']));
  $password=hash_password( $password);
   //  Запрос для получения пароля пользователя
   $query = "SELECT * FROM `Users_burger_site` WHERE name = '$name'";
   $success = $mysqli->query($query);
   $row = mysqli_fetch_assoc($success);

   if($row['password']==$password && !empty($row['password']) && !empty($password) ){
    echo '1' ;
   } 
   else{
     $auth =False;
      echo $auth ;
    
   }
  













// функция для хэширования
// function hash_password($password)
// {
//     $password=md5($password);
//      return $password;
// }

 ?>