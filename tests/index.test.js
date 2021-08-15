

const { Nidajs } = require("../src/index.js")

const sample_id = "20000207331010000126";

nidajs = new Nidajs()

const ntimes = Array.from(Array(5).keys())

test.each(ntimes)('should return a dictionary with user details', async (n) => {

    console.log(`Test number ${n}`);
    let data;
    
    await nidajs.loadDetails(sample_id).then( resp => {
        data = resp;
    })

    expect(data).toBeDefined();
}, 30000)
