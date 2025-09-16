import React from 'react'

export default function WeGoodAt() {
    return (
        <div className='relative z-10 w-full bg-[#92dcff33] p-20 px-40 flex items-center gap-5'>
            <div className=" flex flex-col gap-3">
                <h2 className='max-w-[500px] text-7xl font-bold'>What We Are Good At</h2>
            </div>
            <div className="flex-1 flex flex-col gap-5">
                <div className="p-1 bg-white border border-primary rounded-full w-full">
                    <div className="py-1 px-3 bg-primary text-white rounded-full w-full flex items-center justify-between">
                        <h3 className='text-lg font-normal'>Stand Fabrication</h3>
                        <h3 className='text-lg font-normal'>100%</h3>
                    </div>
                </div>
                <div className="p-1 bg-white border border-secondary rounded-full w-full">
                    <div className="py-1 px-3 bg-secondary text-white rounded-full w-[99%] flex items-center justify-between">
                        <h3 className='text-lg font-normal'>Event Management</h3>
                        <h3 className='text-lg font-normal'>99%</h3>
                    </div>
                </div>
                <div className="p-1 bg-white border border-primary rounded-full w-full">
                    <div className="py-1 px-3 bg-primary text-white rounded-full w-[99%] flex items-center justify-between">
                        <h3 className='text-lg font-normal'>AV & Lighting</h3>
                        <h3 className='text-lg font-normal'>99%</h3>
                    </div>
                </div>
                <div className="p-1 bg-white border border-secondary rounded-full w-full">
                    <div className="py-1 px-3 bg-secondary text-white rounded-full w-[99%] flex items-center justify-between">
                        <h3 className='text-lg font-normal'>Branding & Gifts</h3>
                        <h3 className='text-lg font-normal'>99%</h3>
                    </div>
                </div>
                <div className="p-1 bg-white border border-primary rounded-full w-full">
                    <div className="py-1 px-3 bg-primary text-white rounded-full w-[99%] flex items-center justify-between">
                        <h3 className='text-lg font-normal'>Exhibition Services</h3>
                        <h3 className='text-lg font-normal'>99%</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
