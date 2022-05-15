import { feedbackTypes } from '../components/WidgetForm'

interface Props {
  totalFeedbacksTypeBug: number
  totalFeedbacksTypeIdea: number
  totalFeedbacksTypeOther: number
}

export function verifyMostSentFeedbackType({
  totalFeedbacksTypeBug,
  totalFeedbacksTypeIdea,
  totalFeedbacksTypeOther
}: Props) {
  const mostSubmittedTypeIsBUG = totalFeedbacksTypeBug > totalFeedbacksTypeIdea && totalFeedbacksTypeBug > totalFeedbacksTypeOther

  const mostSubmittedTypeIsIDEA = totalFeedbacksTypeIdea > totalFeedbacksTypeBug && totalFeedbacksTypeIdea > totalFeedbacksTypeOther

  const mostSubmittedTypeIsOTHER = totalFeedbacksTypeOther > totalFeedbacksTypeBug && totalFeedbacksTypeOther > totalFeedbacksTypeIdea

  let type
  let image = { source: '', alt: '' }

  if (mostSubmittedTypeIsBUG) {
    type = "Problema"
    image.source = feedbackTypes["BUG"].image.source
    image.alt = feedbackTypes["BUG"].image.alt
  } else if (mostSubmittedTypeIsIDEA) {
    type = "Ideia"
    image.source = feedbackTypes["IDEA"].image.source
    image.alt = feedbackTypes["IDEA"].image.alt
  } else if (mostSubmittedTypeIsOTHER) {
    type = "Outro"
    image.source = feedbackTypes["OTHER"].image.source
    image.alt = feedbackTypes["OTHER"].image.alt
  }

  return (
    <p className="flex items-center text-brand">
      <img
        className="w-8 mr-2"
        src={image.source}
        alt={image.alt}
      />
      { type }
    </p>
  )
}