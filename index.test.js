

const { greetMe } = require("./index");

test('should return void', () => {
    expect(greetMe("jek")).toBeUndefined();
});