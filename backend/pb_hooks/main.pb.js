/// <reference path="../pb_data/types.d.ts" />

routerAdd("POST", "/api/favorite", (e) => {
    const id = e.auth?.id

    if (!id) {
        return e.json(401, { error: "Unauthorized" })
    }

    const data = new DynamicModel({
        index: 0, // Text field
        apiResultsCache: {}, // Object field
    })
    e.bindBody(data)

    const apiResultCache = data["apiResultsCache"]

    if (!apiResultCache) {
        return e.json(401, { error: "User does not have existing results they searched" })
    }

    console.log(apiResultCache["recordId"])

    let favoritesCollection = $app.findCollectionByNameOrId("favorites")
    //let promptRecord = $app.findRecordById("prompts", apiResultCache["recordId"])

    if (apiResultCache.get("result")[data["index"]] == null) {
        return e.json(401, { error: "Index not found in cache" })
    }

    const apiResult = apiResultCache.get("result")[data["index"]]

    let favoritesRecord = new Record(favoritesCollection)
    favoritesRecord.set("apiName", apiResult["name"])
    favoritesRecord.set("apiDescription", apiResult["description"])
    favoritesRecord.set("apiCategory", apiResult["category"])
    favoritesRecord.set("apiUrl", apiResult["url"])
    favoritesRecord.set("requireApiKey", apiResult["requireApiKey"])
    favoritesRecord.set("relevanceScore", apiResult["relevanceScore"])
    favoritesRecord.set("httpSecure", apiResult["httpSecure"])
    favoritesRecord.set("supportCORS", apiResult["supportCORS"])

    favoritesRecord.set("prompt", apiResultCache.get("recordId"))
    favoritesRecord.set("user", id)

    $app.save(favoritesRecord)

    return e.json(200, {"success": true})
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

    // let apiResults = [
    //     {
    //         "name": "weather",
    //         "description": "Weather channel",
    //         "category": "Weather",
    //         "url": "https://weather.com",
    //         "requireApiKey": true,
    //         "relevanceScore": 102,
    //         "httpSecure": true,
    //         "supportCORS": true,
    //     },
    // ]

    let apiResults = [];

    let apiResultsRaw;

    try {
        apiResultsRaw = $http.send({
            url: "http://127.0.0.1:8000/api/search",
            method: "POST",
            body: JSON.stringify({ query: data["prompt"] }),
            headers: {"content-type": "application/json"},
            timeout: 120,
        })

        if (apiResultsRaw.statusCode !== 200) {
            return e.json(401, { error: "Unable to get API Results" })
        }
    } catch (err) {
        return e.json(401, { error: "Error with this" })
    }

    for (const result of apiResultsRaw.json["ranked_apis"]) {
        apiResults.push({
            "name": result["name"],
            "url": result["url"],
            "description": result["description"],
            "category": result["category"],
            "relevanceScore": result["relevance_score"],
            "httpSecure": result["https"] === "Yes",
            "requireApiKey": result["auth"] === "Yes",
            "supportCORS": result["cors"] === "Yes",
        })
    }

    $app.save(record)

    return e.json(200, {
        "recordId": record.id,
        "result": apiResults,
    })
}, $apis.requireAuth())

routerAdd("GET", "/api/history", (e) => {
    const id = e.auth?.id

    if (!id) {
        return e.json(401, { error: "Unauthorized" })
    }

    let collection = $app.findCollectionByNameOrId("favorites")

    let records = $app.findRecordsByFilter(
        "favorites",
        "user = {:uid}",
        "-created",
        50,
        0,
        { uid: id }
    )
    let result = {}

    for (const record of records) {
        if (record == null) continue;

        const promptRecord = $app.findRecordById("prompts", record.get("prompt"))

        const promptText = promptRecord.get("prompt")

        if (!result[promptText]) {
            result[promptText] = []
        }

        result[promptText].push({
            "name": record.get("apiName"),
            "url": record.get("apiUrl"),
            "description": record.get("apiDescription"),
            "category": record.get("apiCategory"),
            "relevanceScore": record.get("relevanceScore"),
            "requireApiKey": record.get("requireApiKey"),
            "httpSecure": record.get("httpSecure"),
            "supportCORS": record.get("supportCORS"),
        })
    }

    return e.json(200, result)
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

    const config = require(`${__hooks}/config.js`)
    console.log("App initialized!")
})
