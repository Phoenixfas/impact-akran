import Image from 'next/image'
import React from 'react'
import { MdEmojiEvents } from 'react-icons/md';
import { FaUsers } from 'react-icons/fa';

export default function Achievements() {
    return (
        <div className='relative mb-20 w-full h-80 flex flex-col items-center justify-end'>
            <h3 className='absolute w-full px-5 sm:px-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 text-white [text-shadow:_0px_0px_5px_var(--primary)] k2d-extrabold text-8xl font-bold uppercase text-center'>Our Achievements</h3>
            <div className="absolute left-0 top-0 w-full h-full bg-foreground">
                <Image src="/images/about/achieve_bw.png" className='w-full h-full object-cover object-[center_30%] brightness-75' alt="achievement" width={1920} height={800} priority />
            </div>
            <div className="w-full translate-y-1/2 flex justify-center gap-10">
                <div className="p-5 bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] rounded-xl max-w-[700px] w-full flex flex-col gap-2 hover:-translate-y-2 duration-300">
                    <MdEmojiEvents className='text-white text-5xl' />
                    <p className='text-white text-xl font-light'>Over 100 Events in Various Industries</p>
                </div>
                <div className="p-5 bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] rounded-xl max-w-[700px] w-full flex flex-col gap-2 hover:-translate-y-2 duration-300">
                    <FaUsers className='text-white text-5xl' />
                    <p className='text-white text-xl font-light'>2x Average Client Retention Rate with Over 30 Global Clients Involved</p>
                </div>
            </div>
        </div>
    )
}
