<?php

use app\controller\PublicController;
use app\controller\PrivateController;


$app->options('/{routes:.+}', function ($request, $response, $args) {
    return $response;
})->add('CORS');


/**
 * @apiGroup Families
 * @apiName GetFamilies
 * @apiVersion 0.1.0
 *
 * @api {get} /families Accès à une table de ressources de type family
 *
 * @apiDescription Accès à une table de ressources de type family.<br/>
 * Retourne cette table, incluant un ensemble de ressources de type family avec leurs id,
 * description et color.
 *
 * @apiSuccess (Succès : 200) {Number} id Identifiant de la family
 * @apiSuccess (Succès : 200) {String} description Description de la family
 * @apiSuccess (Succès : 200) {String} color Couleur de la family
 *
 * @apiSuccess (Succès : 200) {Object[]} table Table de ressources de type family
 *
 * @apiSuccessExample {json} exemple de réponse en cas de succès
 *     HTTP/1.1 200 OK
 *
 *     {
 *          "0" => {
 *              family : {
 *                  "id"  : 1 ,
 *                  "description"  : "Parking",
 *                  "color"   : NULL
 *              }
 *          },
 *          "1" => {
 *              family : {
 *                  "id"  : 2 ,
 *                  "description"  : "Arrêt de bus",
 *                  "color"   : NULL
 *              }
 *          },
 *     }
 *
 *
 * @apiError (Erreur : 404) NotFound No query results
 */

 /**
* @apiGroup Families
* @apiName GetFamilyById
* @apiVersion 0.1.0
*
* @api {get} /families/{id}  Accès à une ressource family
*
* @apiDescription Accès à une ressource de type family
* permet d'accéder à la représentation de la ressource family désignée.
* Retourne une représentation json de la ressource, incluant son id, description et color.
*
*
* @apiParam {Number} id Identifiant unique de la family
*
*
* @apiSuccess (Succès : 200) {Number} id Identifiant de la family
* @apiSuccess (Succès : 200) {String} description Description de la family
* @apiSuccess (Succès : 200) {String} color Couleur de la family
*
* @apiSuccessExample {json} exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*     {
*            "id"  : 1 ,
*            "description" : "Parking",
*            "color": NULL
*     }
*
*
* @apiError (Erreur : 404) NotFound No query results
*
*/

/**
 * @apiGroup Families
 * @apiName GetServicesByFamily
 * @apiVersion 0.1.0
 *
 * @api {get} /families/{id}/services Accès à une table de ressources de type service d'une famille désignée
 *
 * @apiDescription Accès à une table de ressources de type service d'une famille désignée.<br/>
 * Retourne cette table, incluant un ensemble de ressources de type service avec leurs id,
 * title et id_family.
 * 
 *
 * @apiParam {Number} id Identifiant unique de la family
 *
 *
 * @apiSuccess (Succès : 200) {Number} id Identifiant du service
 * @apiSuccess (Succès : 200) {String} title Titre du service
 * @apiSuccess (Succès : 200) {String} id_family Identifiant de la famille du service
 *
 * @apiSuccess (Succès : 200) {Object[]} table Table de ressources de type service
 *
 * @apiSuccessExample {json} exemple de réponse en cas de succès
 *     HTTP/1.1 200 OK
 *
 *     {
 *          "0" => {
 *              service : {
 *                  "id"  : 1 ,
 *                  "title"  : "Hypermarché",
 *                  "id_family"   : 3
 *              }
 *          },
 *          "1" => {
 *              service : {
 *                  "id"  : 2 ,
 *                  "title"  : "Supermarché",
 *                  "id_family"   : 3
 *              }
 *          },
 *     }
 *
 *
 * @apiError (Erreur : 404) NotFound No query results
 */


