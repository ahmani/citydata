<?php

namespace app\controller;

use app\models\Family;
use app\models\Service;
use app\models\Area;
use app\models\Geographical_data;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;
use \Illuminate\Database\Capsule\Manager as DB;


class PublicController extends AbstractController
{

    //get the list of the families
    public function getFamilies($req,$res,$args)
    {
    	try {

        	$families = Family::all();
        	return $this->json_success($res, 200, $families);

    	} catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}

    }


    //get a family by its id
    public function getFamilyById($req, $res,$args)
    {

    	try {

    		$families = Family::where("id", "=", $args["id"])->firstOrFail();
    		return $this->json_success($res, 200, $families);

    	} catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}

    }


    //get the list of the services
    public function getServices($req,$res,$args)
    {
    	try {

	        $services = Service::all();
	        return $this->json_success($res, 200, $services);

        } catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}
    }


    //get a service by its id
    public function getServiceById($req, $res,$args)
    {
    	try {

	        $services = Service::where("id", "=", $args["id"])->firstOrFail();
	        return $this->json_success($res, 200, $services);

        } catch (ModelNotFoundException $e) {

        	return $this->json_error($res, 404, "Not found");

        }
    }


    //get the list of the areas
    public function getAreas($req,$res,$args)
    {
    	try {

	        $areas = Area::all();
	        return $this->json_success($res, 200, $areas);

	    } catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}
    }


    //get the services of an area
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


    //get the area of a specific service
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


    //get the services of a family
    public function getServicesByFamily($req,$res,$args)
    {
      try {
        $services = Service::where("id_family", "=", $args["id"])->firstOfFail();
        return $this->json_success($res, 200, $services);

      } catch (ModelNotFoundException $e) {

        return $this->json_error($res, 404, "Not found");
      }
    }


    //get the families of an area
    public function getFamiliesByArea($req,$res,$args)
    // à revoir
    {
      try {
        $area = Area::where("id", "=", $args["id"])->firstOrFail();
        $services = $area->services;

        $s = [];
        foreach($services as $service){
          array_push($s, $service->family);
        }
        $s = array_unique($s);

        //var_dump($s); die();
        return $this->json_success($res, 200, json_encode($s));

      } catch (ModelNotFoundException $e) {

        return $this->json_error($res, 404, "Not found");
      }
    }

		public function getNumberServicesByAreas($req, $res, $args)
		{
			try {
    	      $areas = Area::all();
            foreach($areas as $area)
            {
              foreach($area->servicesCount as $service)
              {
                if($service->countservices != 0)
                {
                  $areas_by_services[] = array("id_area" => $area->id ,
                                              "code" => str_split($area->code, 5)[1] ,
                                              "nombre" => $service->countservices) ;
                }
              }
            }
    	    	return $this->json_success($res, 200, json_encode($areas_by_services));

    	    } catch (ModelNotFoundException $e) {

        		return $this->json_error($res, 404, "Not found");
        	}
		}

    // get all the information of an area
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

    //get all information of a service
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

    /*//get the coordinates of a service
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

    public function getGroupedAreasByFamilies($req,$res,$args)
    {

      $areas = [];

        if(!empty($req->getParsedBody()))
        {
          $p = $req->getParsedBody();

              try {
                $services = Service::where("id_family", "=", $p["id"])->get();
                foreach ($services as $service){
                    foreach($service->areas as $area)
                    {
                      $areas[] = array("id_area" =>  $area->id ,
                                      "code" => str_split( $area->code, 5)[1] ,
                                      "nombre" =>  $area->pivot->number) ;
                    }
                }

              } catch (ModelNotFoundException $e) {
                return $this->json_error($res, 404, "Not found");
              }
        }

          // sum nombre by same id_area
          $groups = array();
          $key = 0;
          $n = 0;
          foreach ($areas as $area) {
                  $key = $area['id_area'];
                  if (!array_key_exists($key, $groups)) {
                      $groups[$key] = array(
                          'id_area' => $area['id_area'],
                          'code' => $area['code'],
                          'nombre' => $area['nombre']
                      );
                  } else {
                      $groups[$key]['nombre'] += $area['nombre'];
                  }
                  $n += $area['nombre'];
                  $key++;
          }
          $values = array_values($groups);



        $result = array (
            'n' => $n,
            'values' => $values
        );


      //var_dump($services); die();
      return $this->json_success($res, 200, json_encode($result));

    }


    public function addGeographicalData($req,$res,$args){
      $data = $req->getParsedBody();

      if (!isset($data['lat']) || !isset($data['lng']) || !isset($data['description']) ||  !isset($data['area']) || !isset($data['service']['id'])) {
        return $this->json_error($res, 404, "Erreur dans le formulaire");
      }

      $lat = filter_var($data['lat'], FILTER_SANITIZE_STRING);
      $lng = filter_var($data['lng'], FILTER_SANITIZE_STRING);
      $description = filter_var($data['description'], FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES);
      $area = filter_var($data['area'], FILTER_SANITIZE_NUMBER_INT);
      $service = filter_var($data['service']['id'], FILTER_SANITIZE_NUMBER_INT);

      $g = new Geographical_data;
      $g->latitude = $lat;
      $g->longitude = $lng;
      $g->description = $description;
      $g->id_area = $area;
      $g->id_service = $service;


      try {
        $g->save();

        $services  = Service::where('id', $service)->get();
        foreach($services as $s){
          if(empty($s->areas->find($area)))
          {
              $s->areas()->sync(array($area));
              $s->areas()->updateExistingPivot($area, array('number' => 1), false);
              $number = 1;
          }
          else{
            $areas = $s->areas->find($area);

            $number = $areas->pivot->number;
            $number = $number +1;
            $s->areas()->updateExistingPivot($area, array('number' => $number), false);
          }

        }

        return $this->json_success($res, 200, json_encode($number));
      }
      catch (ModelNotFoundException $e) {
        return $this->json_error($res, 500, json_encode("Erreur dans la base"));
      }


    }

    //Get list of geographical data
    public function getGeographicalData($req,$res,$args)
    {
     $data = array();
      try{
         $data = Geographical_data::all();
          //$services = Service::where("id_family", "=", $args["id"])->get();
          /*foreach($services as $service)
          {
            $data = Geographical_data::where("id_service", "=", $service->id)->get();
          }*/
      }catch(ModelNotFoundException $e){
        return $this->json_error($res, 404, "Not found");
      }

            return $this->json_success($res, 200, json_encode($data));
    }
}
