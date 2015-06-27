<?php

// print_r($_POST);

$to = 'mjnhb777@gmail.com';

$subject = 'Заявка з сайту Котеджне містечко "Паркове"';


$message = '<html><body>';
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Форма:</strong> </td><td>" . strip_tags($_POST['type']) . "</td></tr>";
$name = $_POST['cb_name'];
if (($name) != '') {
    $message .= "<tr><td><strong>Ім'я:</strong> </td><td>" . strip_tags($name) . "</td></tr>";
}
$mail = $_POST['cb_mail'];           
if (($mail) != '') {
    $message .= "<tr><td><strong>E-mail:</strong> </td><td>" . strip_tags($mail) . "</td></tr>";
}
$tel = $_POST['cb_tel'];           
if (($tel) != '') {
    $message .= "<tr><td><strong>Телефон:</strong> </td><td>" . strip_tags($tel) . "</td></tr>";
}
$message .= "</table>";
$message .= "</body></html>";



$headers = "From: eco site\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=utf-8\r\n";


mail($to, $subject, $message, $headers);