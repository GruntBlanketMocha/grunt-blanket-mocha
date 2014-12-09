/*global Plurals, it, describe, expect */
describe("Plurals test", function() {

    it("should not pluralize 1 dog", function() {
        expect(Plurals.dog(1)).to.equal("1 dog");
    });

    it("should pluralize 2 dogs", function() {
        expect(Plurals.dog(2)).to.equal("2 dogs");
    });


    it("should not pluralize 1 cat", function() {
        expect(Plurals.cat(1)).to.equal("1 cat");
    });

    it("should pluralize 2 cats", function() {
        expect(Plurals.cat(2)).to.equal("2 cats");
    });

    it("should not pluralize fish", function() {
        expect(Plurals.fish(1)).to.equal("1 fish");
        expect(Plurals.fish(2)).to.equal("2 fish");
    });

});
