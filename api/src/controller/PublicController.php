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
    	try {

        	$families = Family::all();
        	return $this->json_success($res, 200, $families);

    	} catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}

    }

    public function getFamilyById($req, $res,$args)
    {

    	try {

    		$families = Family::where("id", "=", $args["id"])->firstOrFail();
    		return $this->json_success($res, 200, $families);

    	} catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}

    }

    public function getServices($req,$res,$args)
    {
    	try {

	        $services = Service::all();
	        return $this->json_success($res, 200, $services);

        } catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}
    }

    public function getServiceById($req, $res,$args)
    {
    	try {

	        $services = Service::where("id", "=", $args["id"])->firstOrFail();
	        return $this->json_success($res, 200, $services);

        } catch (ModelNotFoundException $e) {

        	return $this->json_error($res, 404, "Not found");

        }
    }

    public function getAreas($req,$res,$args)
    {
    	try {

	        $areas = Area::all();
	        return $this->json_success($res, 200, $areas);

	    } catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}
    }

    public function getServicesByArea($req,$res,$args)
    // à revoir
    {
    	try {

	        $area = Area::where("id", "=", $args["id"])->firstOrFail();
	        $services = $area->services;
          return $this->json_success($res, 200, $services);

	    } catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}
    }

    public function getAreasByService($req,$res,$args)
    {
      try {
        $service = Service::where("id", "=", $args["id"])->firstOrFail();
        $areas = $service->areas;
        return $this->json_success($res, 200, $areas);

      } catch (ModelNotFoundException $e) {

        return $this->json_error($res, 404, "Not found");

      }
    }

    public function getServicesByFamily($req,$res,$args)
    {
      try {
        $services = Service::where("id_family", "=", $args["id"])->firstOfFail();
        return $this->json_success($res, 200, $services);

      } catch (ModelNotFoundException $e) {

        return $this->json_error($res, 404, "Not found");
      }
    }

    public function getFamiliesByArea($req,$res,$args)
    // à revoir
    {
      try {
        $area = Area::where("id", "=", $args["id"])->firstOrFail();
        $services = $area->services;

        // $s = [];
        // foreach($services as $service){
        //   //$family = $service->family;
        //   //$s = array("id" => $family->id);
        //   array_push($s, $service->family);
        //
        // }
        //var_dump($s); die();
        return $this->json_success($res, 200, json_encode($services));

      } catch (ModelNotFoundException $e) {

        return $this->json_error($res, 404, "Not found");
      }
    }

    // get all the information of a given area
      public function getInformationByArea($req,$res,$args){
        try{
          $areas = area::where("id", "=", $args["id"])->firstOrFail();
          foreach($areas as $value){
            $information = $areas->information;
            return $this->json_success($res, 200, json_encode(array("information" => $information)));
          }
        }catch (ModelNotFoundException $e) {
            return $this->json_error($res, 404, "Not found");
        }
      }

    //get all information of a given service
    public function getInformationByService($req,$res,$args){
      try{
        $services = Service::where("id", "=", $args["id"])->firstOrFail();
        foreach($services as $value){
          $information = $services->information;
          return $this->json_success($res, 200, json_encode(array("information" => $information)));
        }
      }catch(ModelNotFoundException $e){
        return $this->json_error($res, 404, "Not found");
      }
    }

    /*//get the coordinates of a given service
    public function getCoordinatesByService($req,$res,$args){
      try{
        $services = Service::where("id", "=", $args["id"])->firstOrFail();
        foreach($services as $value){
          $coordinates = array("latitude"=>$services->latitude, "longitude"=>$services->longitude);
          return $this->json_success($res, 200, $coordinates);
        }
      }catch(ModelNotFoundException $e){
        return $this->json_error($res, 404, "Not found");
      }
    }*/

}
