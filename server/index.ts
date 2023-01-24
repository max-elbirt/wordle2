// @ts-ignore
import express, {Request, Response} from "express";
import * as bodyParser from "body-parser";
import {evaluateWord} from "./evaluateWord";


const port = 5000;

const word = 'MELON';

export const app = express();

app.use(bodyParser)


app.get((req: Request, res: Response) => {
});

app.post('/send', (req: Request, res: Response) => {
    const result = bodyParser.json(req.body);
    const answer = evaluateWord(word, req.body);
    res.send(answer);
});
app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});