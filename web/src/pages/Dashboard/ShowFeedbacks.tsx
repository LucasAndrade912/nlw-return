import React from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { CaretDown, CaretUp } from 'phosphor-react'
import { Feedback } from '../../components/Feedback'
import { feedbacks } from '.'

export function ShowFeedbacks() {
  return (
    <Disclosure as="div" className="col-span-4">
      { ({ open }) => (
        <>
          <Disclosure.Button className="w-full">
            <div
              className={`
                section
                ${open && 'rounded-b-none'}
                flex
                flex-row
                justify-center
                items-center
                h-[136px]
                cursor-pointer
                text-zinc-400
                hover:text-zinc-100
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
              <div className="bg-zinc-900 px-8 pb-8 rounded-b-2xl flex flex-col gap-y-4">
                {
                  feedbacks.map(({ feedbackType, feedbackText, linkForImage }) => (
                    <Feedback
                      feedbackType={feedbackType}
                      feedbackText={feedbackText}
                      linkForImage={linkForImage}
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