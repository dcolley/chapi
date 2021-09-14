const Company = require("../company")
const Officer = require("../officer")

// list of companies to process
var cq = {}

// list of officers to process
var oq = []

const config = require("./config.json");
let apiKey = config.apiKey
let companyNumber = config.companyID
// let officerID = config.officerID
// let q = config.search

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