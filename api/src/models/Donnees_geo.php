<?php

namespace src\models;

use Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Database\Capsule\Manager as DB;

Class Donnees_geo extends Model
{
	protected  $table = "donnes_geo";
	protected  $primaryKey = "id" ;
	public $timestamps =false;

}
