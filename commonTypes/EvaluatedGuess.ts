export enum Correctness {
    correctPlace = 'correctPlace',
    notInTargetWord = 'notInTargetWord',
    incorrectPlace = 'incorrectPlace',
}
export interface EvaluatedGuess {
    letter: string,
    index: number,
    correctness: | 'correctPlace' | 'notInTargetWord' | 'incorrectPlace',
}