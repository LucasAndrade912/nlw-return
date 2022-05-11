import React from 'react'

interface FeedbackTypeProps {
  source: string
  alt: string
}

export interface FeedbackProps {
  feedbackType: FeedbackTypeProps
  feedbackText: string
  linkForImage?: string
}

export function Feedback({ feedbackType, feedbackText, linkForImage }: FeedbackProps) {
  return (
    <div className="bg-zinc-800 flex p-6 items-center rounded-md relative">
      <img
        className="mr-6 w-8"
        src={ feedbackType.source }
        alt={ feedbackType.alt }
      />
      <p className="w-[70%]">{ feedbackText }</p>

      <a
        href={ linkForImage }
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