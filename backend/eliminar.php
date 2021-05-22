<?php

    header('Content-type:application/json');
    header("Access-Control-Allow-Origin:*");

    $json = file_get_contents('php://input');
    $info = json_decode($json,true);

    $jsonDatos = file_get_contents("datos.json");
    $datos = json_decode($jsonDatos,true);

    echo $jsonDatos;

    for($i=0;$i<count($datos);$i++){
        if($datos[$i]["titulo"]==$info[0]["titulo"]){
            if($datos[$i]["descripcion"]==$info[0]["descripcion"]){
                array_splice($datos,$i,1);
                $aux = json_encode($datos);
                $archivo = fopen("datos.json","w");
                fwrite($archivo,$aux);
                break;
            }
        }
    }

?>