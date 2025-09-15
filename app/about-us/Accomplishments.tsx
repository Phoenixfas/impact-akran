import Link from 'next/link'
import React from 'react'

export default function Accomplishments() {
    return (
        <div className='relative z-10 bg-background w-full py-28 px-10 flex gap-5'>
            <div className="flex-1 flex flex-col gap-3">
                <h2 className='max-w-[500px] text-6xl font-normal'>Examine recent accomplishments.</h2>
                <p className='max-w-[500px] text-xl font-light'>We produce memorable events that surpass expectations and enhance your brand.</p>
                <Link href={"/"} className="w-fit my-10 px-5 py-3 text-base font-normal text-white rounded-full hover:scale-105 duration-300 bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))]">Check out our services</Link>
            </div>
            <div className="flex-1 flex flex-col gap-5">
                <div className="p-7 bg-[#003e9511] rounded-full w-fit">
                    <h3 className='text-3xl font-normal text-primary'>28% Increase in brand engagement for clients</h3>
                </div>
                <div className="p-7 bg-[#00a7f511] rounded-full w-fit">
                    <h3 className='text-3xl font-normal text-secondary'>1.5k+ sqm exhibition space managed</h3>
                </div>
                <div className="p-7 bg-[#003e9511] rounded-full w-fit">
                    <h3 className='text-3xl font-normal text-primary'>2x client return rate on average</h3>
                </div>
                <div className="p-7 bg-[#92dcff11] rounded-full w-fit">
                    <h3 className='text-3xl font-normal text-tertiary'>30+ global brand partnerships</h3>
                </div>
            </div>
        </div>
    )
}
