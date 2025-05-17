/// <reference path="../pb_data/types.d.ts" />

routerAdd("GET", "/hello/{name}", (e) => {
    let name = e.request.pathValue("name");

    return e.json(200, { "message": "Hello " + name })
})

onRecordAfterUpdateSuccess((e) => {
    console.log("user updated...", e.record.get("email"))

    e.next()
}, "users")
