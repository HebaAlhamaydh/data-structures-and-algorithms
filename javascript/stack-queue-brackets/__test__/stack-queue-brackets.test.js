'use strict';

const validateBrackets = require('../lab/stack-queue-brackets');

describe("stack-queue-brackets", () => {
        test('Expression1',()=>{
            expect(validateBrackets("{}")).toEqual(true);
        })
    
        test('Expression2',()=>{
            expect(validateBrackets("{}(){}")).toEqual(true);
        })
    
        test('Expression3',()=>{
            expect(validateBrackets("()[[Extra Characters]]")).toEqual(true);
        })
    
        test('Expression4',()=>{
            expect(validateBrackets("(){}[[]]")).toEqual(true);
        })
    
        test('Expression5',()=>{
            expect(validateBrackets("{}{Code}[Fellows](())")).toEqual(true);
        })
    
        test('Expression6',()=>{
            expect(validateBrackets("[({}]")).toEqual(false);
        })
    
        test('Expression7',()=>{
            expect(validateBrackets("(](")).toEqual(false);
        })
    
        test('Expression8',()=>{
            expect(validateBrackets("{(})")).toEqual(false);
        })
    
        test('Expression9',()=>{
            expect(validateBrackets("{")).toEqual(false);
        })
        
        test('Expression10',()=>{
            expect(validateBrackets(")")).toEqual(false);
        })
    
        test('Expression11',()=>{
            expect(validateBrackets("[}")).toEqual(false);
        })
})