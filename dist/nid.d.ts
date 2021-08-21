export declare class Nid {
    api: any;
    constructor();
    loadDetails(id: string, retries?: number, backoff?: number): Promise<any>;
    filterData(data: any): any;
}
export declare const Nidjs: typeof Nid;
export default Nid;
