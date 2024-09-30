import { User, UserInstance } from "../models/User";
import * as UserService from './Userservice'

describe('Testando User service', () => {

    let email = 'teste@jest.com'
    let password = '1234'

    //faz a sincronização entre a estrutura do model e o que está no banco de dados
    //se não existir, ele cria, se existir o "force", faz com que ele delete, e cria uma nova
    beforeAll(async () => {
        await User.sync({ force: true })
    })

})