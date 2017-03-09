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

  //add a service to the database
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

}