/**
 * @apiGroup Families
 * @apiName GetGroupedAreasByFamilies
 * @apiVersion 0.1.0
 *
 * @api {get} /families/areas Accès à une table de zones (areas) d'une famille désignée
 *
 * @apiDescription Accès à une table de zones (areas) d'une famille désignée.<br/>
 * Retourne cette table, incluant le nombre total d'apparition de la famille désignée dans les zones ainsi qu'une table
 * de zones avec leurs id_area, code et nombre.
 *
 * @apiSuccess (Succès : 200) {Number} n Nombre total d'apparition de la famille dans les zones
 * @apiSuccess (Succès : 200) {Object[]} values Table de valeurs
 *
 * @apiSuccess (Succès : 200) {Object[]} table Table de zones (areas)
 *
 * @apiSuccessExample {json} exemple de réponse en cas de succès
 *     HTTP/1.1 200 OK
 *
 *    {
 *          "n": 14,
 *          "values": [
 *                {
 *                      "id_area": 25,
 *                      "code": "0703",
 *                      "nombre": 1
 *                },
 *                {
 *                      "id_area": 28,
 *                      "code": "0803",
 *                      "nombre": 3
 *                },
 *                {
 *                      "id_area": 32,
 *                      "code": "0902",
 *                      "nombre": 1
 *                },
 *                {
 *                      "id_area": 37,
 *                      "code": "1002",
 *                      "nombre": 1
 *                },
 *                {
 *                      "id_area": 6,
 *                      "code": "0203",
 *                      "nombre": 1
 *                },
 *                {
 *                      "id_area": 10,
 *                      "code": "0401",
 *                      "nombre": 1
 *                },
 *                {
 *                      "id_area": 17,
 *                      "code": "0504",
 *                      "nombre": 1
 *                },
 *                {
 *                      "id_area": 23,
 *                      "code": "0701",
 *                      "nombre": 1
 *                },
 *                {
 *                      "id_area": 29,
 *                      "code": "0804",
 *                      "nombre": 2
 *                },
 *                {
 *                      "id_area": 35,
 *                      "code": "0905",
 *                      "nombre": 1
 *                },
 *                {
 *                      "id_area": 40,
 *                      "code": "1102",
 *                      "nombre": 1
 *                }
 *          ]
 *    }
 *
 *
 * @apiError (Erreur : 404) NotFound No query results
 */


$app->group('/families', function (){
      $this->get('', PublicController::class. ':getFamilies')->setName('listFamilies');
      $this->get('/{id}', PublicController::class. ':getFamilyById');
      $this->get('/{id}/services', PublicController::class. ':getServicesByFamily');
      $this->post('/areas', PublicController::class. ':getGroupedAreasByFamilies');
});

/**
 * @apiGroup Services
 * @apiName GetServices
 * @apiVersion 0.1.0
 *
 * @api {get} /services Accès à une table de ressources de type service
 *
 * @apiDescription Accès à une table de ressources de type service.<br/>
 * Retourne cette table, incluant un ensemble de ressources de type service avec leurs id,
 * title et id_family.
 *
 * @apiSuccess (Succès : 200) {Number} id Identifiant du service
 * @apiSuccess (Succès : 200) {String} title Titre du service
 * @apiSuccess (Succès : 200) {String} id_family Identifiant de la famille du service
 *
 * @apiSuccess (Succès : 200) {Object[]} table Table de ressources de type service
 *
 * @apiSuccessExample {json} exemple de réponse en cas de succès
 *     HTTP/1.1 200 OK
 *
 *     {
 *          "0" => {
 *              service : {
 *                  "id"  : 1 ,
 *                  "title"  : "Hypermarché",
 *                  "id_family"   : 3
 *              }
 *          },
 *          "1" => {
 *              service : {
 *                  "id"  : 2 ,
 *                  "title"  : "Supermarché",
 *                  "id_family"   : 3
 *              }
 *          },
 *          "2" => {
 *              service : {
 *                  "id"  : 3 ,
 *                  "title"  : "Grande surface de bricolage",
 *                  "id_family"   : 4
 *              }
 *          },
 *          "3" => {
 *              service : {
 *                  "id"  : 4 ,
 *                  "title"  : "Supérette",
 *                  "id_family"   : 5
 *              }
 *          },
 *     }
 *
 *
 * @apiError (Erreur : 404) NotFound No query results
 */

/**
* @apiGroup Services
* @apiName GetServiceById
* @apiVersion 0.1.0
*
* @api {get} /services/{id}  Accès à une ressource service
*
* @apiDescription Accès à une ressource de type service
* permet d'accéder à la représentation de la ressource service désignée.
* Retourne une représentation json de la ressource, incluant son id, title et id_family.
*
*
* @apiParam {Number} id Identifiant unique du service
*
*
* @apiSuccess (Succès : 200) {Number} id Identifiant du service
* @apiSuccess (Succès : 200) {String} title Titre du service
* @apiSuccess (Succès : 200) {String} id_family Identifiant de la famille du service
*
* @apiSuccessExample {json} exemple de réponse en cas de succès
*     HTTP/1.1 200 OK
*
*     {
*            "id"  : 1 ,
*            "title" : "Hypermarché",
*            "id_family": 3
*     }
*
*
* @apiError (Erreur : 404) NotFound No query results
*
*/

