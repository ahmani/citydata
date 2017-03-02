<?php

use app\controller\PublicController;


$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
})->add('CORS');


$app->group('/familles', function (){
      $this->get('', PublicController::class. ':getfamilles')->setName('listfamilles');
       
});

