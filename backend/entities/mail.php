<?php
require_once "lib/bootstrap.php";
setlocale(LC_CTYPE, 'nl_BE.utf8');

function ApiCreateMail()
{
    //doorgestuurde data ophalen
    $contents = json_decode( file_get_contents("php://input") );
    $name = $contents->name;
    $email = $contents->email;
    $message = $contents->message;

    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers .= 'From: <$email>' . "\r\n";
    $headers .= 'To: getINSPIRED <getinspired@gmail.com>' . "\r\n";
    //$headers .= 'Bcc: info@info.be' . "\r\n";

    $to = "getinspired@gmail.com";
    $subject = "You got mail from $name";
    $message = $message;

    mail($to, $subject, $message, $headers);

    return new Response("Mail verzonden!");
}