/**
 * @apiGroup Services
 * @apiName GetAreasByService
 * @apiVersion 0.1.0
 *
 * @api {get} /services/{id}/areas Accès à une table de ressources de type area d'un service désigné
 *
 * @apiDescription Accès à une table de ressources de type area d'un service désigné.<br/>
 * Retourne cette table, incluant un ensemble de ressources de type area avec leurs id,
 * code et libelle.
 *
 *
 * @apiParam {Number} id Identifiant unique du service
 *
 *
 * @apiSuccess (Succès : 200) {Number} id Identifiant de l'area
 * @apiSuccess (Succès : 200) {String} code Code de l'area
 * @apiSuccess (Succès : 200) {String} libelle Libelle de l'area
 *
 * @apiSuccess (Succès : 200) {Object[]} table Table de ressources de type area
 *
 * @apiSuccessExample {json} exemple de réponse en cas de succès
 *     HTTP/1.1 200 OK
 *
 *    [
 *          {
 *            "id": 20,
 *            "code": "543950602",
 *            "libelle": "Vauban Nord Placieux Parc Sainte-Marie",
 *            "pivot": {
 *                "id_service": 33,
 *                "id_area": 20,
 *                "number": 2
 *            }
 *          },
 *          {
 *            "id": 32,
 *            "code": "543950902",
 *            "libelle": "Gambetta Carmes Faiencerie",
 *            "pivot": {
 *                "id_service": 33,
 *                "id_area": 32,
 *                "number": 2
 *            }
 *          },
 *          {
 *            "id": 34,
 *            "code": "543950904",
 *            "libelle": "Charles Iii Nord Tiercelins St-Georges",
 *            "pivot": {
 *                "id_service": 33,
 *                "id_area": 34,
 *                "number": 6
 *            }
 *          }
 *    ]
 *
 *
 * @apiError (Erreur : 404) NotFound No query results
 */

/* getInformationByService => Return NULL ? */

/**
* @apiGroup Services
* @apiName addServices
* @apiVersion 0.1.0
*
* @api {post} /services  Création d'une ressource service
*
* @apiDescription Création d'une ressource de type Service
* Le service est ajouté dans la base, son id est créé.
* Le titre et l'id de la famille du service doivent être fournis
*
*
* @apiParam  (request parameters) {String} title Titre du service
* @apiParam  (request parameters) {Number} id_family Identifiant de la famille du service
* @apiHeader (request headers) {String} Content-Type:=application/json format utilisé pour les données transmises
*
*
* @apiParamExample {request} exemple de paramètres
*     {
*       "title"         : "Nouveau service",
*       "id_family"     : 1
*     }
*
*
* @apiSuccess (Réponse : 201) {json} service représentation json du nouveau service
*
* @apiSuccessExample {response} exemple de réponse en cas de succès
* {
*     "id": 19,
*     "title": "Nouveau service",
*     "id_family": 1
* }
*
* @apiError (Réponse : 500) InternalServerError Erreur interne du serveur.
*
*/


/**
* @apiGroup Services
* @apiName ModifyServices
* @apiVersion 0.1.0
*
* @api {put} /services/{id} Modification d'un service
*
* @apiDescription Modification d'un service désigné
*
* @apiParam {Number} id Identifiant unique du service
*
* @apiHeader (request headers) {String} Content-Type:=application/json format utilisé pour les données transmises
*
*
* @apiParamExample {request} exemple de paramètres
*     {
*       "title"         : "Service modifié",
*       "id_family"     : 6
*     }
*
* @apiSuccess (Réponse : 201) {json} service représentation json du service modifié
*
* @apiSuccessExample {response} exemple de réponse en cas de succès
*     HTTP/1.1 201 UPDATED
*     {
*           "id": 19,
*           "title": "Service modifié",
*           "id_family": 6
*     }
*
* @apiError (Réponse : 500) InternalServerError Erreur interne du serveur.
*/

/**
* @apiGroup Services
* @apiName DeleteService
* @apiVersion 0.1.0
*
* @api {delete} /services/{id} Suppression d'un service
*
* @apiDescription Supprimer un service
* Supprimer un service dans la base
*
* @apiParam {Number} id Identifiant unique du service
*
* @apiSuccessExample {json} exemple de réponse en cas de succès
*     HTTP/1.1 404 Deleted
*     {
*           "Deletion done"
*     }
*
* @apiError (Erreur : 404) NotFound No query results
*
* @apiErrorExample {json} exemple de réponse en cas d'erreur
*     HTTP/1.1 404 Not Found
*     {
*           "Error" : "Id not found"
*     }
*
*/

