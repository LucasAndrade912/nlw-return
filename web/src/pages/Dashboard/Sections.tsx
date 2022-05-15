import React from 'react'
import { FeedbackProps } from '../../components/Feedback'
import { ShowFeedbacks } from './ShowFeedbacks'

interface SectionsProps {
  feedbacks: FeedbackProps[]
  totalImages: number
  totalFeedbacksTypeBug: number
  totalFeedbacksTypeIdea: number
  mostSentFeedbackType: JSX.Element
}

export function Sections({
  feedbacks,
  totalImages,
  totalFeedbacksTypeBug,
  totalFeedbacksTypeIdea,
  mostSentFeedbackType
}: SectionsProps) {
  return (
    <main
        className="
          w-[80%]
          grid
          grid-cols-4
          gap-x-6
          gap-y-8
          m-auto
          pb-8
        "
      >
        <section className="section">
          <p>Total de feedbacks:</p>
          <p className="text-brand-500">{feedbacks.length}</p>
        </section>

        <section className="section">
          <p>Total de imagens:</p>
          <p className="text-brand-500">{totalImages}</p>
        </section>
        
        <section className="section col-span-2">
          <p>Tipo de feedback mais enviado:</p>
          <p>{mostSentFeedbackType}</p>
        </section>

        <section className="section col-span-2">
          <p>Total de feedbacks do tipo "Problema":</p>
          <p className="text-brand-500">{totalFeedbacksTypeBug}</p>
        </section>

        <section className="section col-span-2">
          <p>Total de feedbacks do tipo "Ideia":</p>
          <p className="text-brand-500">{totalFeedbacksTypeIdea}</p>
        </section>

        <ShowFeedbacks feedbacks={feedbacks} />
      </main>
  )
}