<?php

namespace app\models;

use Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Database\Capsule\Manager as DB;

Class Famille extends Model
{
	protected  $table = "famille";
	protected  $primaryKey = "id" ;
	public $timestamps =false;

  //une famille a plusieurs services
	public function services()
	{
		return $this->hasMany('src\models\Service','id_famille');
	}



}
