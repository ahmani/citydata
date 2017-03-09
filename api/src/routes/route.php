<?php

use app\controller\PublicController;
use app\controller\PrivateController;


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
      $this->get('/{id}/information', PublicController::class. ':getInformationByService')->setName('informationByService');
      $this->get('/{id}/coordinates', PublicController::class. ':getCoordinatesByService')->setName('coordinatesByService');
      $this->post('', PrivateController::class. ':addServices')->setName('addNewServices');
      $this->put('/{id}', PrivateController::class. ':modifyServices')->setName('modifyServices');
      $this->delete('/{id}', PrivateController::class. ':deleteServices')->setName('deleteServices');
});

$app->group('/areas', function (){
      $this->get('', PublicController::class. ':getAreas')->setName('listAreas');
      $this->get('/{id}/services', PublicController::class. ':getServicesByArea')->setName('listServicesByArea');
      $this->get('/{id}/families', PublicController::class. ':getFamiliesByArea')->setName('listFamiliesByArea');
      $this->get('/{id}/information', PublicController::class. ':getInformationByArea')->setName('informationByArea');
});
