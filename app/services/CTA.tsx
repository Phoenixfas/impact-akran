import Link from 'next/link'
import React from 'react'

export default function CTA() {
    return (
        <div className='relative w-full px-28 py-20 bg-white'>
            <div className="w-full bg-[#00a7f533] rounded-xl p-10 flex flex-col items-center gap-5">
                <h3 className='text-2xl font-normal text-center text-primary'>Are you trying to find unique event services that fit your vision? Get a free consultation from us to see how we might help you realise your ideas.</h3>
                <Link href='/contact' className='px-10 py-3 bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] text-white rounded-full hover:scale-105 duration-300'>Get in Touch</Link>
            </div>
        </div>
    )
}
