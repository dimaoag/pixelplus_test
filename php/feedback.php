<?php

require_once './vendor/autoload.php';

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$cellphone = $_REQUEST['cellphone'];
$message = $_REQUEST['message'];

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mailer = new PHPMailer();

$mailer->CharSet = 'UTF-8';
$mailer->IsSMTP();
$mailer->SMTPAuth = true;
$mailer->SMTPSecure = "tls";
$mailer->Host = "smtp.gmail.com";
$mailer->Port = 587;
$mailer->Username = "dimaoag@gmail.com"; //Your email (gmail)
$mailer->Password = "*****";  // Change password!!!!!!!!!!!
$mailer->SetFrom('dimaoag@gmail.com','Dima');  //Your email (gmail) and your name
$mailer->FromName = "pixelplus_test.com";
$mailer->AddAddress($email);
$mailer->Subject = "Testing site";
$mailer->Body = "<h2>Name: $name</h2>" . "<br>" . "<h2>Cellphone: $cellphone</h2>" . "<br>" . "<p>$message</p>";
$mailer->IsHTML (true);

if (!$mailer->Send())
{
    echo "Error: $mailer->ErrorInfo";
}
else
{
    echo "Message Sent!";
}


$path = 'http://' . $_SERVER['HTTP_HOST'] . '/pixelplus_test/index.html'; //Change path to index.html
header("Location: ". $path);


?>