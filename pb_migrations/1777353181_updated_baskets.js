/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1302879749")

  // add field
  collection.fields.addAt(2, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_1712899670",
    "hidden": false,
    "id": "relation796638169",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "companions",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1302879749")

  // remove field
  collection.fields.removeById("relation796638169")

  return app.save(collection)
})
