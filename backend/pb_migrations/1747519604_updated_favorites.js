/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2151843437")

  // add field
  collection.fields.addAt(4, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1716317837",
    "max": 0,
    "min": 0,
    "name": "apiCategory",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "number1737394681",
    "max": null,
    "min": null,
    "name": "relevanceScore",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "bool3149799486",
    "name": "requireApiKey",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(10, new Field({
    "hidden": false,
    "id": "bool3359051771",
    "name": "httpSecure",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  // add field
  collection.fields.addAt(11, new Field({
    "hidden": false,
    "id": "bool4279913976",
    "name": "supportCORS",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "bool"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2151843437")

  // remove field
  collection.fields.removeById("text1716317837")

  // remove field
  collection.fields.removeById("number1737394681")

  // remove field
  collection.fields.removeById("bool3149799486")

  // remove field
  collection.fields.removeById("bool3359051771")

  // remove field
  collection.fields.removeById("bool4279913976")

  return app.save(collection)
})
