// @ts-ignore
import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";
import {evaluateWord} from "./evaluateWord";


const port = 5555;

const word: string = 'MELON';

export const app = express();

app.use(bodyParser.json());

app.get('/', (req:Request, res:Response) => {
    res.send('hello');
})

app.post('/send', (req: Request, res: Response) => {
    const result = req.body;
    const answer = evaluateWord(word, req.body);
    res.send(answer);
});
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});