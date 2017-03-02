<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Database\Capsule\Manager as DB;

Class Service extends Model
{
	protected  $table = "service";
	protected  $primaryKey = "id" ;
	public $timestamps =false;

  // un service peut appartenir a plusieurs zones
	public function zones()
	{
		return $this->belongsToMany('src\models\Zone','service_par_zone','id_zone','id_service')->withPivot('nombre');
	}

//un service appartient a une famille
  public function famille()
	{
		return $this->belongsTo('src\models\Famille','id_famille');
	}

}
