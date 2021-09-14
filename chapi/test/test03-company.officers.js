// const CHAPI = require("../index")
const Company = require("../company")

const config = require("./config.json");
let apiKey = config.apiKey
let companyID = config.companyID

// const chapi = new CHAPI(apiKey)

async function go() {
    let c = new Company(apiKey, companyID)
    console.debug(c.companyNumber)

    let res = await c.getOfficers()
    let s = JSON.stringify(res)
    console.log(JSON.stringify(JSON.parse(s), null, 2))
}

go()