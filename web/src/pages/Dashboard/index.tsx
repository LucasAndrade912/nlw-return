import React from 'react'
import { FeedbackProps } from '../../components/Feedback'
import { ShowFeedbacks } from './ShowFeedbacks'
import bugImageUrl from '../../assets/bug.svg'
import ideaImageUrl from '../../assets/idea.svg'
import './style.css'

export const feedbacks: FeedbackProps[] = [
  {
    feedbackType: {
      source: bugImageUrl,
      alt: 'Imagem de um inseto'
    },
    feedbackText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    feedbackType: {
      source: ideaImageUrl,
      alt: 'Imagem de um lâmpada'
    },
    feedbackText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  }
]

export function Dashboard() {
  return (
    <>
      <h1 className="text-center text-3xl my-16">
        Meus Feedbacks
      </h1>

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
          <p className="text-brand-500">4</p>
        </section>

        <section className="section">
          <p>Total de imagens:</p>
          <p className="text-brand-500">3</p>
        </section>
        
        <section className="section col-span-2">
          <p>Tipo de feedback mais enviado:</p>
          <p>Problema</p>
        </section>

        <section className="section col-span-2">
          <p>Total de feedbacks do tipo "Problema":</p>
          <p className="text-brand-500">3</p>
        </section>

        <section className="section col-span-2">
          <p>Total de feedbacks do tipo "Ideia":</p>
          <p className="text-brand-500">1</p>
        </section>

        <ShowFeedbacks />
      </main>
    </>
  )
}