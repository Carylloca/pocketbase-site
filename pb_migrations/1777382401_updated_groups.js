/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3346940990")

  // update collection data
  unmarshal({
    "createRule": "@request.auth.id != \"\"",
    "deleteRule": "@request.auth.id != \"\" && organizers ~ @request.auth.id",
    "listRule": "@request.auth.id != \"\" && organizers ~ @request.auth.id",
    "updateRule": "@request.auth.id != \"\" && organizers ~ @request.auth.id",
    "viewRule": "@request.auth.id != \"\" && organizers ~ @request.auth.id"
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3346940990")

  // update collection data
  unmarshal({
    "createRule": "",
    "deleteRule": "",
    "listRule": "",
    "updateRule": "",
    "viewRule": null
  }, collection)

  return app.save(collection)
})
