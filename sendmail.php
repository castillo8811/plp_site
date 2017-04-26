<?php
/**
 * Created by PhpStorm.
 * User: alex
 * Date: 17/05/15
 * Time: 08:35 PM
 */

require_once 'swiftmailer/lib/swift_required.php';

$nombre   = $_REQUEST['nombre'] ? $_REQUEST['nombre'] : NULL;
$telefono = $_REQUEST['telefono'] ? $_REQUEST['telefono'] : NULL;
$correo   = $_REQUEST['email'] ? $_REQUEST['email'] : NULL;
$asunto        = $_REQUEST['asunto'] ? $_REQUEST['type'] : NULL;
$mensaje = $_REQUEST['mensaje'] ? $_REQUEST['mensaje'] : NULL;

$to = array('castillo8811@gmail.com');


$subject = 'Nos han contactado en PLP Comunicación. - ' . $asunto;
$body    = 'Han usuado el formulario de contacto de PLP Comunicación, estos son los datos: <br /><br />';
$body .= '<strong>Nombre:</strong>' . $nombre .'<br /><br />';
$body .= '<strong>Telefono:</strong>' . $telefono. '<br /><br />';
$body .= '<strong>Correo:</strong>' . $correo . '<br /><br />';
$body .= '<strong>Mensaje:</strong>' . $mensaje. '<br /><br />';


// Create the Transport
$transport = Swift_SmtpTransport::newInstance('localhost', 1025);
// Create the Mailer using your created Transport
$mailer  = Swift_Mailer::newInstance($transport);
$message = Swift_Message::newInstance($subject)
    ->setFrom(array('contacto@plpcomunicacion.com' => 'PLP Comunucación'))
    ->setTo($to)
    ->setContentType('text/html')
    ->setBody($body);
// Send the message
$result = $mailer->send($message);
$result = TRUE;
if ($result) {
    $respond = array(
        'respond' => TRUE,
        'text'    => 'El correo se ha enviado satisfactoriamente.'
    );
    //Save data
    print json_encode($respond);
} else {
    $respond = array(
        'respond' => FALSE,
        'text'    => 'Ha ocurrido un error al enviar el mail, recargue la p&aacute;gina e intente de nuevo por favor.'
    );
    print json_encode($respond);
}
