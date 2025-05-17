/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2151843437")

  // add field
  collection.fields.addAt(9, new Field({
    "cascadeDelete": false,
    "collectionId": "pbc_2721965843",
    "hidden": false,
    "id": "relation1659857976",
    "maxSelect": 1,
    "minSelect": 0,
    "name": "prompt",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "relation"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2151843437")

  // remove field
  collection.fields.removeById("relation1659857976")

  return app.save(collection)
})
