import { SubmitFeedbackUseCase } from "./SubmitFeedbackUseCase"

const createFeedbackSpy = jest.fn()
const findAllFeedbacksSpy = jest.fn()
const sendMailSpy = jest.fn()

const userIdForTest = '7f92ed6f-890a-47be-87d6-ac22d769e2be'

const submitFeedbackUseCase = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy, findAll: findAllFeedbacksSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    await expect(submitFeedbackUseCase.execute({
      userId: userIdForTest,
      type: 'BUG',
      comment: 'Comment example',
      screenshot: 'data:image/png;base64,2932932392j92je'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()
  })

  it('should not be able to submit a feedback without type', async () => {
    await expect(submitFeedbackUseCase.execute({
      userId: userIdForTest,
      type: '',
      comment: 'Comment example',
      screenshot: 'data:image/png;base64,2932932392j92je'
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback without comment', async () => {
    await expect(submitFeedbackUseCase.execute({
      userId: userIdForTest,
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png;base64,2932932392j92je'
    })).rejects.toThrow()
  })

  it('should not be able to submit a feedback with an invalid screenshot', async () => {
    await expect(submitFeedbackUseCase.execute({
      userId: userIdForTest,
      type: 'BUG',
      comment: 'Comment example',
      screenshot: 'test.png'
    })).rejects.toThrow()
  })
})