import { CreateUserUseCase } from './CreateUserUseCase'

const createUserSpy = jest.fn().mockResolvedValue('123')
const findUserByIdSpy = jest.fn()

const createUserUseCase = new CreateUserUseCase({
  create: createUserSpy,
  findById: findUserByIdSpy
})

describe('Create user', () => {
  it('should be able create new user', async () => {
    await expect(
      createUserUseCase.execute({
        id: '123',
        name: 'Lucas',
        email: 'lucas@test.com'
      }).then(userId => {
        expect(userId).toBe('123')
      })
    ).resolves.not.toThrow()

    expect(createUserSpy).toHaveBeenCalled()
  })

  it('should not be able create new user without id', async () => {
    await expect(
      createUserUseCase.execute({
        id: '',
        name: 'Lucas',
        email: 'lucas@test.com'
      }).then(userId => {
        expect(userId).toBe('123')
      })
    ).rejects.toThrow()
  })

  it('should not be able create new user without name', async () => {
    await expect(
      createUserUseCase.execute({
        id: '123',
        name: '',
        email: 'lucas@test.com'
      }).then(userId => {
        expect(userId).toBe('123')
      })
    ).rejects.toThrow()
  })

  it('should not be able create new user without email', async () => {
    await expect(
      createUserUseCase.execute({
        id: '123',
        name: 'Lucas',
        email: ''
      }).then(userId => {
        expect(userId).toBe('123')
      })
    ).rejects.toThrow()
  })
})