<?php

use app\controller\PublicController;


$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
})->add('CORS');


$app->group('/familles', function (){
      $this->get('', PublicController::class. ':getFamilies')->setName('listfamilies');
      $this->get('/{id}', PublicController::class. ':getFamilyById');
      $this->get('/{id}/services', PublicController::class. ':getServicesByFamily');
});

$app->group('/services', function (){
      $this->get('', PublicController::class. ':getServices')->setName('listservices');
      $this->get('/{id}', PublicController::class. ':getServiceById');
      $this->get('/{id}/zones', PublicController::class. ':getAreasByService');
});

$app->group('/zones', function (){
      $this->get('', PublicController::class. ':getAreas')->setName('listareas');
      $this->get('/{id}/familles', PublicController::class. ':getFamiliesByArea');
});
