// This confirms we're using PhantomJS 2
describe("Function.prototype.bind test", function() {

    it("should be available natively", function() {
        expect(Function.prototype.bind).to.be.a('function');
    });

    it("should actually bind", function() {
        function addTwoToThis() {
            return this + 2;
        }
        expect(addTwoToThis.bind(7)()).to.equal(9);
    });

});
