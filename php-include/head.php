<?php
// outputs head element contents, takes page title and description as arguments
function output_head($page_title, $page_description) {
    echo <<<HEAD
<!doctype html>
<!-- Begin html5 document -->
<html lang="en-GB">
    <!-- Begin head element -->
    <head>
        <meta charset="utf-8">
        <title>$page_title</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="$page_description">
        <meta name="author" content="Beshoy Bebawe">
        <!-- Font Awesome icons cdn -->
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
            crossorigin="anonymous">
        <!-- Google fonts -->
        <link href="https://fonts.googleapis.com/css?family=Finger+Paint" rel="stylesheet">
        <!-- CSS external stylesheet -->
        <link rel="stylesheet" href="css/main.css">
        <!-- Html5 shim for legacy browsers support, hosted by google -->
        <!--[if lt IE 9]>
        <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
    </head>
    <!-- End head element -->
HEAD;

} // end function
?>