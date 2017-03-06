<?php

namespace app\models;

use Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Database\Capsule\Manager as DB;

Class Service extends Model
{
	protected  $table = "service";
	protected  $primaryKey = "id" ;
	public $timestamps =false;

  // un service peut appartenir a plusieurs zones
	public function areas()
	{
		return $this->belongsToMany('app\models\Area','service_by_area','id_area','id_service')->withPivot('number');
	}

//un service appartient a une famille
  public function family()
	{
		return $this->belongsTo('app\models\Family','id_family');
	}

}
