/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8281oyxurytgune",
    "created": "2024-10-24 07:21:07.566Z",
    "updated": "2024-10-24 07:21:07.566Z",
    "name": "carousels",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "vdszubeo",
        "name": "heading",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "vwk8kaf9",
        "name": "image",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": [],
          "maxSelect": 1,
          "maxSize": 20000000,
          "protected": false
        }
      },
      {
        "system": false,
        "id": "7powfsyd",
        "name": "link",
        "type": "url",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "exceptDomains": null,
          "onlyDomains": null
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8281oyxurytgune");

  return dao.deleteCollection(collection);
})
