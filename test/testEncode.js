let assert = require("assert")
let edb64 = require("../index")
var hash = require('object-hash');

describe('Array', () => {
    describe('#encode()decode()', () => {
        it("should encode 'abc' and after that and after that decode it to to the original value", () => {
            let result = "abc"
            console.log("input: " + result)
            result = edb64.encode(result)
            console.log("encoded: " + result)
            result = edb64.decode(result)
            console.log("decoded: " + result)
            assert.equal(result, "abc");
        });
        it("should encode json '{name: \"joris\", city: \"Amsterdam\"}'and after that decode it to to the original value", () => {
            let result = { name: "joris", city: "Amsterdam" }
            startHash = hash(result)
            console.log("input: " + result + " hash: " + startHash)
            result = edb64.encode(result)
            console.log("encoded: " + result)
            result = edb64.decode(result)
            resultHash = hash(result)
            console.log("decoded: " + result + " hash: " + resultHash)
            assert.equal(startHash, resultHash);
        });
        it("should encode json array '[{name: \"Joris\", city: \"Amsterdam\"}, {name: \"Freek\", city: \"Assendelft\"}]' and after that decode it to to the original value", () => {
            let result = [{ name: "joris", city: "Amsterdam" }, { name: "Freek", city: "Assendelft" }]
            startHash = hash(result)
            console.log("input: " + result + " hash: " + startHash)
            result = edb64.encode(result)
            console.log("encoded: " + result)
            result = edb64.decode(result)
            resultHash = hash(result)
            console.log("decoded: " + result + " hash: " + resultHash)

            assert.equal(startHash, resultHash);
        });
    });
});