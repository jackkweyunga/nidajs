// imports
import { default as axios } from "axios";
import { config, api } from "./config";

export class Nid {
    api: any;

    constructor() {
        this.api = axios.create({
            headers: {
                "Content-Type": "application/json",
                "Content-Length": "0",
            },
        })
    }

    async loadDetails(id: string, retries: number = 5, backoff: number = 300) {
        const retryCodes = [408, 500, 502, 503, 504, 522, 524]
        return await this.api.post(config.url(id, api)).then((response: { status: number; data: any; }) => {

            if ( (response.status === 200) && (response.data["results"]["obj"]["result"] !== undefined) ) {
                return this.filterData(response.data["results"]);
            }

            if (retries > 0 && retryCodes.includes(response.status)) {
                setTimeout(() => {
                    return this.loadDetails(id, retries - 1, backoff*2);
                }, backoff);
            }
        })
    }

    filterData(data: any) {
        return data["obj"]["result"];
    }

}


export const Nidjs = Nid;

export default Nid;

