import {checkForName} from '../src/client/js/nameChecker'

describe("Testing if name is correct from nameChecker" , () => {
    test("Testing checkForName() function" , () => {
        expect(checkForName).toBeDefined();
    })
})