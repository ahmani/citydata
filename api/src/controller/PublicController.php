<?php

namespace app\controller;

use \app\model\Famille;

use Illuminate\Database\Eloquent\ModelNotFoundException;
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;


class GameController extends AbstractController
{
    public function getFamilles($req,$res,$args)
    {
        $familles = Famille::all();
        return $this->json_success($res, 200, $familles);
    }


}
