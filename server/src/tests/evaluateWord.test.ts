import {evaluateWord} from "../evaluateWord";
import {evalI} from '../../../ui/Wordle2/redux/Features/evalSlice'

const mockEvalArr: evalI[] = [{letter: 'J', index: 1, correctness: null, status: 'unchecked'}, {
    letter: 'M',
    index: 0,
    correctness: null,
    status: 'unchecked'
}, {letter: 'J', index: 2, correctness: null, status: 'unchecked'}, {
    letter: 'L',
    index: 1,
    correctness: null,
    status: 'unchecked'
}];

const mockAnswer: evalI[] = [{letter: 'J', index: 1, correctness: 'notInTargetWord', status: 'checked'}, {
    letter: 'M',
    index: 0,
    correctness: 'correctPlace',
    status: 'checked'
}, {letter: 'J', index: 2, correctness: 'notInTargetWord', status: 'checked'}, {
    letter: 'L',
    index: 1,
    correctness: 'incorrectPlace',
    status: 'checked'
}];

describe('should return eval array', () => {
    it('should return eval arr', () => {
        expect(evaluateWord('MELON', mockEvalArr))
            .toEqual(mockAnswer)
    })
})