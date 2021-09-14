const CHA = require('companies-house-api-es6');

let apiKey = "f62f9cc3-1748-4c8b-85e0-15f396a81fac"
let companyID = "11310159"

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