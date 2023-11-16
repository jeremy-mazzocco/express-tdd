const {test, expect} = require("@jest/globals");
const createSlug = require("./create_slug.js");

test("return should be a string", () => {
    const text = "test";
    const result = createSlug(text);

    expect(typeof result).toBe("string");

});