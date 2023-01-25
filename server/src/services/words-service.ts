const wordsData : string[] = ['COULD','SHOULD','GIVEN','HUMAN','STAND','WRITE']
export class WordsService {
    constructor(private readonly words: string[] = wordsData) {
    }
    async randomWord(): Promise<string> {
        const word = wordsData[Math.floor(Math.random() * wordsData.length)]
        return word
    }
}

let wordsService: WordsService;
export function getWordsService(): WordsService {
    if (!wordsService) {
        wordsService = new WordsService()
    }
    return wordsService
}