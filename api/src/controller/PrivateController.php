<?php

namespace app\controller;

use app\models\Family;
use app\models\Service;
use app\models\Area;
use app\models\Admin;


use Illuminate\Database\Eloquent\ModelNotFoundException;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


class PrivateController extends AbstractController
{

  //add a service in the database
  public function addServices($req,$res,$args){
    $service = new Service;
    if(isset($req->getParsedBody()['title']) &&
       isset($req->getParsedBody()['information'])){
         $service->title = filter_var($req->getParsedBody()['title'], FILTER_SANITIZE_STRING);
         $service->information = filter_var($req->getParsedBody()['information'], FILTER_SANITIZE_STRING);
         $service->save();
         $res = $this->json_success($res, 201, $service->toJson());
    }else{
       $res = $this->json_error($res, 500, "erreur lors de la creation de la ressource");
    }
    return $res;
  }


  //modify a service in the database
  public function modifyServices($req,$res,$args){
    try{
      $service = Service::select()->where('id','=',$args['id'])->firstOrFail();
      $service->title = filter_var($req->getParsedBody()['title'], FILTER_SANITIZE_STRING);
      $service->information = filter_var($req->getParsedBody()['information'], FILTER_SANITIZE_STRING);
      $service->save();
      $res = $this->json_success($res, 201, $service->toJson());
    }catch(ModelNotFoundException $e) {
      $res = $res->withStatus(404)->withHeader('Content-type', 'application/json');
      $errorMessage = ["error" => "id not found" ];
      $res->getBody()->write(json_encode($errorMessage));
    }
    return $res;
  }


  //delete a service in the database
  public function deleteServices($req,$res,$args){
    try{
      $service = Service::select()->where('id','=',$args['id'])->firstOrFail();
      $service->delete();
      $res = $this->json_success($res, 201, "deletion done");
    }catch(ModelNotFoundException $e) {
      $res = $res->withStatus(404)->withHeader('Content-type', 'application/json');
      $errorMessage = ["error" => "id not found" ];
      $res->getBody()->write(json_encode($errorMessage));
    }
    return $res;
  }

}
