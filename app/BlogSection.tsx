import BlogCard from '@/components/BlogCard'
import blogs from '@/data/blogs'
import React from 'react'

export default function BlogSection() {
  return (
    <div className='px-6 mb-32'>
      <div className="max-w-7xl mx-auto flex flex-col items-center">

        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-8 h-1 bg-secondary rounded-full"></div>
            <span className="text-8xl k2d-extrabold text-foreground tracking-wider uppercase text-center">Blogs</span>
            <div className="w-8 h-1 bg-secondary rounded-full"></div>
          </div>

          <h2 className="mb-5 text-3xl font-light text-slate-400">
            Impact Makers&apos; Latest Developments
          </h2>

          <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
            Team insights, current affairs, and innovative trends in the industry.
          </p>
        </div>

        <div className="flex flex-wrap gap-10">
          {blogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

      </div>
    </div>
  )
}
