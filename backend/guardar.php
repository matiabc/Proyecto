<?php
    header('Content-type:application/json');
    header("Access-Control-Allow-Origin:*");

    $json = file_get_contents('php://input'); 
    $info = json_decode($json,true);

    echo $info

?>