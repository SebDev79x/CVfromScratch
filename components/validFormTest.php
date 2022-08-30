<?php 
$post = json_decode(file_get_contents('php://input'),true);


$regexName = '/^([A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\?\-\s]{2,50})$/';
$regexMessage = '/^([0-9A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\?\.\:\;\,\!\"\'\(\)\-\s]{8,300})$/';
$regexSubject = '/^([0-9A-Za-zàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð\?\.\:\;\,\!\"\'\(\)\-\s]{3,50})$/';
// Regex numéros de tél français
$regexPhoneNumber = '/^((\+)33|0)[1-9](\d{2}){4}$/';
// On gère les numéros qui contiendraient 8 zéro après 06,05 etc.
$regexPhoneNumber2 = '/^((\+)33|0)[1-9](0){8}$/';
$errors = array();      // Tableau contenant les erreurs
$success = array(); //  Tableau contenant les data
$coords = array();
    // INPUT Subterfuge (pot de miel) pour éviter certains spams. Si champ vide, de grandes
    // chances que ce soit un humain qui ait rempli le form :)
if(isset($post)&&!empty($post)){{
  // INPUT name
  if (empty($post['username'])) {
    // Si soumission form et input vide
    $errors['username'] = 'Veuillez saisir vos nom et prénom s\'il vous plaît.';
} else if (!preg_match($regexName, $post['username'])) {
    // Si soumission form et saisie non conforme
    $errors['username'] = 'La saisie semble invalide...';
} else {
    // Validation
    $username = $post['username'];
    $coords['username'] = $username;
    $success['username'] = '';
}

// INPUT email
if (empty($post['email'])) {
    // Si soumission form et input vide
    $errors['email'] = 'Veuillez saisir une adresse mail s\'il vous plaît.';
} else if (!filter_var($post['email'], FILTER_VALIDATE_EMAIL)) {
    // Si soumission form et saisie non conforme
    $errors['email'] = 'Votre adresse mail semble invalide.';
} else {
    // Validation
    $email = $post['email'];
    $coords['email'] = $email;
    $success['email'] = '';
}

// INPUT phone
if (empty($post['phone'])) {
    // Si soumission form et input vide
    $errors['phone'] = 'Veuillez saisir un numéro de téléphone s\'il vous plaît.';
} else if (!preg_match($regexPhoneNumber, $post['phone']) || (preg_match($regexPhoneNumber2, $post['phone']))) {
    // Si soumission form et saisie non conforme
    $errors['phone'] = 'Votre numéro de téléphone semble invalide.';
} else {
    // Validation
    $phone = $post['phone'];
    $coords['phone'] = $phone;
    $success['phone'] = '';
}

// INPUT subject
if (empty($post['subject'])) {
    // Si soumission form et input vide
    $errors['subject'] = 'Veuillez saisir un sujet s\'il vous plaît.';
} else if (!preg_match($regexSubject, $post['subject'])) {
    // Si soumission form et saisie non conforme
    $errors['subject'] = 'Le sujet semble invalide...';
} else {
    // Validation
    $subject = $post['subject'];
    $coords['subject'] = $subject;
    $success['subject'] = '';
}

// INPUT messageContact
if (empty($post['messageContact'])) {
    // Si soumission form et input vide
    $errors['messageContact'] = 'Veuillez saisir un message s\'il vous plaît.';
} else if (!preg_match($regexMessage, $post['messageContact'])) {
    // Si soumission form et saisie non conforme
    $errors['messageContact'] = 'Le message semble invalide...';
} else {
    // Validation
    $message = $post['messageContact'];
    $coords['messageContact'] = $message;
    $success['messageContact'] = '';
}

}}

      

if (!empty($errors)) {
    // Si tableau $errors contient la moindre erreur
    $post['errors']  = $errors;
    $post['success'] = $success;
    $post['message'] = 'Non non non et non !';
    $post['coordonnees'] = $coords;
    echo json_encode($post);

} else {
    // Sinon tableau $errors vide
    $post['message'] = 'youpi';
    $post['success'] = $success;
    $post['errors']  = $errors;
    $post['coordonnees'] = $coords;
    echo json_encode($post);

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
if (isset($post) && !empty($post)) {
    $message = $post['message'];
    echo json_encode($message);
}else{
    echo "NOTHING HAPPENS";
} */
?>