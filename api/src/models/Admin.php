<?php

namespace app\models;

use Illuminate\Database\Eloquent\Model as Model;
use Illuminate\Database\Capsule\Manager as DB;

Class Admin extends Model
{
	protected  $table = "admin";
	protected  $primaryKey = "id" ;
	public $timestamps =false;

}
