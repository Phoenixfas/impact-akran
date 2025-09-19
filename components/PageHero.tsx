import React from 'react'

export default function PageHero({ title, subtitle }: { title: string, subtitle?: string }) {
    return (
        <div className='relative w-full bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] text-white flex flex-col items-center justify-center gap-6 py-32 overflow-hidden z-10'>
            <div className="absolute left-0 bottom-0 w-full h-1/2 overflow-hidden">
                <div className="waves"></div>
            </div>
            <h1 className='relative text-7xl font-bold k2d-extrabold text-center max-w-[700px] [text-shadow:_0px_0px_20px_#000000]'>{title}</h1>
            {subtitle && <p className='relative text-base text-gray-100'>{subtitle}</p>}
        </div>
    )
}
