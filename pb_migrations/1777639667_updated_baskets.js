/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1302879749")

  // update collection data
  unmarshal({
    "listRule": "1 = 1",
    "viewRule": "1 = 1"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1302879749")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != null",
    "viewRule": "companion = @request.auth.id"
  }, collection)

  return app.save(collection)
})
