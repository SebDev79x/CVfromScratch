<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bootstrap Accordion</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">  
<link rel="stylesheet" href="assets/css/style.css">

<!-- <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css">
 -->
 <link rel="shortcut icon" href="#">
  <title>CV Sébastien Mazur</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Acme&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Original+Surfer&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="assets/css/style.css">

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" defer></script>


</head>
<body>
  <!-- SCROLL LINE -->
  <?php include 'components/scrollline.php'; ?>
<div class="wrapper">
        <!-- IDENTITY BLOCK -->
<?php include 'components/identity.php'; ?>
<!-- ACCORDION -->
<?php include 'components/accordion.php'; ?>
<!-- EVALUATIONS -->
<?php include 'components/technos.php'; ?>
<!-- TEST -->
<!-- <?php include 'components/test.php'; ?>-->
 <!-- CHRONO -->
 <?php include 'components/chrono.php'; ?>
<!-- BUTTON TO TOP -->
<?php include 'components/buttontotop.php'; ?>
<!-- CARDS CONTAINER -->
<?php include 'components/cardscontainer.php'; ?>
<!-- FOOTER -->
<?php include 'components/footer.php'; ?>
</div>
<script src="assets/js/domready.js"></script>
<script src="assets/js/scrolltotop.js"></script>
<script src="assets/js/scrollline.js"></script>
<script src="assets/js/evaluations.js"></script>
<script src="assets/js/hidenavbar.js"></script>
<script src="assets/js/tree.js" type="module"></script>
<script src="assets/js/chrono.js" type="module"></script>
<script src="assets/js/functions.js" type="module"></script>
</body>
</html>                            