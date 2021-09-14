const Company = require("../company")
const Officer = require("../officer")

// list of companies to process
var cq = {}

// list of officers to process
var oq = []

var apiKey = "f62f9cc3-1748-4c8b-85e0-15f396a81fac"
// start with a company...
var companyNumber = "11310159" // TWL

async function handleOfficers(ol) {
    for(var i=0; i<ol.length; i++) {
        // for each office, find the 

    }
}

async function go() {
    // get company's officers
    var c = new Company(apiKey, companyNumber)
    var res = await c.getOfficers()
    cq[companyNumber] = {
        companyNumber: companyNumber,
        status: "",
        officers: res.items
    }
    oq = res.items
    console.log(oq)
}


go()