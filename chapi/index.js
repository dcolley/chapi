const Company = require("./company")
const Officer = require("./officer")

class CHAPI {

    constructor(apiKey) {
        this.apiKey = apiKey
    }

    async getCompany(companyNumber) {
        let c = new Company(this.apiKey)
        return await c.get(companyNumber)
    }

    async getCompanyOfficers(companyNumber) {
        let c = new Company(this.apiKey)
        return await c.getOfficers(companyNumber)
    }

    async getCompanyRegisters(companyNumber) {
        let c = new Company(this.apiKey)
        return await c.getRegisters(companyNumber)
    }

    async officerSearch(q) {
        let o = new Officer(this.apiKey)
        return await o.search(q)
    }

    async getOfficer(officerNumber) {
        let o = new Officer(this.apiKey)
        return await o.get(officerNumber)
    }

    async getOfficerAppointments(officerNumber) {
        let o = new Officer(this.apiKey)
        return await o.getAppointments(officerNumber)
    }

}

module.exports = CHAPI
