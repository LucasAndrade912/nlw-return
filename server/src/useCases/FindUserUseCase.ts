import { UsersRepository } from '../repositories/UsersRepository'

export class FindUserUseCase {
  constructor(
    private usersRepository: UsersRepository
  ) {}

  async execute(id: string) {
    if (!id) {
      throw new Error('Id is required')
    }

    const user = await this.usersRepository.findById(id)

    return user
  }
}