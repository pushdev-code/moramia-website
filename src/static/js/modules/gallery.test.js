const functions = require('./gallery.js');


describe('calculateMovement test', () => {
    test('Sees if calculations are done properly', () => {
        expect(functions.calculateMovement(780, 2)).toBe(-1560);
    })
    test('Sees if calculations are done properly', () => {
        expect(functions.calculateMovement(1200, 0)).toBe(0);
    })
    test('Sees if calculations are done properly', () => {
        expect(functions.calculateMovement(782.35, 3)).toBe(-2347.05);
    })
    test('Sees that the calculation is taking into account the negative', () => {
        expect(functions.calculateMovement(780, 2)).not.toBe(1560);
    })
    test('Sees what happens if undefined values ​​arrive  ', () => {
        expect(functions.calculateMovement(undefined, 3)).toBeNaN();
    })
    test('Sees what happens if string values ​​arrive  ', () => {
        expect(functions.calculateMovement(159, "test")).toBeNaN();
    })
})