<?php

namespace app\models;

use Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Database\Capsule\Manager as DB;

Class Family extends Model
{
	protected  $table = "family";
	protected  $primaryKey = "id" ;
	public $timestamps = false;

  //une famille a plusieurs services
	public function services()
	{
		return $this->hasMany('app\models\Service','id_family');
	}

}
