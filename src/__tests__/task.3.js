import userEvent from '@testing-library/user-event';

beforeAll(() => {
    document.body.innerHTML = '<div id="root"></div>';
    require('../../src/index.js')
})
// Click the button switch to dark mode  and check chaanging text
describe('Default', () => {
    test('Initially the root `div` has the class `lit` and doesn\'t have the class `dark`', ()=>{
        expect(document.body.textContent.toLowerCase()).toContain('lit');
        expect(document.body.getElementsByClassName('dark').length).toBe(0);
        expect(document.body.getElementsByClassName('lit').length).toBe(1);
    })
})
describe('Off', () => {
    test('After button is clicked the root `div` has the class `dark` and doesn\'t have the class `lit`', () =>{
        // click the button
        userEvent.click(document.body.querySelector("button"))
        // "lit" should be removed on dark mode
        expect(document.body.textContent.toLowerCase()).toEqual(expect.not.stringContaining('lit'))
        // "dark" should be displayed in dark mode
        expect(document.body.textContent.toLowerCase()).toContain('dark');
        expect(document.body.getElementsByClassName('dark').length).toBe(1);
        expect(document.body.getElementsByClassName('lit').length).toBe(0);
    })
})
describe('On', () => {
    test('After button is clicked a secind tiime the root `div` has the class `lit` and doesn\'t have the class `dark`',()=>{
        // reclick the button
        userEvent.click(document.body.querySelector("button"))
        // recheck changing text
        expect(document.body.textContent.toLowerCase()).toContain('lit');
        expect(document.body.getElementsByClassName('dark').length).toBe(0);
        expect(document.body.getElementsByClassName('lit').length).toBe(1);
    })
})