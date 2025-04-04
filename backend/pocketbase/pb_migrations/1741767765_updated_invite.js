/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "file916356577",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "photo_invites",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4042354073")

  // remove field
  collection.fields.removeById("file916356577")

  return app.save(collection)
})
