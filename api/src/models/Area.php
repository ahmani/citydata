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
		return $this->belongsToMany('src\models\Service','service_by_area','id_service','id_area')->withPivot('number');
	}

  //une zone a plusieurs familles
  public function family()
	{
		return $this->hasMany('src\models\Family','id_area');
	}

}
