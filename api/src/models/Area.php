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

	public function servicesSum()
	{
		return $this->belongsToMany('app\models\Service','service_by_area','id_area','id_service')
		->selectRaw('service.*, sum(service_by_area.number) as sumServices')
		->groupBy('service_by_area.id_service');
	}
}
