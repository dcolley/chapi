const axios = require('axios')

class Company {

    constructor(apiKey, companyNumber=null) {
        this.apiKey = apiKey
        if(companyNumber) this.companyNumber = companyNumber
        console.debug("company Number = " + this.companyNumber)
    }

    set companyNumber(v) { this._companyNumber = v; }
    get companyNumber() { return this._companyNumber; }

    /**
     * 
     * @param {*} companyNumber 
     * @returns 
     * 
     */
    async get(companyNumber=null) {
        if(companyNumber) {
            this.companyNumber = companyNumber
        }
        let result = await axios({
            method: 'GET',
            // baseURL: 'https://api.companieshouse.gov.uk',
            // url: `/company/${companyNumber}`,
            url: `https://api.company-information.service.gov.uk/company/${this.companyNumber}`,
            auth:{
                username: this.apiKey,
                password: ''
            }
        })
        if(result.status == 200) {
            return result.data
        } else {
            console.log(result)
            throw "Web Service Error"
            //return null
        }
    }

    /**
     * 
     * @param {*} companyNumber 
     * @returns 
     */
    async getOfficers(companyNumber=null) {
        if(companyNumber) {
            this.companyNumber = companyNumber
        }
        let result = await axios({
            method: 'GET',
            // baseURL: 'https://api.companieshouse.gov.uk',
            // url: `/company/${companyNumber}/officers`,
            url: `https://api.company-information.service.gov.uk/company/${this.companyNumber}/officers`,
            auth:{
                username: this.apiKey,
                password: ''
            }
        })
        if(result.status == 200) {
            return result.data
        } else {
            if(result.status == 401) {
                // console.log("Error: Not Found")
                throw "401 Unauthorised"
            }
            if(result.status == 404) {
                // console.log("Error: Not Found")
                // return null
                throw "404 Not found"
            }
            console.log(result.response)
            throw "Web Service Error"
        }
    }

    async getPersonsWithSignificantControl(companyNumber) {

    }

    // async getRegisters(companyNumber) {
    //     let result = await axios({
    //         method: 'GET',
    //         baseURL: 'https://api.companieshouse.gov.uk',
    //         url: `/company/${companyNumber}/registers`,
    //         auth:{
    //             username: this.apiKey,
    //             password: ''
    //         }
    //     })
    //     if(result.status == 200) {
    //         return result.data
    //     } else {
    //         console.log(result)
    //         throw "Web Service Error"
    //     }
    // }

}

module.exports = Company