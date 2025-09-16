import services from '@/data/services'
import Image from 'next/image'
import React from 'react'

export default function ServicesCards() {
    return (
        <div className='w-full flex flex-col items-center px-20 py-10'>
            <div className="w-full flex flex-wrap justify-center gap-10">
                {services && services.map((service, index) => (
                    <div key={index} className="relative w-[300px] h-[450px] flex flex-col rounded-3xl overflow-hidden shadow-[0_5px_20px_var(--foreground)]">
                        <Image src={service.main_img} alt={service.name} width={250} height={350} className='absolute top-0 left-0 w-full h-full object-cover' />
                        <div className="relative group w-full h-full overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-[200%] bg-[linear-gradient(to_top,_var(--tertiary)_0%,_var(--secondary)_25%,_var(--primary)_50%,_#000000ee_50%,_#00000088_65%,_transparent_80%)] group-hover:-translate-y-1/2 duration-300"></div>
                            <div className="absolute top-0 left-0 w-full h-[200%] flex flex-col px-5 group-hover:-translate-y-1/2 duration-300">
                                <div className="flex-1 flex flex-col items-center justify-end py-8">
                                    <h3 className='text-white text-2xl font-black text-center'>{service.name}</h3>
                                </div>
                                <div className="flex-1 flex flex-col items-center justify-center text-center py-5 gap-2">
                                    <h3 className='text-white text-2xl font-black'>{service.name}</h3>
                                    <p className='text-white text-sm font-normal'>{service.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
