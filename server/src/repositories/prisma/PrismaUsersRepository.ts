import { prisma } from '../../prisma'
import { UserCreateData, UsersRepository } from '../UsersRepository'

export class PrismaUsersRepository implements UsersRepository {
  async findById(userId: string) {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })

    if (!user) {
      return null
    }

    return user.id
  }

  async create(data: UserCreateData) {
    const { id, name, email } = data
    
    const user = await prisma.user.create({
      data: {
        id,
        name,
        email
      }
    })

    return user.id
  }
}