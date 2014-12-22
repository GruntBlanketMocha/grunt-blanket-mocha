/*global Vowels, it, describe, expect */
/*jshint -W030 */
describe("Vowels test", function() {

    it("should not consider F to be a vowel", function() {
        expect(Vowels.isVowel("F")).to.be.false;
    });

    it("should consider A, E, I, O, U to be a vowels", function() {
        expect(Vowels.isVowel("A")).to.be.true;
        expect(Vowels.isVowel("E")).to.be.true;
        expect(Vowels.isVowel("I")).to.be.true;
        expect(Vowels.isVowel("O")).to.be.true;
        expect(Vowels.isVowel("U")).to.be.true;
    });
});
