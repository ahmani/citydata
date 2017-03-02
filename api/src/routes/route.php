<?php


$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
})->add('CORS');


$app->group('/app', function (){

});

