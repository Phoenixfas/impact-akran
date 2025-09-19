import PageHero from '@/components/PageHero'
import React from 'react'
import BlogsList from './BlogsList'

export default function page() {
    return (
        <div className='relative w-full min-h-screen'>
            <PageHero title='Blogs' subtitle='Insights, stories, and tips from our event planning experts.' />
            <BlogsList />
        </div>
    )
}
