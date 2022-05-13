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

    if (!id) {
      throw new Error('Id is required')
    }

    if (!name) {
      throw new Error('Name is required')
    }

    if (!email) {
      throw new Error('Email is required')
    }

    const userId = await this.usersRepository.create({
      id,
      name,
      email
    })

    return userId
  }
}