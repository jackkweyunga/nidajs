

const Nidajs = require("./index");

const sample_id = "20000207331010000126";

const nidajs = new Nidajs()

test('should return a response 200 and data ', async () => {

    let status;
    let data;

    let a_call = await nidajs.apiCall(sample_id).then(response => {
        status = response.status
        data = response.data["obj"]["result"]
        return response;
    })

    expect(a_call).toBeDefined();
    expect(status).toEqual(200);
    expect(data).toBeDefined();
}, 30000);

test('should return a dictionary with user details', async () => {

    let data;
    
    await nidajs.loadDetails(sample_id).then( resp => {
        data = resp;
    })

    expect(data).toBeDefined();
}, 30000)

