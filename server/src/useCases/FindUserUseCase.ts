import { UsersRepository } from '../repositories/UsersRepository'

export class FindUserUseCase {
  constructor(
    private usersRepository: UsersRepository
  ) {}

  async execute(id: string) {
    const user = await this.usersRepository.findById(id)

    return user
  }
}