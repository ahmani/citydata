<?php

namespace app\controller;

use \app\model\Famille;
use \app\model\Service;
use \app\model\Zone;


use Illuminate\Database\Eloquent\ModelNotFoundException;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


class GameController extends AbstractController
{
    public function getFamilles($req,$res,$args)
    {
        $familles = Famille::all();
        return $this->json_success($res, 200, $familles);
    }

    public function getFamilleById($req, $res,$args)
    {
        $familles = Famille::where("id", "=", $args["id"])->firstOrFail();
        return $this->json_success($res, 200, $familles);
    }

    public function getServices($req,$res,$args)
    {
        $services = Service::all();
        return $this->json_success($res, 200, $services);
    }

    public function getServiceById($req, $res,$args)
    {
        $services = Service::where("id", "=", $args["id"])->firstOrFail();
        return $this->json_success($res, 200, $services);
    }

    public function getZones($req,$res,$args)
    {
        $zones = Zone::all();
        return $this->json_success($res, 200, $zones);
    }


}
