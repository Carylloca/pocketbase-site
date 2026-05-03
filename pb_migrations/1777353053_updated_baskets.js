/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1302879749")

  // remove field
  collection.fields.removeById("relation497276730")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1302879749")

  // add field
  collection.fields.addAt(1, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_3519777609",
    "hidden": false,
    "id": "relation497276730",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "companion_",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
})
