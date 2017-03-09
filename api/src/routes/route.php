<?php

use app\controller\PublicController;


$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
})->add('CORS');


$app->group('/families', function (){
      $this->get('', PublicController::class. ':getFamilies')->setName('listFamilies');
      $this->get('/{id}', PublicController::class. ':getFamilyById');
      $this->get('/{id}/services', PublicController::class. ':getServicesByFamily');
});

$app->group('/services', function (){
      $this->get('', PublicController::class. ':getServices')->setName('listServices');
      $this->get('/{id}', PublicController::class. ':getServiceById');
      $this->get('/{id}/areas', PublicController::class. ':getAreasByService');
});

$app->group('/areas', function (){
      $this->get('', PublicController::class. ':getAreas')->setName('listAreas');
      $this->get('/{id}/services', PublicController::class. ':getServicesByArea')->setName('listServicesByArea');
      $this->get('/{id}/families', PublicController::class. ':getFamiliesByArea')->setName('listFamiliesByArea');;
});
