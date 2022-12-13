const expect = require('chai').expect;
const calculator = require('../calculator');

describe('calculator', () => {
    it('add should correctly add 2 + 2', () => {
        const result = calculator.add(2,2);
        expect(result).to.equal(4);
    });
    it('add should correctly add 2 + 3', () => {
        const result = calculator.add(2,3);
        expect(result).to.equal(5);
    });
});