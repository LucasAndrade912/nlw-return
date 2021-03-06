import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { CaretDown, CaretUp } from 'phosphor-react'
import { Feedback, FeedbackProps } from '../../components/Feedback'

interface ShowFeedbacksProps {
  feedbacks: FeedbackProps[]
}

export function ShowFeedbacks({ feedbacks }: ShowFeedbacksProps) {
  return (
    <Disclosure as="div" className="md:col-span-4">
      { ({ open }) => (
        <>
          <Disclosure.Button className="w-full">
            <div
              className={`
                section
                ${open && 'rounded-b-none'}
                flex
                flex-row
                pl-0
                justify-center
                items-center
                h-[136px]
                cursor-pointer
                text-zinc-600
                hover:text-zinc-800
                dark:text-zinc-400
                dark:hover:text-zinc-100
                transition-colors
              `}
            >
              { !open ? (
                <>
                  <CaretDown className="text-2xl mr-2"/>
                  <p>Mostrar meus feedbacks</p>
                </>
              ) : <CaretUp className="text-2xl mr-2"/> }
            </div>
          </Disclosure.Button>
          
          <Transition
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>
              <div className="dark:bg-zinc-900 bg-zinc-100 px-8 pb-8 rounded-b-2xl flex flex-col gap-y-4 overflow-x-auto">
                {
                  feedbacks.map(({ type, comment, screenshot }, idx) => (
                    <Feedback
                      key={idx}
                      type={type}
                      comment={comment}
                      screenshot={screenshot}
                    />
                  ))
                }
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      ) }
    </Disclosure>
  )
}