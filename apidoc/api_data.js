define({ "api": [
  {
    "group": "Areas",
    "name": "GetAreas",
    "version": "0.1.0",
    "type": "get",
    "url": "/areas",
    "title": "Accès à une table de ressources de type area",
    "description": "<p>Accès à une table de ressources de type area.<br/> Retourne cette table, incluant un ensemble de ressources de type service avec leurs id, code et libelle.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de l'area</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code de l'area</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle de l'area</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": "<p>Table de ressources de type area</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n[\n      {\n            \"id\": 1,\n            \"code\": \"543950101\",\n            \"libelle\": \"Haut-du-Lievre Nord Gentilly\"\n      },\n      {\n            \"id\": 2,\n            \"code\": \"543950102\",\n            \"libelle\": \"Haut-du-Lievre Tamaris Tilleul Argente\"\n      },\n      {\n            \"id\": 3,\n            \"code\": \"543950103\",\n            \"libelle\": \"Haut-du-Lievre Blanc Sycomore\"\n      },\n      {\n            \"id\": 4,\n            \"code\": \"543950201\",\n            \"libelle\": \"Cure d'Air\"\n      }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Areas"
  },
  {
    "group": "Areas",
    "name": "GetAreasByService",
    "version": "0.1.0",
    "type": "get",
    "url": "/areas/{id}/services",
    "title": "Accès à une table de ressources de type service d'une area désignée",
    "description": "<p>Accès à une table de ressources de type service d'une area désignée.<br/> Retourne cette table, incluant un ensemble de ressources de type area avec leurs id, title et id_family.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique de l'area</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "id_family",
            "description": "<p>Identifiant de la famille du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": "<p>Table de ressources de type service</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n[\n      {\n            \"id\": 5,\n            \"title\": \"Epicerie\",\n            \"id_family\": 5,\n            \"pivot\": {\n                  \"id_area\": 5,\n                  \"id_service\": 5,\n                  \"number\": 1\n            }\n      },\n      {\n            \"id\": 11,\n            \"title\": \"Magasin de vêtements\",\n            \"id_family\": 7,\n            \"pivot\": {\n                  \"id_area\": 5,\n                  \"id_service\": 11,\n                  \"number\": 1\n            }\n      },\n      {\n            \"id\": 19,\n            \"title\": \"Parfumerie\",\n            \"id_family\": 7,\n            \"pivot\": {\n                  \"id_area\": 5,\n                  \"id_service\": 19,\n                  \"number\": 1\n            }\n      }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Areas"
  },
  {
    "group": "Areas",
    "name": "GetFamiliesByArea",
    "version": "0.1.0",
    "type": "get",
    "url": "/areas/{id}/services",
    "title": "Accès à une table de ressources de type family d'une area désignée",
    "description": "<p>Accès à une table de ressources de type family d'une area désignée.<br/> Retourne cette table, incluant un ensemble de ressources de type family avec leurs id, description et color.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique de l'area</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la famille</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la famille</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Couleur de la famille</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": "<p>Table de ressources de type family</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n[\n     {\n            \"id\": 5,\n            \"description\": \"Petit commerce alimentaire\",\n            \"color\": null\n      },\n      {\n            \"id\": 7,\n            \"description\": \"Habillement et bien être\",\n            \"color\": null\n      }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Areas"
  },
  {
    "group": "Areas",
    "name": "getDetailsByArea",
    "version": "0.1.0",
    "type": "get",
    "url": "/areas/{id}/deails",
    "title": "Accès à une table de details d'une area désignée",
    "description": "<p>Accès à une table de détails d'une area désignée.<br/> Retourne cette table, incluant la famille, le nombre, le pourcentage et l'ensemble des services de l'area désignée.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique de l'area</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "family",
            "description": "<p>Famille présente dans l'area</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Nombre d'apparition de la famille</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "pourcentage",
            "description": "<p>Pourcentage du nombre total d'apparitions</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Object[]",
            "optional": false,
            "field": "services",
            "description": "<p>Table de ressources de type service</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n[\n         {\n               \"family\": \"Librairie\",\n               \"number\": 1,\n               \"pourcentage\": 8,\n               \"services\": [\n                     {\n                         \"id\": 10,\n                         \"title\": \"Librairie papeterie journaux\",\n                         \"id_family\": 6,\n                         \"id_service\": 10,\n                         \"id_area\": 2,\n                         \"number\": 1\n                     }\n               ]\n         },\n         {\n               \"family\": \"Habillement et bien être\",\n               \"number\": 1,\n               \"pourcentage\": 8,\n               \"services\": [\n                     {\n                         \"id\": 11,\n                         \"title\": \"Magasin de vêtements\",\n                         \"id_family\": 7,\n                         \"id_service\": 11,\n                         \"id_area\": 2,\n                         \"number\": 1\n                     }\n               ]\n         },\n         {\n               \"family\": \"Ecole élémentaire\",\n               \"number\": 8,\n               \"pourcentage\": 67,\n               \"services\": [\n                     {\n                         \"id\": 26,\n                         \"title\": \"Ecole élémentaire\",\n                         \"id_family\": 14,\n                         \"id_service\": 26,\n                         \"id_area\": 2,\n                         \"number\": 8\n                     }\n               ]\n         },\n         {\n               \"family\": \"Ecole maternelle\",\n               \"number\": 2,\n               \"pourcentage\": 17,\n               \"services\": [\n                     {\n                         \"id\": 29,\n                         \"title\": \"Ecole maternelle\",\n                         \"id_family\": 15,\n                         \"id_service\": 29,\n                         \"id_area\": 2,\n                         \"number\": 2\n                     }\n               ]\n         }\n   ]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Areas"
  },
  {
    "group": "Families",
    "name": "GetFamilies",
    "version": "0.1.0",
    "type": "get",
    "url": "/families",
    "title": "Accès à une table de ressources de type family",
    "description": "<p>Accès à une table de ressources de type family.<br/> Retourne cette table, incluant un ensemble de ressources de type family avec leurs id, description et color.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la family</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la family</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Couleur de la family</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": "<p>Table de ressources de type family</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 200 OK\n\n{\n     \"0\" => {\n         family : {\n             \"id\"  : 1 ,\n             \"description\"  : \"Parking\",\n             \"color\"   : NULL\n         }\n     },\n     \"1\" => {\n         family : {\n             \"id\"  : 2 ,\n             \"description\"  : \"Arrêt de bus\",\n             \"color\"   : NULL\n         }\n     },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Families"
  },
  {
    "group": "Families",
    "name": "GetFamilyById",
    "version": "0.1.0",
    "type": "get",
    "url": "/families/{id}",
    "title": "Accès à une ressource family",
    "description": "<p>Accès à une ressource de type family permet d'accéder à la représentation de la ressource family désignée. Retourne une représentation json de la ressource, incluant son id, description et color.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique de la family</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la family</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la family</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "color",
            "description": "<p>Couleur de la family</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 200 OK\n\n{\n       \"id\"  : 1 ,\n       \"description\" : \"Parking\",\n       \"color\": NULL\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Families"
  },
  {
    "group": "Families",
    "name": "GetGroupedAreasByFamilies",
    "version": "0.1.0",
    "type": "get",
    "url": "/families/areas",
    "title": "Accès à une table de zones (areas) d'une famille désignée",
    "description": "<p>Accès à une table de zones (areas) d'une famille désignée.<br/> Retourne cette table, incluant le nombre total d'apparition de la famille désignée dans les zones ainsi qu'une table de zones avec leurs id_area, code et nombre.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "n",
            "description": "<p>Nombre total d'apparition de la famille dans les zones</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Object[]",
            "optional": false,
            "field": "values",
            "description": "<p>Table de valeurs</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": "<p>Table de zones (areas)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n{\n      \"n\": 14,\n      \"values\": [\n            {\n                  \"id_area\": 25,\n                  \"code\": \"0703\",\n                  \"nombre\": 1\n            },\n            {\n                  \"id_area\": 28,\n                  \"code\": \"0803\",\n                  \"nombre\": 3\n            },\n            {\n                  \"id_area\": 32,\n                  \"code\": \"0902\",\n                  \"nombre\": 1\n            },\n            {\n                  \"id_area\": 37,\n                  \"code\": \"1002\",\n                  \"nombre\": 1\n            },\n            {\n                  \"id_area\": 6,\n                  \"code\": \"0203\",\n                  \"nombre\": 1\n            },\n            {\n                  \"id_area\": 10,\n                  \"code\": \"0401\",\n                  \"nombre\": 1\n            },\n            {\n                  \"id_area\": 17,\n                  \"code\": \"0504\",\n                  \"nombre\": 1\n            },\n            {\n                  \"id_area\": 23,\n                  \"code\": \"0701\",\n                  \"nombre\": 1\n            },\n            {\n                  \"id_area\": 29,\n                  \"code\": \"0804\",\n                  \"nombre\": 2\n            },\n            {\n                  \"id_area\": 35,\n                  \"code\": \"0905\",\n                  \"nombre\": 1\n            },\n            {\n                  \"id_area\": 40,\n                  \"code\": \"1102\",\n                  \"nombre\": 1\n            }\n      ]\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Families"
  },
  {
    "group": "Families",
    "name": "GetServicesByFamily",
    "version": "0.1.0",
    "type": "get",
    "url": "/families/{id}/services",
    "title": "Accès à une table de ressources de type service d'une famille désignée",
    "description": "<p>Accès à une table de ressources de type service d'une famille désignée.<br/> Retourne cette table, incluant un ensemble de ressources de type service avec leurs id, title et id_family.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique de la family</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "id_family",
            "description": "<p>Identifiant de la famille du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": "<p>Table de ressources de type service</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 200 OK\n\n{\n     \"0\" => {\n         service : {\n             \"id\"  : 1 ,\n             \"title\"  : \"Hypermarché\",\n             \"id_family\"   : 3\n         }\n     },\n     \"1\" => {\n         service : {\n             \"id\"  : 2 ,\n             \"title\"  : \"Supermarché\",\n             \"id_family\"   : 3\n         }\n     },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Families"
  },
  {
    "group": "Services",
    "name": "DeleteService",
    "version": "0.1.0",
    "type": "delete",
    "url": "/services/{id}",
    "title": "Suppression d'un service",
    "description": "<p>Supprimer un service Supprimer un service dans la base</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique du service</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 404 Deleted\n{\n      \"Deletion done\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n{\n      \"Error\" : \"Id not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Services"
  },
  {
    "group": "Services",
    "name": "GetAreasByService",
    "version": "0.1.0",
    "type": "get",
    "url": "/services/{id}/areas",
    "title": "Accès à une table de ressources de type area d'un service désigné",
    "description": "<p>Accès à une table de ressources de type area d'un service désigné.<br/> Retourne cette table, incluant un ensemble de ressources de type area avec leurs id, code et libelle.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique du service</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de l'area</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "code",
            "description": "<p>Code de l'area</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "libelle",
            "description": "<p>Libelle de l'area</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": "<p>Table de ressources de type area</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": " HTTP/1.1 200 OK\n\n[\n      {\n        \"id\": 20,\n        \"code\": \"543950602\",\n        \"libelle\": \"Vauban Nord Placieux Parc Sainte-Marie\",\n        \"pivot\": {\n            \"id_service\": 33,\n            \"id_area\": 20,\n            \"number\": 2\n        }\n      },\n      {\n        \"id\": 32,\n        \"code\": \"543950902\",\n        \"libelle\": \"Gambetta Carmes Faiencerie\",\n        \"pivot\": {\n            \"id_service\": 33,\n            \"id_area\": 32,\n            \"number\": 2\n        }\n      },\n      {\n        \"id\": 34,\n        \"code\": \"543950904\",\n        \"libelle\": \"Charles Iii Nord Tiercelins St-Georges\",\n        \"pivot\": {\n            \"id_service\": 33,\n            \"id_area\": 34,\n            \"number\": 6\n        }\n      }\n]",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Services"
  },
  {
    "group": "Services",
    "name": "GetServiceById",
    "version": "0.1.0",
    "type": "get",
    "url": "/services/{id}",
    "title": "Accès à une ressource service",
    "description": "<p>Accès à une ressource de type service permet d'accéder à la représentation de la ressource service désignée. Retourne une représentation json de la ressource, incluant son id, title et id_family.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique du service</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "id_family",
            "description": "<p>Identifiant de la famille du service</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 200 OK\n\n{\n       \"id\"  : 1 ,\n       \"title\" : \"Hypermarché\",\n       \"id_family\": 3\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Services"
  },
  {
    "group": "Services",
    "name": "GetServices",
    "version": "0.1.0",
    "type": "get",
    "url": "/services",
    "title": "Accès à une table de ressources de type service",
    "description": "<p>Accès à une table de ressources de type service.<br/> Retourne cette table, incluant un ensemble de ressources de type service avec leurs id, title et id_family.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "id_family",
            "description": "<p>Identifiant de la famille du service</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Object[]",
            "optional": false,
            "field": "table",
            "description": "<p>Table de ressources de type service</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 200 OK\n\n{\n     \"0\" => {\n         service : {\n             \"id\"  : 1 ,\n             \"title\"  : \"Hypermarché\",\n             \"id_family\"   : 3\n         }\n     },\n     \"1\" => {\n         service : {\n             \"id\"  : 2 ,\n             \"title\"  : \"Supermarché\",\n             \"id_family\"   : 3\n         }\n     },\n     \"2\" => {\n         service : {\n             \"id\"  : 3 ,\n             \"title\"  : \"Grande surface de bricolage\",\n             \"id_family\"   : 4\n         }\n     },\n     \"3\" => {\n         service : {\n             \"id\"  : 4 ,\n             \"title\"  : \"Supérette\",\n             \"id_family\"   : 5\n         }\n     },\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "NotFound",
            "description": "<p>No query results</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Services"
  },
  {
    "group": "Services",
    "name": "ModifyServices",
    "version": "0.1.0",
    "type": "put",
    "url": "/services/{id}",
    "title": "Modification d'un service",
    "description": "<p>Modification d'un service désigné</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant unique du service</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de paramètres",
          "content": "{\n  \"title\"         : \"Service modifié\",\n  \"id_family\"     : 6\n}",
          "type": "request"
        }
      ]
    },
    "header": {
      "fields": {
        "request headers": [
          {
            "group": "request headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type:",
            "defaultValue": "application/json",
            "description": "<p>format utilisé pour les données transmises</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Réponse : 201": [
          {
            "group": "Réponse : 201",
            "type": "json",
            "optional": false,
            "field": "service",
            "description": "<p>représentation json du service modifié</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 201 UPDATED\n{\n      \"id\": 19,\n      \"title\": \"Service modifié\",\n      \"id_family\": 6\n}",
          "type": "response"
        }
      ]
    },
    "error": {
      "fields": {
        "Réponse : 500": [
          {
            "group": "Réponse : 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Erreur interne du serveur.</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Services"
  },
  {
    "group": "Services",
    "name": "addServices",
    "version": "0.1.0",
    "type": "post",
    "url": "/services",
    "title": "Création d'une ressource service",
    "description": "<p>Création d'une ressource de type Service Le service est ajouté dans la base, son id est créé. Le titre et l'id de la famille du service doivent être fournis</p>",
    "parameter": {
      "fields": {
        "request parameters": [
          {
            "group": "request parameters",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>Titre du service</p>"
          },
          {
            "group": "request parameters",
            "type": "Number",
            "optional": false,
            "field": "id_family",
            "description": "<p>Identifiant de la famille du service</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de paramètres",
          "content": "{\n  \"title\"         : \"Nouveau service\",\n  \"id_family\"     : 1\n}",
          "type": "request"
        }
      ]
    },
    "header": {
      "fields": {
        "request headers": [
          {
            "group": "request headers",
            "type": "String",
            "optional": false,
            "field": "Content-Type:",
            "defaultValue": "application/json",
            "description": "<p>format utilisé pour les données transmises</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Réponse : 201": [
          {
            "group": "Réponse : 201",
            "type": "json",
            "optional": false,
            "field": "service",
            "description": "<p>représentation json du nouveau service</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "{\n    \"id\": 19,\n    \"title\": \"Nouveau service\",\n    \"id_family\": 1\n}",
          "type": "response"
        }
      ]
    },
    "error": {
      "fields": {
        "Réponse : 500": [
          {
            "group": "Réponse : 500",
            "optional": false,
            "field": "InternalServerError",
            "description": "<p>Erreur interne du serveur.</p>"
          }
        ]
      }
    },
    "filename": "api/src/routes/route.php",
    "groupTitle": "Services"
  }
] });
