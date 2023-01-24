import {evalI} from '../../ui/Wordle2/redux/Features/evalSlice'

export const evaluateWord = (word: string, element: evalI[]) => {
    element.map((element) => {
        if (element.letter === word[element.index]) {
            element.correctness = 'correctPlace';
            element.status = 'checked';
        } else if (word.includes(element.letter)) {
            element.correctness = 'incorrectPlace';
            element.status = 'checked';
        } else {
            element.correctness = 'notInTargetWord';
            element.status = 'checked';
        }
        return element;
    })}

