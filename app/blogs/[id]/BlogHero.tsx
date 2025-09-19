import Image from 'next/image'
import React from 'react'

export default function BlogHero({ title, subtitle, image }: { title: string, subtitle?: string, image?: string }) {
    return (
        <div className='relative w-full bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] text-white flex flex-col items-center justify-center gap-6 py-32 overflow-hidden z-10'>
            <div className="absolute left-0 top-0 w-full h-full overflow-hidden">
                {image && <Image src={image} alt={title} width={1920} height={1080} className='w-full h-full object-cover brightness-50' />}
            </div>
            <div className="absolute left-0 bottom-0 w-full h-1/2 overflow-hidden">
                <div className="waves"></div>
            </div>
            <h1 className='relative text-7xl font-bold k2d-extrabold text-center max-w-5xl [text-shadow:_0px_0px_20px_#000000]'>{title}</h1>
            {subtitle && <p className='relative text-base text-gray-100'>{subtitle}</p>}
        </div>
    )
}
