import { UsersRepository } from '../repositories/UsersRepository'

interface CreateUserUseCaseRequest {
  id: string
  name: string
  email: string
}

export class CreateUserUseCase {
  constructor(
    private usersRepository: UsersRepository
  ) {}

  async execute(request: CreateUserUseCaseRequest) {
    const { id, name, email } = request

    const userId = await this.usersRepository.create({
      id,
      name,
      email
    })

    return userId
  }
}