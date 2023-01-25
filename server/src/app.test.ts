import app from './app'
import request from 'supertest'

describe('/session', () => {
    it('should create a session', async () => {
        const response = await request(app)
            .post('/session')
            .set('Authorization', '123')
        expect(response.status).toBe(200)
        expect(response.body).toHaveProperty('sessionId')
    })
    it('should give any seesion unique id', async () => {
        const response = await request(app)
            .post('/session')
            .set('Authorization', '123')
        const firstSession = response.body
        const secondResponse = await request(app)
            .post('/session')
            .set('Authorization', '123')
        const secondSession = secondResponse.body
        expect(firstSession.sessionId).not.toBe(secondSession.sessionId)
    })
})

describe('guessing the word HUMAN', () => {
    it('should return the correct evaluation for given guesses', async () => {
        const response = await request(app)
            .post('/evaluate')
            .set('sessionid', '0')
            .send({
                guesses: [
                    { letter: 'H', index: 0 }, { letter: 'U', index: 1 }, {
                        letter: 'M', index: 2,
                    }, { letter: 'A', index: 3 }, { letter: 'N', index: 4 },
                ],
            })
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
            { letter: 'H', index: 0, correctness: 'correctPlace' }, {
                letter: 'U', index: 1, correctness: 'correctPlace',
            }, { letter: 'M', index: 2, correctness: 'correctPlace' }, {
                letter: 'A', index: 3, correctness: 'correctPlace',
            }, { letter: 'N', index: 4, correctness: 'correctPlace' },
        ])
    })
    it('should return the correct evaluation for given guesses', async () => {
        const response = await request(app)
            .post('/evaluate')
            .set('sessionid', '0')
            .send({
                guesses: [
                    { letter: 'U', index: 0 }, { letter: 'H', index: 1 }, {
                        letter: 'A', index: 2,
                    }, { letter: 'G', index: 3 }, { letter: 'N', index: 4 },
                ],
            })
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
            { letter: 'U', index: 0, correctness: 'incorrectPlace' },
            { letter: 'H', index: 1, correctness: 'incorrectPlace' },
            { letter: 'A', index: 2, correctness: 'incorrectPlace' },
            { letter: 'G', index: 3, correctness: 'notInTargetWord' },
            { letter: 'N', index: 4, correctness: 'correctPlace' },
        ])
    })
    it('should return the correct evaluation for given guesses', async () => {
        //target word is HUMAN
        //attempted word is )(YKJ
        const response = await request(app)
            .post('/evaluate')
            .set('sessionid', '0')
            .send({
                guesses: [
                    { letter: ')', index: 0 },
                    { letter: '(', index: 1 },
                    { letter: 'Y', index: 2 },
                    { letter: 'K', index: 3 },
                    { letter: 'J', index: 4 },
                ],
            })
        expect(response.status).toBe(200)
        expect(response.body).toEqual([
            { letter: ')', index: 0, correctness: 'notInTargetWord' },
            { letter: '(', index: 1, correctness: 'notInTargetWord' },
            { letter: 'Y', index: 2, correctness: 'notInTargetWord' },
            { letter: 'K', index: 3, correctness: 'notInTargetWord' },
            { letter: 'J', index: 4, correctness: 'notInTargetWord' },
        ])
    })
})