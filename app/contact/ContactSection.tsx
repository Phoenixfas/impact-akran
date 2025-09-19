import Image from 'next/image'
import React from 'react'
import ContactAddress from './ContactAddress'
import ContactForm from './ContactForm'

export default function ContactSection() {
    return (
        <div className='relative w-full p-20 flex flex-col items-center bg-[#92dcff33]'>
            <div className="w-full max-w-7xl flex flex-col gap-20">
                <div className="w-full flex items-center justify-between gap-20">
                    <h2 className='max-w-2xl text-5xl font-normal'>Drop us a line to get your next project started. We&apos;d love to hear from you.</h2>
                    <div className="relative">
                        <div className="absolute top-0 -left-1/2 w-[140px] h-[140px] bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] rounded-full overflow-hidden"></div>
                        <div className="relative w-[150px] h-[150px] bg-foreground rounded-full border-4 border-[#ebf8fe] p-3 overflow-hidden">
                            <Image src={"/logo_b.svg"} alt="logo" width={200} height={200} className="w-full h-full object-contain" />
                        </div>
                    </div>
                </div>
                <div className="w-full flex gap-10">
                    <ContactAddress />
                    <ContactForm />
                </div>
            </div>

        </div>
    )
}
