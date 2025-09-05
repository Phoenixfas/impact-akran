import Image from 'next/image'
import React from 'react'
import { FaStarOfLife } from 'react-icons/fa';

export default function AboutSection() {
    return (
        <div className='w-full flex justify-center py-40 p-20 gap-20 bg-background'>
            <div className="relative flex justify-end">
                <div className="absolute left-0 top-20 -translate-x-1/2 text-secondary">
                    <FaStarOfLife className='animate-[spin_2s_linear_infinite]' size={100} />
                </div>
                <Image src="/images/cards/1.png" className='w-[550px] h-[650px] object-cover rounded-3xl' alt="about" width={450} height={600} priority />
            </div>
            <div className="relative max-w-xl flex flex-col justify-center items-end">
                <h2 className='absolute top-20 left-0 k2d-extrabold text-9xl tracking-widest uppercase text-nowrap text-foreground -translate-x-1/3 mb-10 [text-shadow:_0px_0px_5px_var(--background)]'>About Us</h2>
                <div className="flex flex-col gap-2 translate-y-10">
                    <h3 className='text-xl font-bold text-foreground'>Extraordinary Occasions, Handle With Care</h3>
                    <p className='text-foreground text-lg font-light text-justify'>Impact Makers Events, an event business situated in Dubai, crafts amazing experiences that are tailored to your goals. We are masters at turning ideas into immersive events, whether it&apos;s business meetings or upscale galas. We ensure that every moment is important and unforgettable by utilizing creativity, precision, and teamwork.</p>
                </div>
                <div className="absolute bottom-0">
                    <div className="w-40 h-3 bg-secondary rounded-full"></div>
                </div>
            </div>
        </div>
    )
}
