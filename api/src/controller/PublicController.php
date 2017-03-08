<?php

namespace app\controller;

use app\models\Famille;
use app\models\Service;
use app\models\Zone;


use Illuminate\Database\Eloquent\ModelNotFoundException;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


class PublicController extends AbstractController
{
    public function getFamilles($req,$res,$args)
    {
    	try {

        	$familles = Famille::all();
        	return $this->json_success($res, 200, $familles);

    	} catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}
        
    }

    public function getFamilleById($req, $res,$args)
    {
    	try {

    		$familles = Famille::where("id", "=", $args["id"])->firstOrFail();
    		return $this->json_success($res, 200, $familles);

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

    public function getZones($req,$res,$args)
    {
    	try {

	        $zones = Zone::all();
	        return $this->json_success($res, 200, $zones);

	    } catch (ModelNotFoundException $e) {

    		return $this->json_error($res, 404, "Not found");

    	}
    }

        public function getZoneServices($req,$res,$args)
        {
        	try {

    	        $zone = Zone::where("id", "=", $args["id"])->firstOrFail();
    	        $services = $zone->services;
    	        return $this->json_success($res, 200, $services);

    	    } catch (ModelNotFoundException $e) {

        		return $this->json_error($res, 404, "Not found");

        	}
        }

		public function getNumberServicesByZones($req, $res, $args)
		{  
			try {
    	        $zones = Zone::all();
				
				//$zone->services->count() 
				foreach($zones as $zone)
				{
					
							$zones_by_services[] = array("code" => $zone->code ,
									"nombre" => $zone->services->count) ;
						
				}
    	    	return $this->json_success($res, 200, json_encode($zones_by_services));

    	    } catch (ModelNotFoundException $e) {

        		return $this->json_error($res, 404, "Not found");
        	}
		}


}
