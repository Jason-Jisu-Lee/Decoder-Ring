const {substitution} = require("../src/substitution")
const {expect} = require("chai");

describe("substitution", () => {
    describe("encode", () => {
        it("transposes standard alphabet to substitution alphabet", () => {
            const input = "thinkful"
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            const expected = 'jrufscpw'
            const actual = substitution(input, alphabet)
            expect(actual).to.equal(expected)
        });
           it("maintain space", () => {
            const input = "think ful"
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            const expected = 'jrufs cpw'
            const actual = substitution(input, alphabet)
            expect(actual).to.equal(expected)
        });
        it("ignores capital letters", () => {
            const input = "THinkful"
            const alphabet = "xoyqmcgrukswaflnthdjpzibev"
            const expected = 'jrufscpw'
            const actual = substitution(input, alphabet)
            expect(actual).to.equal(expected)
        });
        it("returns false if given alphabet isn't exactly 26 characters long", () => {
            const input = "thinkful"
            const alphabet = "xoyrukswaflnthdjpzibev"
            const expected = false
            const actual = substitution(input, alphabet)
            expect(actual).to.equal(expected)
        });
        it("returns false if there are any duplicate characters", () => {
            const input = "thinkful"
            const alphabet = "xoyqmcgrukswaflnthdjpzibevv"
            const expected = false
            const actual = substitution(input, alphabet)
            expect(actual).to.equal(expected)
        });
    });
    describe("decode", () => {
        it("transposes substitution alphabet to standard alphabet", () => {
            const input = "y&ii$r&"
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
            const expected = "message"
            const actual = substitution(input, alphabet, encode = false)
            expect(actual).to.equal(expected)
        });
        it("maintain space", () => {
            const input = "y&ii$r &"
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
            const expected = "messag e"
            const actual = substitution(input, alphabet, encode = false)
            expect(actual).to.equal(expected)
        });
        it("ignores capital letters", () => {
            const input = "y&ii$R&"
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpl"
            const expected = "message"
            const actual = substitution(input, alphabet, encode = false)
            expect(actual).to.equal(expected)
        });
        it("returns false if given alphabet isn't exactly 26 characters long", () => {
            const input = "y&ii$r&"
            const alphabet = "$wae&zrdxtfcygvuhbijnol"
            const expected = false
            const actual = substitution(input, alphabet, false)
            expect(actual).to.equal(expected)
        });
        it("returns false if there are duplicate characters", () => {
            const input = "y&ii$r&"
            const alphabet = "$wae&zrdxtfcygvuhbijnokmpp"
            const expected = false
            const actual = substitution(input, alphabet, encode = false)
            expect(actual).to.equal(expected)
        });
    })
})