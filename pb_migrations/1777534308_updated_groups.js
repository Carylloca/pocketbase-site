/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_3346940990")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\"",
    "viewRule": "@request.auth.id != \"\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_3346940990")

  // update collection data
  unmarshal({
    "listRule": "@request.auth.id != \"\" && organizers ~ @request.auth.id",
    "viewRule": "@request.auth.id != \"\" && organizers ~ @request.auth.id"
  }, collection)

  return app.save(collection)
})
