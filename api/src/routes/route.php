<?php

use app\controller\PublicController;


$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
})->add('CORS');


$app->group('/familles', function (){
      $this->get('', PublicController::class. ':getFamilles')->setName('listfamilles');
      $this->get('/{id}', PublicController::class. ':getFamilleById');
});

$app->group('/services', function (){
      $this->get('', PublicController::class. ':getServices')->setName('listservices');
      $this->get('/{id}', PublicController::class. ':getServiceById');
});

$app->group('/zones', function (){
      $this->get('', PublicController::class. ':getZones')->setName('listzones');
});