import React from 'react'
import { HiLightBulb } from 'react-icons/hi';
import { TbPackages } from 'react-icons/tb';
import { FaHandshakeAngle } from 'react-icons/fa6';
import { IoSpeedometer } from 'react-icons/io5';

const reasons = [
    {
        title: "Creativity in Strategy",
        description: "For meaningful results, creative design and astute implementation come together.",
        icon: <HiLightBulb />
    },
    {
        title: "All-inclusive Services",
        description: "Every detail is covered, from setup to cleanup.",
        icon: <TbPackages />
    },
    {
        title: "Reliable Collaborations",
        description: "enduring connections with leading suppliers, brands, and venues.",
        icon: <FaHandshakeAngle />
    },
    {
        title: "Perfect Performance",
        description: "We provide accuracy, expertise, and tranquilly.",
        icon: <IoSpeedometer />
    }
]

export default function WhyUs() {
    return (
        <div className='relative w-full p-20 bg-[linear-gradient(to_top,_var(--primary),_var(--secondary),_var(--tertiary))]'>
            <div className="w-full p-20 pb-28 flex flex-col items-center gap-20 bg-[linear-gradient(to_top,_var(--tertiary),_var(--secondary),_transparent_40%)] rounded-3xl">
                <h2 className='text-5xl font-black text-white text-center max-w-4xl'>Why Choose Us?</h2>
                <div className="flex flex-wrap justify-between gap-5">
                    {reasons.map((reason, index) => (
                        <div key={index} className="w-full max-w-[calc(50%-20px)] py-3 px-5 flex items-center gap-2 rounded-xl bg-white border border-primary shadow-[0_5px_20px_var(--primary)]">
                            <div className="p-2 border-2 border-primary rounded-full flex items-center justify-center text-4xl text-primary">{reason.icon}</div>
                            <div className="flex flex-col text-primary">
                                <span className="text-xl font-bold">{reason.title}</span>
                                <span className="text-sm">{reason.description}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
