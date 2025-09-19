import React from 'react'

export default function BlogContent({ content }: { content: string }) {
    return (
        <div className="w-full px-10 py-20 flex justify-center items-center bg-[#92dcff33]">
            <div className="w-full max-w-5xl flex flex-col">
                <div className="blog" dangerouslySetInnerHTML={{ __html: content }}></div>
            </div>
        </div>
    )
}
