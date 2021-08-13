// Write your tests here!
const {caesar} = require("../src/caesar");
const {expect} = require("chai");

describe("caesar", () => {
    describe("encode", () => {
        it("shifts alphabet letters to the right by the given positive number, left by the negative number", () => {
            const input = "thinkful"
            const shift = 3
            const actual = caesar(input, shift)
            const expected = "wklqnixo"
            expect(actual).to.equal(expected);
        });
        it("returns false if the shift number is 0, undefined, greater than 25, or less than -25", () => {
            const input = "Secret Message"
            const shift = -28
            const actual = caesar(input, shift)
            const expected = false
            expect(actual).to.equal(expected);
        });
        it("ignores capital letters", () => {
            const input = "THINKFUL"
            const shift = 3
            const actual = caesar(input, shift)
            const expected = "wklqnixo"
            expect(actual).to.equal(expected);
        });
        it("shifts that go past both ends of the alphabet wraps around to the other end", () => {
            const input = "This is a secret message!"
            const shift = 8
            const actual = caesar(input, shift)
            const expected = 'bpqa qa i amkzmb umaaiom!'
            expect(actual).to.equal(expected);
        });
        it("maintains spaces and non-alphabetic symbols before and after encoding", () => {
            const input = "This is a secret message!"
            const shift = 8
            const actual = caesar(input, shift)
            const expected = 'bpqa qa i amkzmb umaaiom!'
            expect(actual).to.equal(expected);
        });
    });
    describe("decode", () => {
        it("shifts alphabet letters to the right by the given negative number, left by the positive number", () => {
            const input = "wklqnixo"
            const shift = 3
            const actual = caesar(input, shift, false)
            const expected = 'thinkful'
            expect(actual).to.equal(expected);
        });
        it("returns false if the shift number is 0, undefined, greater than 25, or less than -25", () => {
            const input = "Secret Message"
            const shift = 66
            const actual = caesar(input, shift, false)
            const expected = false
            expect(actual).to.equal(expected);
        });
        it("ignores capital letters", () => {
            const input = "WKlqnixo"
            const shift = 3
            const actual = caesar(input, shift, false)
            const expected = 'thinkful'
            expect(actual).to.equal(expected);
        });
        it("shifts that go past both ends of the alphabet wraps around to the other end", () => {
            const input = "z"
            const shift = -1
            const actual = caesar(input, shift, false)
            const expected = "a"
            expect(actual).to.equal(expected);
        });
        it("maintains spaces and non-alphabetic symbols before and after decoding", () => {
            const input = "WK lqnixo"
            const shift = 3
            const actual = caesar(input, shift, encode = false)
            const expected = 'th inkful'
            expect(actual).to.equal(expected);
        });
    })
})