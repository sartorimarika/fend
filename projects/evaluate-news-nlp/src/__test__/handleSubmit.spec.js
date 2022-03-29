import {handleSubmit} from '../src/client/js/formHandler'

describe("Testing the submit functionality from formHandler" , () => {
    test("Testing the handleSubmit() function" , () => {
        expect(handleSubmit).toBeDefined();
    })
})