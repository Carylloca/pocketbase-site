/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2616739443")

  // add field
  collection.fields.addAt(7, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2616739443",
    "hidden": false,
    "id": "relation3533388796",
    "maxSelect": 999,
    "minSelect": 0,
    "name": "organizers",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2616739443")

  // remove field
  collection.fields.removeById("relation3533388796")

  return app.save(collection)
})
