/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "pkf83gfz19fzkfk",
    "created": "2024-10-24 07:21:07.567Z",
    "updated": "2024-10-24 07:21:07.567Z",
    "name": "showcase",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "wfwnais1",
        "name": "name",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vdhmk0rm",
        "name": "products",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "03d3rm3tlmoiuxm",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": null,
          "displayFields": []
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("pkf83gfz19fzkfk");

  return dao.deleteCollection(collection);
})