$app->group('/services', function (){
      $this->get('', PublicController::class. ':getServices')->setName('listServices');
      $this->get('/{id}', PublicController::class. ':getServiceById');
      $this->get('/{id}/areas', PublicController::class. ':getAreasByService');
      $this->get('/{id}/information', PublicController::class. ':getInformationByService')->setName('informationByService');
      //$this->get('/{id}/coordinates', PublicController::class. ':getCoordinatesByService')->setName('coordinatesByService');
      $this->post('', PrivateController::class. ':addServices')->setName('addNewServices');
      $this->put('/{id}', PrivateController::class. ':modifyServices')->setName('modifyServices');
      $this->delete('/{id}', PrivateController::class. ':deleteServices')->setName('deleteServices');
});

/**
 * @apiGroup Areas
 * @apiName GetAreas
 * @apiVersion 0.1.0
 *
 * @api {get} /areas Accès à une table de ressources de type area
 *
 * @apiDescription Accès à une table de ressources de type area.<br/>
 * Retourne cette table, incluant un ensemble de ressources de type service avec leurs id,
 * code et libelle.
 *
 * @apiSuccess (Succès : 200) {Number} id Identifiant de l'area
 * @apiSuccess (Succès : 200) {String} code Code de l'area
 * @apiSuccess (Succès : 200) {String} libelle Libelle de l'area
 *
 * @apiSuccess (Succès : 200) {Object[]} table Table de ressources de type area
 *
 * @apiSuccessExample {json} exemple de réponse en cas de succès
 *     HTTP/1.1 200 OK
 *
 *    [
 *          {
 *                "id": 1,
 *                "code": "543950101",
 *                "libelle": "Haut-du-Lievre Nord Gentilly"
 *          },
 *          {
 *                "id": 2,
 *                "code": "543950102",
 *                "libelle": "Haut-du-Lievre Tamaris Tilleul Argente"
 *          },
 *          {
 *                "id": 3,
 *                "code": "543950103",
 *                "libelle": "Haut-du-Lievre Blanc Sycomore"
 *          },
 *          {
 *                "id": 4,
 *                "code": "543950201",
 *                "libelle": "Cure d'Air"
 *          }
 *    ]
 *
 * @apiError (Erreur : 404) NotFound No query results
 */

/**
 * @apiGroup Areas
 * @apiName GetAreasByService
 * @apiVersion 0.1.0
 *
 * @api {get} /areas/{id}/services Accès à une table de ressources de type service d'une area désignée
 *
 * @apiDescription Accès à une table de ressources de type service d'une area désignée.<br/>
 * Retourne cette table, incluant un ensemble de ressources de type area avec leurs id,
 * title et id_family.
 *
 *
 * @apiParam {Number} id Identifiant unique de l'area
 *
 *
 * @apiSuccess (Succès : 200) {Number} id Identifiant du service
 * @apiSuccess (Succès : 200) {String} title Titre du service
 * @apiSuccess (Succès : 200) {String} id_family Identifiant de la famille du service
 *
 * @apiSuccess (Succès : 200) {Object[]} table Table de ressources de type service
 *
 * @apiSuccessExample {json} exemple de réponse en cas de succès
 *     HTTP/1.1 200 OK
 *
 *    [
 *          {
 *                "id": 5,
 *                "title": "Epicerie",
 *                "id_family": 5,
 *                "pivot": {
 *                      "id_area": 5,
 *                      "id_service": 5,
 *                      "number": 1
 *                }
 *          },
 *          {
 *                "id": 11,
 *                "title": "Magasin de vêtements",
 *                "id_family": 7,
 *                "pivot": {
 *                      "id_area": 5,
 *                      "id_service": 11,
 *                      "number": 1
 *                }
 *          },
 *          {
 *                "id": 19,
 *                "title": "Parfumerie",
 *                "id_family": 7,
 *                "pivot": {
 *                      "id_area": 5,
 *                      "id_service": 19,
 *                      "number": 1
 *                }
 *          }
 *    ]
 *
 *
 * @apiError (Erreur : 404) NotFound No query results
 */

