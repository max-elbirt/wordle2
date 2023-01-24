// @ts-ignore
import express, {Request, Response} from "express";

const port = 5000;

const app = express();

app.get((req:Request, res:Response)=>{});

app.porst((req:Request, res:Response)=>{});
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
});