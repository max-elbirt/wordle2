import {app} from '../index'
import request from 'supertest';

describe('should return eval checked', ()=> {
    it("should return eval checked", ()=> {
        return request(app)
            .post('/send')
            .expect(200);
    })
    it("should return hello ", () => {
        return request(app)
            .get('/')
            .expect(200);
    })
})
