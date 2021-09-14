const axios = require('axios')

class Officer {

    constructor(apiKey) {
        this.apiKey = apiKey
    }

    async search(q) {
        let result = await axios({
            method: 'GET',
            // baseURL: 'https://api.companieshouse.gov.uk',
            // url: `/officer/${officerNumber}`,
            url: "https://api.company-information.service.gov.uk/search/officers",
            params: {
                q: q,
                // items_per_page: 1
            },
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

    async get(officerNumber) {
        let result = await axios({
            method: 'GET',
            baseURL: 'https://api.companieshouse.gov.uk',
            url: `/officer/${officerNumber}`,
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

    async getAppointments(officerNumber) {
        let result = await axios({
            method: 'GET',
            // baseURL: 'https://api.companieshouse.gov.uk',
            baseURL: "https://api.company-information.service.gov.uk",
            url: `/officers/${officerNumber}/appointments`,
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

}

module.exports = Officer
