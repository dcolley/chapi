const CHAPI = require("../index")

let apiKey = "f62f9cc3-1748-4c8b-85e0-15f396a81fac"
// let companyID = "01603201"
let officerID = "kWmw46zlqWMhkExvfcnABcEhBmM"
let q = "Derek William Colley"

const chapi = new CHAPI(apiKey)

async function go() {
    let o = await chapi.officerSearch(q)
    let s = JSON.stringify(o)
    console.log(JSON.stringify(JSON.parse(s), null, 2))
}

go()