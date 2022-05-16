import React from 'react'
import { FeedbackType, feedbackTypes } from './WidgetForm'

export interface FeedbackProps {
  type: FeedbackType
  comment: string
  screenshot?: string
  created_at?: string
}

export function Feedback({ type, comment, screenshot }: FeedbackProps) {
  const { image } = feedbackTypes[type]

  function handleShowImage() {
    if (!screenshot) {
      return
    }
    
    const win = window.open()
    win?.document.write(`
      <iframe
        src="${screenshot}"
        frameborder="0"
        style="
          border:0;
          top:0px;
          left:0px;
          bottom:0px;
          right:0px;
          width:100%;
          height:100%;
        "
        allowfullscreen
      ></iframe>
    `)
  }

  return (
    <div className="dark:bg-zinc-800 bg-zinc-200 flex p-6 items-center rounded-md relative w-[500px]">
      <img
        className="mr-6 w-8"
        src={ image.source }
        alt={ image.alt }
      />
      <p className="w-[70%]">{ comment }</p>

      <a
        onClick={handleShowImage}
        className="
          absolute
          right-6
          text-brand-500
          hover:text-brand-300
          transition-colors
          underline
          underline-offset-2
          cursor-pointer
        "
      >
        Show Image
      </a>
    </div>
  )
}