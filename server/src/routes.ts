import { Router } from 'express'
import { NodemailerMailAdapter } from './adapters/nodemailer/NodemailerMailAdapter'
import { AuthMiddleware, CustomRequest } from './middlewares/AuthMiddleware'
import { HandleUserMiddleware } from './middlewares/HandleUserMiddleware'
import { PrismaFeedbacksRepository } from './repositories/prisma/PrismaFeedbacksRepository'
import { SubmitFeedbackUseCase } from './useCases/SubmitFeedbackUseCase'

export const routes = Router()

routes.get('/feedbacks',
  AuthMiddleware.authenticate,
  HandleUserMiddleware.handle,
  async (req: CustomRequest, res) => {
    const { uid } = req

    try {
      const prismaFeedbacksRepository = new PrismaFeedbacksRepository()

      const feedbacks = await prismaFeedbacksRepository.findAll(uid as string)
    
      return res.json({ feedbacks })
    } catch (error) {
      console.log(error)
      return res.status(400).send()
    }
  }
)

routes.post('/feedbacks',
  AuthMiddleware.authenticate,
  HandleUserMiddleware.handle,
  async (req: CustomRequest, res) => {
    const { uid } = req
    const { type, comment, screenshot } = req.body

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
    const nodemailerMailAdapter = new NodemailerMailAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
      prismaFeedbacksRepository,
      nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
      userId: String(uid),
      type,
      comment,
      screenshot
    })

    return res.status(201).send()
  }
)