// const CHAPI = require("../index")
const Company = require("../company")

let apiKey = "f62f9cc3-1748-4c8b-85e0-15f396a81fac"
let companyID = "11310159"

// const chapi = new CHAPI(apiKey)

async function go() {
    let c = new Company(apiKey,companyID)
    let res = await c.get()
//    let c = await chapi.getCompany(companyID)
    console.log(res)
}

go()