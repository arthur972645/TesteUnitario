import request from 'supertest'
import app from '../app'
import { User } from '../models/User'

describe('Testando rotas da API', () => {

    let email = 'test@jest.com'
    let password = '1234'

    beforeAll(async () => {
        await User.sync({ force: true })
    })

    it('Deve ping pong', async () => {
        const response = await request(app)
            .get('/ping')
            .then(response => {
                expect(response.body.error).toBeUndefined()

            })
    })

    it('Deve registar um novo usuario',(done) => {
        request(app)
            .post('/register')
            .send(`email=${email}&password=${password}`)
            .then(response => {
                expect(response.body.error).toBeUndefined()
                expect(response.body).toHaveProperty('id')
                return done()
            })
    })

    it('nao deve registrar um usuario com email existente', (done) => {
        request(app)
            .post('/register')
            .send(`email=${email}&password=${password}`)
            .then(response => {
                expect(response.body.error).not.toBeUndefined()
                return done()
            })
    })
})