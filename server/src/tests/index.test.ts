import {app} from '../index'
import request from 'supertest';

describe('should return eval checked', ()=> {
    it("should return eval checked", ()=> {
        return request(app)
            .post('/send')
            .expect(200);
    })
})