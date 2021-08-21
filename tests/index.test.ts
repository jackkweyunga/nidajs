

/**
 * @jest-environment jsdom
 */


const { Nid } = require("../dist/nid.js");

const sample_id = "20000207331010000126";

const nidajs = new Nid()

// console.log(Nidjs);

const ntimes = Array.from(Array(1).keys())

test.each(ntimes)('should return a dictionary with user details', async (n) => {

    console.log(`Test number ${n}`);
    let data;
    
    await nidajs.loadDetails(sample_id).then( (resp: any) => {
        data = resp;
    })

    expect(data).toBeDefined();
}, 60000)
