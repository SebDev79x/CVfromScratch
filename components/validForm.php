<?php 
$_POST = json_decode(file_get_contents('php://input'),true);
if(isset($_POST) && !empty($_POST)){
   // Tableau contenant les erreurs
   $message = array();
// Regex numéros de tél français
$regPhone = '/^((\+)33|0)[1-9](\d{2}){4}$/';
// On gère les numéros qui contiendraient 8 zéro après 06,05 etc.
$regPhone2 =  '/^((\+)33|0)[1-9](0){8}$/';
// Username, subject, contact 
$regexName = '/^([A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\?\-\s]{2,50})$/';

if (empty($_POST['myData']['firstName'])) {
    // Si soumission form et input vide
    $message['firstName'] = 'Ce champ est vide.';
} else if (!preg_match($regexName, $_POST['myData']['firstName'])) {
    // Si soumission form et saisie non conforme
    $message['firstName'] = 'La saisie semble invalide...';
} else {
    // Validation    
    $message['firstName'] = 'Champ correct';
}

if (empty($_POST['myData']['lastName'])) {
    // Si soumission form et input vide
    $message['lastName'] = 'Ce champ est vide.';
} else if (!preg_match($regexName, $_POST['myData']['lastName'])) {
    // Si soumission form et saisie non conforme
    $message['lastName'] = 'La saisie semble invalide...';
} else {
    // Validation    
    $message['lastName'] = 'Champ correct';
}

if (empty($_POST['myData']['email'])) {
    // Si soumission form et input vide
    $message['email'] = 'Ce champ est vide.';
} else if (!filter_var($_POST['myData']['email'], FILTER_VALIDATE_EMAIL)) {
    // Si soumission form et saisie non conforme
    $message['email'] = 'La saisie semble invalide...';
} else {
    // Validation    
    $message['email'] = 'Champ correct';
}

if (empty($_POST['myData']['phone'])) {
    // Si soumission form et input vide
    $message['phone'] = 'Ce champ est vide.';
} else if (!preg_match($regPhone, $_POST['myData']['phone']) || (preg_match($regPhone2, $_POST['myData']['phone']))) {
    // Si soumission form et saisie non conforme
    $message['phone'] = 'La saisie semble invalide...';
} else {
    // Validation    
    $message['phone'] = 'Champ correct';
}

if (empty($_POST['myData']['subject'])) {
    // Si soumission form et input vide
    $message['subject'] = 'Ce champ est vide.';
} else if (!preg_match($regexName, $_POST['myData']['subject'])) {
    // Si soumission form et saisie non conforme
    $message['subject'] = 'La saisie semble invalide...';
} else {
    // Validation    
    $message['subject'] = 'Champ correct';
}

if (empty($_POST['myData']['messageContact'])) {
    // Si soumission form et input vide
    $message['messageContact'] = 'Ce champ est vide.';
} else if (!preg_match($regexName, $_POST['myData']['messageContact'])) {
    // Si soumission form et saisie non conforme
    $message['messageContact'] = 'La saisie semble invalide...';
} else {
    // Validation    
    $message['messageContact'] = 'Champ correct';
}

   /* if(empty($_POST['myData']['username']) ){
    $message['username'] = 'Indiquez votre nom';
   }
   if(!empty($_POST['myData']['phone']) ){
    
    if(preg_match($regexPhoneNumber, $_POST['myData']['phone'])){
        $message = "Youpo";
       } else{
        $message['invalid'] = 'invalide';
       }
   }else{
    $message['empty'] = 'empty';
   } */
    
 
   $_POST['message']  = $message;
   echo json_encode($_POST);
}

/*GOOD
$data = json_decode(file_get_contents('php://input'),true);
if(isset($data) && !empty($data)){
    $myData = $data['myData'];
    echo json_encode($myData);
//https://www.dynamic-mess.com/php/php-post-vide-json/

} */

/* if(!empty($data)){ 

    echo json_encode($name);
}else{
    echo json_encode($name);
} */
/* $data = json_decode(file_get_contents('php://input'), true);
if (isset($_POST) && !empty($_POST)) {
    $message = $_POST['message'];
    echo json_encode($message);
}else{
    echo "NOTHING HAPPENS";
} */
?>