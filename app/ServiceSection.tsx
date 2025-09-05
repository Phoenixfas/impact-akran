import Image from 'next/image'
import React from 'react'
import services from '@/data/services'
import Link from 'next/link'

export default function ServiceSection() {
    return (
        <div className='w-full flex flex-col items-center p-20'>
            <h2 className='relative k2d-extrabold text-foreground text-8xl font-bold py-3 mb-7 before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:translate-y-full before:w-1/2 before:h-2 before:bg-secondary before:rounded-full uppercase text-center'>Our Services</h2>
            <p className='text-center text-2xl text-foreground font-light mb-20'>Your Complete Event Support Provider</p>
            <div className="w-full max-w-7xl flex justify-center flex-wrap gap-10">
                {services?.slice(0, 7).map((service, index) => (
                    <div key={index} className="w-72 flex flex-col items-center gap-3">
                        <div className="w-full h-[150px] rounded-lg overflow-hidden">
                            <Image src={service.main_img} alt={service.name} width={300} height={150} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full flex flex-col items-center justify-center gap-2 text-center text-foreground p-5 duration-300">
                            <h3 className='text-secondary text-xl font-bold'>{service.name}</h3>
                            <p className='text-sm font-light'>{service.snippet}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="w-full flex justify-center mt-10">
                <Link href={"/services"} className='px-10 py-3 rounded-full text-white font-bold bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] hover:shadow-[0px_0px_5px_var(--foreground)] hover:scale-105 duration-300'>View All Services</Link>
            </div>
        </div>
    )
}
