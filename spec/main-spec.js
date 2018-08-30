const main = require('../main/main');
const expectText = require('../main/expectText');

describe("A suite is just a function", function() {
    var result;
    var song;

    it("and so is a spec", function() {
        result = main();
        song = expectText();

        expect(result).toEqual(song);
    });
});