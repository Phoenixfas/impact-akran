import React from 'react'
import FAQRow from './FAQRow'
import faqs from '@/data/faqs'

export default function FAQ() {
    return (
        <div className='relative w-full p-20 py-28 flex flex-col items-center'>
            <div className="w-full max-w-3xl flex flex-col items-center gap-5 mb-10">
                <h2 className='text-5xl font-bold'>Frequently Asked Questions</h2>
                <p className='text-center text-lg'>Planning your next event or exhibit? Here are some quick answers to common questions. Still unsure? We&apos;re just a message away.</p>
            </div>
            <div className='w-full max-w-4xl bg-[#92dcff33] rounded-3xl px-8 flex flex-col'>
                {
                    faqs.map((faq, index) => (
                        <FAQRow key={index} question={faq.question} answer={faq.answer} />
                    ))
                }
            </div>
        </div>
    )
}
