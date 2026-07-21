import {Constants} from '../utils/Constants';

export const invalidLoginScenarios = [
    {
        testName : 'Invalid Username @regression',
        username : 'invalid_user',
        password : 'secret_sauce',
        expectedError : Constants.INVALID_CREDENTAILS
    },
    {
        testName : 'Invalid Password @regression',
        username : 'standard_user',
        password : 'wrong_password',
        expectedError : Constants.INVALID_CREDENTAILS
    },
    {
        testName : 'Locked User @regression',
        username : 'locked_out_user',
        password : 'secret_sauce',
        expectedError : Constants.LOCKED_USER
    }
]