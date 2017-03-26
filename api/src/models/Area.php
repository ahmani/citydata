<?php

namespace app\models;

use Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Database\Capsule\Manager as DB;

Class Area extends Model
{
	protected  $table = "area";
	protected  $primaryKey = "id" ;
	public $timestamps =false;

  //une zone a plusieurs services
	public function services()
	{
		return $this->belongsToMany('app\models\Service','service_by_area','id_area','id_service')->withPivot('number');
	}

	public function servicesCount()
	{
		//SELECT *, SUM(number) FROM `service_by_area` GROUP by id_area ORDER by id_area DESC,SUM(number) DESC
		return $this->belongsToMany('app\models\Service','service_by_area','id_service','id_area')->withPivot('number')->selectRaw('count(service_by_area.id_service) as countservices');
	}
}
