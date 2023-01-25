import { keyboardClicked } from './Features/keyboard/keyboardActions';
import { store } from './store';
import { evaluateRow } from './Features/guesses/guessesActions'

describe('keybkoardClicked',()=>{
    const storeMemo = store;
    let testedStore = store;
    beforeEach(()=>{
        testedStore = storeMemo;
    })
    it ('one guess test',()=>{
        testedStore.dispatch(keyboardClicked('B'));
        expect(testedStore.getState().guesses.nonEvaluatedGuesses).toEqual([{letter:'B',index:0}]);
    })
    it ('should dispatch evaluateRow on the fifth letter',()=>{
        testedStore.dispatch(keyboardClicked('A'))
        testedStore.dispatch(keyboardClicked('B'))
        testedStore.dispatch(keyboardClicked('C'))
        testedStore.dispatch(keyboardClicked('D'))
        testedStore.dispatch(keyboardClicked('E'))
        expect(testedStore.getState().guesses.nonEvaluatedGuesses).toEqual([]);
    })
})