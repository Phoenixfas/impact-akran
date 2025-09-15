'use client'
import testimonials from '@/data/testimonials'
import { useState, useEffect } from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri';

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className='relative z-10 w-full py-20 px-10 flex flex-col justify-center items-center'>
            <div className="w-full flex flex-col items-center">
                <div className="inline-flex items-center gap-2 mb-10">
                    <div className="w-8 h-1 bg-secondary rounded-full"></div>
                    <span className="text-5xl k2d-extrabold text-foreground tracking-wider uppercase text-center max-w-xl">Reliable by customers in many sectors</span>
                    <div className="w-8 h-1 bg-secondary rounded-full"></div>
                </div>

                <div className="max-w-5xl w-full flex overflow-hidden">
                    <div className={`flex transition-transform duration-1000`} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                        {testimonials && testimonials.map((t, index) => (
                            <div key={index} className="relative min-w-full max-w-full flex items-center justify-center py-36">
                                <div className="absolute top-0 left-[15%] w-10 h-10 bg-secondary rounded-full"></div>
                                <div className="absolute top-10 left-[20%] w-40 h-40 bg-primary rounded-full"></div>
                                <div className="relative max-w-2xl p-20 pb-10 flex flex-col items-center gap-5 bg-secondary shadow-[-25px_30px_0_var(--primary)] rounded-[30px] text-center">
                                    <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 p-5 bg-tertiary rounded-full">
                                        <RiDoubleQuotesL size={100} color='white' />
                                    </div>
                                    <h3 className='relative text-3xl text-white font-thin'>{t.feedback}</h3>
                                    <p className='relative text-xl text-primary font-black uppercase'>{t.name}</p>
                                    <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-52 h-52">
                                        <div className="absolute top-0 right-1/4 w-20 h-20 bg-primary rounded-full"></div>
                                        <div className="absolute bottom-0 left-0 w-20 h-20 bg-tertiary rounded-full"></div>
                                        <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-secondary rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-fit flex items-center gap-3">
                    {testimonials && testimonials.map((_, index) => (
                        <div
                            key={index}
                            className={` h-2 rounded-full duration-300 ${currentIndex === index ? 'bg-primary w-5' : 'bg-secondary w-2'}`}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}
