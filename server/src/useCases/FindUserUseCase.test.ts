import { FindUserUseCase } from './FindUserUseCase'

const createUserSpy = jest.fn()
const findUserByIdSpy = jest.fn().mockResolvedValue('123')

const findUserUseCase = new FindUserUseCase({
  create: createUserSpy,
  findById: findUserByIdSpy
})

describe('Find User', () => {
  it('should be able find user by Id', async () => {
    await expect(
      findUserUseCase.execute('123').then(userId => {
        expect(userId).toBe('123')
      })
    ).resolves.not.toThrow()

    expect(findUserByIdSpy).toHaveBeenCalled()
  })

  it('should not be able find user without Id', async () => {
    await expect(findUserUseCase.execute('')).rejects.toThrow()
  })
})