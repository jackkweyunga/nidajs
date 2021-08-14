// imports
const { default: axios } = require("axios");
const { config } = require("./config")

class Nidajs {

    constructor() {
        this.api = axios.create({
            headers: {
                "Content-Type": "application/json",
                "Content-Length": "0",
            },
        })
    }

    async apiCall(id) {
        return await this.api.post(config.url(id));
    }

    filterData(data) {
        return data["obj"]["result"];
    }


    //load the citizens data
    async loadDetails(id) {

        let status;
        let data;

        let a_call = await this.apiCall(id).then(response => {
            status = response.status
            data = this.filterData(response.data)
        })

        // console.log(data);
        return data;
    }
}

module.exports = Nidajs

