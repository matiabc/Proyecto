<?php
    header('Content-type:application/json');
    header("Access-Control-Allow-Origin:*");

    $jsonIniciado = file_get_contents("datos.json");
    echo $jsonIniciado;
    
?>