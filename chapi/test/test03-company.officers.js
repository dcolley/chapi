// const CHAPI = require("../index")
const Company = require("../company")
let apiKey = "f62f9cc3-1748-4c8b-85e0-15f396a81fac"
let companyID = "07981449"

// const chapi = new CHAPI(apiKey)

async function go() {
    let c = new Company(apiKey, companyID)
    console.debug(c.companyNumber)

    let res = await c.getOfficers()
    let s = JSON.stringify(res)
    console.log(JSON.stringify(JSON.parse(s), null, 2))
}

go()