/**
 * @apiGroup Areas
 * @apiName GetFamiliesByArea
 * @apiVersion 0.1.0
 *
 * @api {get} /areas/{id}/services Accès à une table de ressources de type family d'une area désignée
 *
 * @apiDescription Accès à une table de ressources de type family d'une area désignée.<br/>
 * Retourne cette table, incluant un ensemble de ressources de type family avec leurs id,
 * description et color.
 *
 *
 * @apiParam {Number} id Identifiant unique de l'area
 *
 *
 * @apiSuccess (Succès : 200) {Number} id Identifiant de la famille
 * @apiSuccess (Succès : 200) {String} description Description de la famille
 * @apiSuccess (Succès : 200) {String} color Couleur de la famille
 *
 * @apiSuccess (Succès : 200) {Object[]} table Table de ressources de type family
 *
 * @apiSuccessExample {json} exemple de réponse en cas de succès
 *     HTTP/1.1 200 OK
 *
 *    [
 *         {
 *                "id": 5,
 *                "description": "Petit commerce alimentaire",
 *                "color": null
 *          },
 *          {
 *                "id": 7,
 *                "description": "Habillement et bien être",
 *                "color": null
 *          }
 *    ]
 *
 *
 * @apiError (Erreur : 404) NotFound No query results
 */

/* getNumberServicesByAreas return => nothing ? */

/**
 * @apiGroup Areas
 * @apiName getDetailsByArea
 * @apiVersion 0.1.0
 *
 * @api {get} /areas/{id}/deails Accès à une table de details d'une area désignée
 *
 * @apiDescription Accès à une table de détails d'une area désignée.<br/>
 * Retourne cette table, incluant la famille, le nombre, le pourcentage et l'ensemble des
 * services de l'area désignée.
 *
 *
 * @apiParam {Number} id Identifiant unique de l'area
 *
 *
 * @apiSuccess (Succès : 200) {String} family Famille présente dans l'area
 * @apiSuccess (Succès : 200) {String} number Nombre d'apparition de la famille
 * @apiSuccess (Succès : 200) {String} pourcentage Pourcentage du nombre total d'apparitions
 * @apiSuccess (Succès : 200) {Object[]} services Table de ressources de type service
 *
 *
 * @apiSuccessExample {json} exemple de réponse en cas de succès
 *     HTTP/1.1 200 OK
 *
 *    [
            {
                  "family": "Librairie",
                  "number": 1,
                  "pourcentage": 8,
                  "services": [
                        {
                            "id": 10,
                            "title": "Librairie papeterie journaux",
                            "id_family": 6,
                            "id_service": 10,
                            "id_area": 2,
                            "number": 1
                        }
                  ]
            },
            {
                  "family": "Habillement et bien être",
                  "number": 1,
                  "pourcentage": 8,
                  "services": [
                        {
                            "id": 11,
                            "title": "Magasin de vêtements",
                            "id_family": 7,
                            "id_service": 11,
                            "id_area": 2,
                            "number": 1
                        }
                  ]
            },
            {
                  "family": "Ecole élémentaire",
                  "number": 8,
                  "pourcentage": 67,
                  "services": [
                        {
                            "id": 26,
                            "title": "Ecole élémentaire",
                            "id_family": 14,
                            "id_service": 26,
                            "id_area": 2,
                            "number": 8
                        }
                  ]
            },
            {
                  "family": "Ecole maternelle",
                  "number": 2,
                  "pourcentage": 17,
                  "services": [
                        {
                            "id": 29,
                            "title": "Ecole maternelle",
                            "id_family": 15,
                            "id_service": 29,
                            "id_area": 2,
                            "number": 2
                        }
                  ]
            }
      ]
 *
 *
 * @apiError (Erreur : 404) NotFound No query results
 */

/* getInformationByArea return => NULL ? */


$app->group('/areas', function (){
      $this->get('', PublicController::class. ':getAreas')->setName('listAreas');
      $this->get('/{id}/services', PublicController::class. ':getServicesByArea')->setName('listServicesByArea');
      $this->get('/{id}/families', PublicController::class. ':getFamiliesByArea')->setName('listFamiliesByArea');
      $this->get('/services/count', PublicController::class. ':getNumberServicesByAreas')->setName('Numberservicesareas');
      $this->get('/{id}/details', PublicController::class. ':getDetailsByArea')->setName('getDetailsByArea');
      $this->get('/{id}/information', PublicController::class. ':getInformationByArea')->setName('informationByArea');
});

$app->group('/admin', function (){
      $this->delete('/families/{id}', PrivateController::class. ':deleteFamily')->setName('removeFamily');
});

$app->group('/geographical-data', function (){
      $this->post('', PublicController::class. ':addGeographicalData');
      $this->get('/services/{id}', PublicController::class. ':getGeographicalDataByService');
});

$app->group('/data', function (){
      $this->post('', PublicController::class. ':getGeographicalData')->setName('ListGeographicalData');

});
