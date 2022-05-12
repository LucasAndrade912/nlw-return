export interface FeedbackCreateData {
  type: string
  comment: string
  screenshot?: string
}

export interface FeedbackFindData {
  type: string
  comment: string
  screenshot?: string
  createdAt?: string
}

export interface FeedbacksRepository {
  findAll: (userId: string) => Promise<FeedbackFindData[]>
  create: (userId: string, data: FeedbackCreateData) => Promise<void>
}