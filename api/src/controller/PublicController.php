<?php

namespace app\controller;

use app\models\Family;
use app\models\Service;
use app\models\Area;


use Illuminate\Database\Eloquent\ModelNotFoundException;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


class PublicController extends AbstractController
{
    public function getFamilies($req,$res,$args)
    {
        $families = Family::all();
        return $this->json_success($res, 200, $families);
    }

    public function getFamilyById($req, $res,$args)
    {
        $families = Family::where("id", "=", $args["id"])->firstOrFail();
        return $this->json_success($res, 200, $families);
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

    public function getAreas($req,$res,$args)
    {
        $areas = Area::all();
        return $this->json_success($res, 200, $areas);
    }

    public function getServicesByFamily($req,$res,$args)
    {
        $services = Service::where("id_family", "=", $args["id"])->get();
        //var_dump($services); die();
        return $this->json_success($res, 200, $services);
    }

    public function getFamiliesByArea($req,$res,$args)
    {
        $services = Service::all();
        $services = $services->areas();

        //var_dump($services); die();
        return $this->json_success($res, 200, $services);
    }

    public function getAreasByService($req,$res,$args)
    {
        $service = Service::where("id", "=", $args["id"])->get();
        $areas = $service->areas();

        //var_dump($services); die();
        return $this->json_success($res, 200, $areas);
    }
}
