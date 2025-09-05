import Image from 'next/image';
import React from 'react'

interface Steps {
    id: number;
    title: string;
    description: string;
    icon: string;
}

const steps: Steps[] = [
    {
        id: 1,
        title: "Consult and Make Plans",
        description: "We discuss all the details of the event, including the location, design, and strategy, and we agree with your goals.",
        icon: "/images/icons/planning.png"
    },
    {
        id: 2,
        title: "Create and Personalize",
        description: "Our team uses customized themes, branding, and layout design to produce one-of-a-kind experiences.",
        icon: "/images/icons/personalized.png"
    },
    {
        id: 3,
        title: "Carry out and deliver",
        description: "Our excellent execution of events creates enduring memories, from vendor coordination to on-site administration.",
        icon: "/images/icons/deliver.png"
    }
];

export default function HowItWorks() {
    return (
        <div className='w-full flex flex-col -mb-10'>
            <div className="flex flex-col items-center pt-16 pb-56 bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))]">
                <div className="inline-flex items-center gap-2 mb-5">
                    <div className="w-8 h-1 bg-white rounded-full"></div>
                    <span className="text-5xl k2d-extrabold text-white tracking-wider uppercase text-center">How It Works</span>
                    <div className="w-8 h-1 bg-white rounded-full"></div>
                </div>
                <p className='text-xl font-light text-white/70'>Three Easy Steps to Make Your Event a Reality</p>
            </div>
            <div className="w-full px-10 -translate-y-40 flex justify-center">
                <div className="max-w-5xl flex gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="relative max-w-64 flex flex-col items-center gap-3 p-10 bg-background rounded-2xl shadow-[0px_0px_5px_var(--secondary)] text-foreground">
                            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 p-3 bg-background rounded-full ">
                                <span className='w-12 h-12 flex items-center justify-center text-xl text-secondary border-[3px] border-secondary rounded-full'>{step.id}</span>
                            </div>
                            <Image src={step.icon} alt={step.title} className="w-32 h-32 mb-3" width={100} height={100} />
                            <h3 className="text-xl font-semibold text-center">{step.title}</h3>
                            <p className="text-sm font-light text-center">{step.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
