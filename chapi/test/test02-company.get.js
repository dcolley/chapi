// const CHAPI = require("../index")
const Company = require("../company")

const config = require("./config.json");
let apiKey = config.apiKey
let companyID = config.companyID

// const chapi = new CHAPI(apiKey)

async function go() {
    let c = new Company(apiKey,companyID)
    let res = await c.get()
//    let c = await chapi.getCompany(companyID)
    console.log(res)
}

go()