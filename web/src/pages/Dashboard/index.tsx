import React, { useEffect, useState } from 'react'
import { FeedbackProps } from '../../components/Feedback'
import { auth } from '../../firebase'
import { api } from '../../lib/api'
import { verifyMostSentFeedbackType } from '../../utils'
import { Sections } from './Sections'
import './style.css'

interface AxiosResponseData {
  feedbacks: FeedbackProps[]
}

export function Dashboard() {
  const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>([])

  const totalImages = feedbacks.filter(feedback => {
    if (feedback.screenshot) return feedback
  }).length

  const totalFeedbacksTypeBug = feedbacks.filter(feedback => {
    if (feedback.type === 'BUG') return feedback
  }).length

  const totalFeedbacksTypeIdea = feedbacks.filter(feedback => {
    if (feedback.type === 'IDEA') return feedback
  }).length

  const totalFeedbacksTypeOther = feedbacks.filter(feedback => {
    if (feedback.type === 'OTHER') return feedback
  }).length

  const mostSentFeedbackType = verifyMostSentFeedbackType({
    totalFeedbacksTypeBug,
    totalFeedbacksTypeIdea,
    totalFeedbacksTypeOther
  })

  useEffect(() => {
    (async () => {
      const tokenId = await auth.currentUser?.getIdToken()
      
      const { data } = await api.get<AxiosResponseData>('/feedbacks', {
        headers: {
          'Authorization': `Bearer ${tokenId}`
        }
      })

      setFeedbacks(data.feedbacks)
    })()
  }, [])

  return (
    <>
      <h1 className="text-center text-3xl my-16">
        Meus Feedbacks
      </h1>

      <Sections
        feedbacks={feedbacks}
        totalImages={totalImages}
        totalFeedbacksTypeBug={totalFeedbacksTypeBug}
        totalFeedbacksTypeIdea={totalFeedbacksTypeIdea}
        mostSentFeedbackType={mostSentFeedbackType}
      />
    </>
  )
}