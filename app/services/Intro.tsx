import React from 'react'

export default function Intro() {
    return (
        <div className='relative z-10 bg-background w-full py-24 px-40 flex gap-5'>
            <div className="flex-1 flex flex-col gap-3">
                <h2 className='max-w-[500px] text-5xl font-normal text-primary'>We offer outstanding event solutions that leave a lasting impression.</h2>
            </div>
            <div className="flex-1 flex flex-col gap-5 items-end">
                <p className='max-w-[500px] text-lg font-normal'>We create immersive experiences at Impact Makers Events in addition to planning events. We provide technical, logistical, and creative support for all kinds of events, and we are based in Dubai and operate all over the world. We assist you in making significant connections with your audience through everything from exquisite stand fabrication to premium branding and flawless implementation.</p>
            </div>
        </div>
    )
}
