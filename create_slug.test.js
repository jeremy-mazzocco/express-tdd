const { test, expect } = require("@jest/globals");
const createSlug = require("./create_slug.js");

test("return text should be a string, id a number", () => {
    const id = 1;
    const text = "test";
    const result = createSlug(text, id);

    expect(typeof result.slug).toBe("string");
    expect(typeof result.id).toBe("number");
});

test("return should be a string with lower case", () => {
    const id = 1;
    const text = "TEST";
    const result = createSlug(text, id);

    // expect(result.slug).toBe("test");
    // expect(result.id).toBe(1);

    expect([result.slug, result.id]).toEqual(["test", id + 1]);
});

test("return should be a string without space", () => {
    const id = 1;
    const text = "     tesT TEst TEST";
    const result = createSlug(text, id);

    expect([result.slug, result.id]).toEqual(["test-test-test", id + 1]);
})

test("id should icrease of 1", () => {
    const id = 1;
    const text = "test";
    const result = createSlug(text, id);

    expect([result.slug, result.id]).toEqual(["test", 2]);
})


test("dovrebbe lanciare un errore in caso di input non valido", () => {
    const id = 1;
    const text = "test";
    const result = createSlug(text, id);

    expect(() => createSlug(1, id)).toThrow("input must be a string");
  })