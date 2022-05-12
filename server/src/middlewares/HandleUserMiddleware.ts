import { NextFunction, Response } from 'express'
import { PrismaUsersRepository } from '../repositories/prisma/PrismaUsersRepository'
import { CreateUserUseCase } from '../useCases/CreateUserUseCase'
import { FindUserUseCase } from '../useCases/FindUserUseCase'
import { CustomRequest } from './AuthMiddleware'

export class HandleUserMiddleware {
  static async handle(req: CustomRequest, res: Response, next: NextFunction) {
    const { uid } = req

    const prismaUsersRepository = new PrismaUsersRepository()
    const findUserUseCase = new FindUserUseCase(prismaUsersRepository)
    const createUserUseCase = new CreateUserUseCase(prismaUsersRepository)

    const user = await findUserUseCase.execute(uid as string)

    if (!user) {
      const userId = await createUserUseCase.execute({
        id: String(uid),
        name: String(req.user?.name),
        email: String(req.user?.email)
      })
  
      req.uid = userId
    } else {
      req.uid = user
    }

    next()
  }
}