const functions = require('./gallery.js');


describe('calculateMovement test', () => {
    test('should return a negative value calculation when the counter passed ', () => {
        expect(functions.calculateMovement(780, 2)).toBe(-1560);
    })
    test('should return 0 if counter is 0', () => {
        expect(functions.calculateMovement(1200, 0)).toBe(0);
    })
    test('should return a negative value calculation when the counter passed', () => {
        expect(functions.calculateMovement(782.35, 3)).toBe(-2347.05);
    })
    test('Should not return a positive number', () => {
        expect(functions.calculateMovement(780, 2)).not.toBe(1560);
    })
    test('Should return NaN if the size is not numeric ', () => {
        expect(functions.calculateMovement(undefined, 3)).toBeNaN();
    })
    test('Should return NaN if the counter is not numeric ', () => {
        expect(functions.calculateMovement(159, "test")).toBeNaN();
    })
})