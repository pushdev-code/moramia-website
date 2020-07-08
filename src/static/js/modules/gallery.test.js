const functions = require('./gallery.js');


describe('calculateMovement test', () => {
    it('should return a negative value calculation when the counter passed ', () => {
        expect(functions.calculateMovement(780, 2)).toBe(-1560);
    })
    it('should return 0 if counter is 0', () => {
        expect(functions.calculateMovement(1200, 0)).toBe(0);
    })
    it('should return a negative value calculation when the counter passed', () => {
        expect(functions.calculateMovement(782.35, 3)).toBe(-2347.05);
    })
    it('should not return a positive number', () => {
        expect(functions.calculateMovement(780, 2) < 0).toBeTruthy();
    })
    it('should return NaN if the size is not numeric ', () => {
        expect(functions.calculateMovement(undefined, 3)).toBeNaN();
    })
    it('should return NaN if the counter is not numeric ', () => {
        expect(functions.calculateMovement(159, "test")).toBeNaN();
    })
})