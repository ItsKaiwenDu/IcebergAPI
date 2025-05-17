/// <reference path="../pb_data/types.d.ts" />

const apiResultsCache = new Map();

const URL = "http://127.0.01:8090"

const APIResultsExample = [
    {
        "name": "weather",
        "description": "Weather channel",
        "category": "Weather",
        "url": new URL("https://weather.com"),
        "requireApiKey": true,
        "relevanceScore": 102,
        "httpSecure": true,
        "supportCORS": true,
    },
]

routerAdd("POST", "/api/favorite", (e) => {
    const id = e.auth?.id

    if (!id) {
        return e.json(401, { error: "Unauthorized" })
    }

    const data = new DynamicModel({
        index: 0, // Text field
    })
    e.bindBody(data)

    const apiResultCache = apiResultsCache.get(id)

    if (typeof apiResultCache !== "object") {
        return e.json(401, { error: "User does not have existing results they searched" })
    }

    let favoritesCollection = $app.findCollectionByNameOrId("favorites")
    let promptRecord = $app.findRecordById("prompts", apiResultCache["recordId"])

    let favoritesRecord = new Record(favoritesCollection)

})

routerAdd("POST", "/api/result", (e) => {
    const id = e.auth?.id

    if (!id) {
        return e.json(401, { error: "Unauthorized" })
    }

    const data = new DynamicModel({
        prompt: "", // Text field
    })
    e.bindBody(data)

    let collection = $app.findCollectionByNameOrId("prompts")
    let record = new Record(collection)

    record.set("prompt", data["prompt"])
    record.set("user", id)

    $app.save(record)

    let apiResults = []

    apiResults = APIResultsExample

    apiResultsCache.set(id, {
        "recordId": record.id,
        "result": apiResults,
    })

    return e.json(200, {"result": apiResults})
}, $apis.requireAuth())

routerAdd("GET", "/api/auth/login", (e) => {
    return e.json(200, {"success": true})
}, $apis.requireAuth())

onRecordAfterUpdateSuccess((e) => {
    console.log("user updated...", e.record.get("email"))

    e.next()
}, "users")

onBootstrap((e) => {
    e.next()

    const utils = require(`${__hooks}/utils.js`)
    console.log("App initialized!")
})
