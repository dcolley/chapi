const CHAPI = require("../index")

const config = require("./config.json");
let apiKey = config.apiKey
// let companyID = config.companyID
let officerID = config.officerID

const chapi = new CHAPI(apiKey)

async function go() {
    let o = await chapi.getOfficer(officerID)
    let s = JSON.stringify(o)
    console.log(JSON.stringify(JSON.parse(s), null, 2))
}

go()