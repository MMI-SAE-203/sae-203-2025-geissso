/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_324716379")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file347571224",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_324716379")

  // remove field
  collection.fields.removeById("file347571224")

  return app.save(collection)
})
