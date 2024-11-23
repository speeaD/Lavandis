/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "di90cc152v5432y",
    "created": "2024-10-24 07:21:07.566Z",
    "updated": "2024-10-24 07:21:07.566Z",
    "name": "categories",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "v1bvd1rj",
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
        "id": "enh2pbcx",
        "name": "slug",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("di90cc152v5432y");

  return dao.deleteCollection(collection);
})
