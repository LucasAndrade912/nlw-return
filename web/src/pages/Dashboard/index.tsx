import React, { useEffect, useState } from 'react'
import { FeedbackProps } from '../../components/Feedback'
import { auth } from '../../firebase'
import { api } from '../../lib/api'
import { ShowFeedbacks } from './ShowFeedbacks'
import './style.css'

interface AxiosResponseData {
  feedbacks: FeedbackProps[]
}

export function Dashboard() {
  const [feedbacks, setFeedbacks] = useState<FeedbackProps[]>([])

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

        <ShowFeedbacks feedbacks={feedbacks} />
      </main>
    </>
  )
}