<?php

namespace app\models;

use Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Database\Capsule\Manager as DB;

Class Geographical_data extends Model
{
	protected  $table = "geographical_data";
	protected  $primaryKey = "id" ;
	public $timestamps =false;

}
