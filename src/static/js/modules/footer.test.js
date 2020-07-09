/* eslint-disable no-undef */
/* https://jestjs.io/docs/en/expect */

const functions = require('./footer.js');

describe('checkClass test', () => {
    test('string contains .active string', () => {
        expect(functions.checkClass('.footer-wrapper-ulist .active')).toBe(true);
    });

    test('string contains .active string with truthy', () => {
        expect(functions.checkClass('.footer-wrapper-ulist .active')).toBeTruthy();
    });

    test('string contains .active string with truthy', () => {
        expect(functions.checkClass('.footer-wrapper-ulist active')).toBeFalsy();
    });

    test('string does not contains .active string', () => {
        expect(functions.checkClass('.footer-wrapper-ulist')).toBe(false);
    });
});