/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1302879749")

  // update collection data
  unmarshal({
    "createRule": "companion = @request.auth.id",
    "deleteRule": "1 = 0",
    "listRule": "@request.auth.id != null",
    "updateRule": "companion = @request.auth.id",
    "viewRule": "companion = @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1302879749")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
