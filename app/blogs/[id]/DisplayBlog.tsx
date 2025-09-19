'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import blogs from '@/data/blogs'
import LoadingComp from '@/components/LoadingComp'
import BlogHero from './BlogHero'
import BlogContent from './BlogContent'
import BlogsList from '../BlogsList'

interface Blog {
    id: string;
    title: string;
    content: string;
    snippet: string;
    keywords: string[];
    author: string;
    image: string;
    date: string;
    component?: string;
}

export default function DisplayBlog() {
    const { id } = useParams()
    const [blog, setBlog] = useState<Blog | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const foundBlog = blogs.find((b) => b.id === id);
        if (!foundBlog) {
            setError('Blog not found');
            setLoading(false);
            return;
        } else {
            setError(null);
            setLoading(false);
        }
        setBlog(foundBlog || null);
    }, [id]);

    if (loading) {
        return (
            <div className='relative w-full min-h-screen'>
                <BlogHero title={`Loading...`} />
                <div className="w-full h-full py-10">
                    <LoadingComp />
                </div>
            </div>
        )
    }
    if (error) {
        return (
            <div className='relative w-full min-h-screen'>
                <BlogHero title={error} />
            </div>
        )
    }

    if (blog) {
        return (
            <>
                <BlogHero title={blog.title} image={blog.image} />
                <BlogContent content={blog.content} />
                <div className="w-full px-20 flex flex-col items-center bg-[#92dcff33]">
                    <div className="w-full max-w-7xl">
                        <h3 className='max-w-md text-5xl font-normal text-foreground'>See our other news and articles</h3>
                    </div>
                </div>
                <BlogsList amount={3} activeId={blog.id} />
            </>
        )
    }
}
