export class Nidajs {
    api: import("axios").AxiosInstance;
    loadDetails(id: any, retries?: number, backoff?: number): Promise<any>;
    filterData(data: any): any;
}
