<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Database\Capsule\Manager as DB;

Class Zone extends Model
{
	protected  $table = "zone";
	protected  $primaryKey = "id" ;
	public $timestamps =false;

  //une zone à plusieurs services
	public function services()
	{
		return $this->belongsToMany('src\models\Service','service_par_zone','id_service','id_zone');
	}

  //une zone a plusieurs familles
  public function familles()
	{
		return $this->hasMany('src\models\Famille','id_zone');
	}

}
