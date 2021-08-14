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

    async loadDetails(id, retries = 3, backoff = 300) {
        const retryCodes = [408, 500, 502, 503, 504, 522, 524]
        return await this.api.post(config.url(id)).then(response => {

            if (response.status === 200) {
                return this.filterData(response.data);
            }

            if (retries > 0 && retryCodes.includes(esponse.status)) {
                setTimeout(() => {
                    return this.loadDetails(id, retries - 1, backoff*2);
                }, backoff);
            }
        })
    }

    filterData(data) {
        return data["obj"]["result"];
    }

}

module.exports = Nidajs



