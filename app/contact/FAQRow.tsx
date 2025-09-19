'use client'
import { useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'

export default function FAQRow({ question, answer }: { question: string, answer: string }) {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='flex flex-col cursor-pointer' onClick={() => setIsOpen(!isOpen)}>
            <div className="w-full flex items-center justify-between text-black py-8 border-b-2 border-white ">
                <h3 className='text-xl font-semibold'>{question}</h3>
                <FaChevronRight className={`transition-transform ${isOpen ? 'rotate-90' : ''}`} />
            </div>
            {isOpen && <p className={`ml-5 text-md border-l-4 border-secondary bg-white p-3 rounded-lg text-black overflow-hidden duration-300`}>{answer}</p>}
        </div>
    )
}
