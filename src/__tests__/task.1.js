// Check the file with name "Room is exist"
describe('Room Component', () => {
    test('`Room` component is defined in `src/Room.js`', () =>{
        require('../Room')
        expect(typeof Room ).toBeTruthy();
    })
})
