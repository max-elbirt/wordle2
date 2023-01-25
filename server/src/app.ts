import express from 'express'
import cors from 'cors'
import sessionRouter from './sessions'
import evaluateRouter from './evaluate'
import bodyParser from 'body-parser'

const app = express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/session', sessionRouter)
app.use('/evaluate', evaluateRouter)
//ssss
export default app