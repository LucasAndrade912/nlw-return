import { prisma } from '../../prisma'
import {
  FeedbacksRepository,
  FeedbackCreateData,
  FeedbackFindData
} from '../FeedbacksRepository'

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async findAll(userId: string) {
    const feedbacks = await prisma.feedback.findMany({
      where: {
        user_id: userId
      },
      select: {
        type: true,
        comment: true,
        screenshot: true,
        created_at: true
      }
    })

    return feedbacks as FeedbackFindData[]
  }

  async create(userId: string, { type, comment, screenshot }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: {
        type,
        comment,
        screenshot,
        user: {
          connect: {
            id: userId
          }
        }
      }
    })
  }
}