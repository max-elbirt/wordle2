import { isLetter } from './keyboardMiddleware';

describe('isLetter',()=>{
    it('should return true if input is a letter',()=>{
        expect(isLetter('A')).toBe(true);
    })
    it('should return false if input is not a letter',()=>{
        expect(isLetter('1')).toBe(false);
    })
    it('should return false if input is backspace',()=>{
        expect(isLetter('Backspace')).toBe(false);
    })
    it('should return false if input is empty',()=>{
        expect(isLetter('')).toBe(false);
    })
    it('should return false for undefined',()=>{
        expect(isLetter(undefined as unknown as string)).toBe(false);
    })
})