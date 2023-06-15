//Check if there is Switch Button
describe('Button', () => {
    test('Lightswitch Button exists', () =>{
        document.body.innerHTML = '<div id="root"></div>';
        require('../../src/index.js')
        expect(document.body.querySelector("button")).toBeTruthy();
        expect(document.body.textContent.toLowerCase()).toContain('the room is');
    });
    
})
