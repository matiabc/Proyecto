<?php
    header('Content-type:application/json');
    header("Access-Control-Allow-Origin:*");

    $json = file_get_contents('php://input'); 
    $info = json_decode($json,true);

    $jsonData = file_get_contents('datos.json');

    if(empty($jsonData)){
        $archivo = fopen("datos.json", "w");
        fwrite($archivo,$json);

    } else{
        $arrayData=json_decode($jsonData);
        array_push($arrayData,$info);
        $jsonData = json_encode($arrayData);
              
        $archivo = fopen("datos.json", "w");
        fwrite($archivo,$jsonData); 

    }


?>