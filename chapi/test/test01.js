const CHA = require('companies-house-api-es6');

const config = require("./config.json");
let apiKey = config.apiKey
let companyID = config.companyID

const cha = new CHA(apiKey);

cha.searchForCompanyById(companyID).then(result => {
	console.log(result);
}).catch(err => {
	console.log(err);
});

// let query = "Tungsten West Ltd"

// cha.searchForCompanyByGenericTerm(query).then( result => {
// 	console.log(result)
// }).catch(err => {
//     console.log(err)
// })

cha.returnProfileBy(companyID).then(result => {
	console.log(result);
}).catch(err => {
	console.log(err);
});