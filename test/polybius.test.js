const {polybius} = require("../src/polybius");
const expect = require("chai").expect

describe("polybius", () => {
    describe("encode", () => {
        it("encodes each letter into a number pair", () => {
            const input = "Hello world"
            const expected = "3251131343 2543241341"
            const actual = polybius(input)
            expect(actual).to.equal(expected);
        });
        it("translates i or j to 42", () => {
            const input = "ij"
            const expected = "4242"
            const actual = polybius(input)
            expect(actual).to.equal(expected);
        });
        it("ignores capital letters", () => {
            const input = "THINKFUL"
            const expected = "4432423352125413";
            const actual = polybius(input)
            expect(actual).to.equal(expected);
        });
        it("maintains spaces in the input", () => {
            const input = "Hello THINKFUL"
            const expected = "3251131343 4432423352125413"
            const actual = polybius(input)
            expect(actual).to.equal(expected);
        });
        it("output is still a string", () => {
            const input = "Hello THINKFUL"
            const expected = "3251131343 4432423352125413"
            const actual = polybius(input)
            expect(actual).to.equal(expected);
        });
    });
    describe("decode", () => {
        it("returns false if the input length excluding spaces is odd", () => {
            const input = "1121313";
            const expected = false;
            const actual = polybius(input, encode = false)
            expect(actual).to.equal(expected);
        });
        it("decodes each number pair into a letter", () => {
            const input = "3251131343"
            const expected = "hello"
            const actual = polybius(input, encode = false)
            expect(actual).to.equal(expected);
        });
        it("translates 42 as (i/j)", () => {
            const input = "4432423352125413";
            const expected = "th(i/j)nkful";
            const actual = polybius(input, encode = false)
            expect(actual).to.equal(expected);
        });
        it("maintains spaces in the input", () => {
            const input = "3251131343 2543241341"
            const expected = "hello world"
            const actual = polybius(input, encode = false)
            expect(actual).to.equal(expected);
        });;
    });
})