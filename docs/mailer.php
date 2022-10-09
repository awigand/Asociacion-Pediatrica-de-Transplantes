<?php
if(isset($_POST['submit'])) {
$to = "andrea.wigand@gmail.com";
$subject = "Contacto Asociacion desde web";
$name_field = $_POST['name'];
$email_field = $_POST['email'];
$tel_field = $_POST['tel'];
$city_field = $_POST['city'];
$message = $_POST['message'];
 
$body = "From: $name_field\n E-Mail: $email_field\n $tel_field\n $city_field\n Message:\n $message";
 
echo "Data has been submitted to $to!";
mail($to, $subject, $body);
} else {
echo "error!";
}
?>
