import blogs from '@/data/blogs'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

export default function BlogsList({ amount, activeId }: { amount?: number, activeId?: string }) {
    return (
        <div className='relative w-full p-20 bg-[#92dcff33] flex flex-col items-center'>
            <div className="w-full max-w-7xl flex flex-wrap justify-center gap-5">
                {blogs.filter(blog => blog.id !== activeId).slice(0, amount).map((blog, index) => (
                    <Link href={`/blogs/${blog.id}`} key={index} className="relative group w-full min-w-80 max-w-full md:max-w-[calc(100%/2-20px)] lg:max-w-[calc(100%/3-20px)] bg-white rounded-3xl overflow-hidden flex flex-col justify-between">
                        <div className="absolute left-0 top-0 w-full h-full group-hover:scale-110 duration-300">
                            <Image src={blog.image} alt={blog.title} width={720} height={1280} className='w-full h-full object-cover rounded-3xl' />
                        </div>
                        <div className="relative flex items-center gap-5 p-5 bg-white/50 backdrop-blur-md">
                            <span className='py-1 px-3 bg-tertiary rounded-full text-primary font-bold'>{blog.author}</span>
                            <span>{blog.date}</span>
                        </div>
                        <div className="relative w-full flex flex-col gap-5 p-5 pt-48 bg-[linear-gradient(to_top,black_,transparent_)] group-hover:bg-black/70 duration-200">
                            <h2 className="text-2xl font-normal text-white">{blog.title}</h2>
                            <div className="w-full flex items-end">
                                <div className="flex-grow flex flex-wrap gap-2">
                                    {blog.keywords.map((keyword, kIndex) => (
                                        <span key={kIndex} className='py-1 px-3 bg-secondary text-white rounded-full'>{keyword}</span>
                                    ))}
                                </div>
                                <div className="p-2 rounded-full text-black hover:text-white bg-tertiary hover:bg-primary duration-300">
                                    <BsArrowRight size={25} />
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
