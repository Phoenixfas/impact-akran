'use client'
import { useState, useEffect, useMemo } from 'react'
import { BiHomeAlt2 } from "react-icons/bi";
import { usePathname } from 'next/navigation'
import Link from 'next/link';

export default function TabsBar() {
    const pathname = usePathname()
    const p = pathname.split('/')[1] || ''
    const [activeTab, setActiveTab] = useState(0)
    const tabs = useMemo(() => [
        { id: 0, content: <BiHomeAlt2 />, pathname: '' },
        { id: 1, content: 'About', pathname: 'about' },
        { id: 2, content: 'Services', pathname: 'services' },
        { id: 3, content: 'Blogs', pathname: 'blogs' },
    ], [])

    const [scrollDirection, setScrollDirection] = useState('up');

    useEffect(() => {
        const activeTabIndex = tabs.findIndex(tab => tab.pathname === p)
        setActiveTab(activeTabIndex !== -1 ? activeTabIndex : 0)

        // check if user scrolling down or up
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (direction !== scrollDirection) setScrollDirection(direction);
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener('scroll', updateScrollDirection)
        return () => {
            window.removeEventListener('scroll', updateScrollDirection)
        }
    }, [p, tabs, scrollDirection])

    return (
        <div className={`fixed ${scrollDirection === 'down' ? 'bottom-0 translate-y-full' : 'bottom-5'} left-1/2 -translate-x-1/2 z-[999999] flex items-center gap-2 rounded-full bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] p-1 border border-tertiary duration-300`}>
            {tabs.map((tab, index) => (
                <Link key={index} href={"/" + tab.pathname} className={`py-2 px-5 rounded-full ${activeTab === tab.id && "bg-primary shadow-[0px_0px_2px_#000000]"} hover:bg-primary ${tab.id === 0 ? "text-2xl" : "text-base"} text-white duration-300`}>
                    {tab.content}
                </Link>
            ))}
        </div>
        // Tab with glass effect
        // <div className={`fixed ${scrollDirection === 'down' ? 'bottom-0 translate-y-full' : 'bottom-5'} left-1/2 -translate-x-1/2 z-[999999] flex items-center gap-2 rounded-full p-1 border border-[#d1d5db55] shadow-[0px_0px_4px_#fff,_0px_0px_7px_#000] bg-white bg-opacity-30 backdrop-blur-md duration-300`}>
        //     {tabs.map((tab, index) => (
        //         <Link key={index} href={"/" + tab.pathname} className={`py-2 px-5 rounded-full ${activeTab === tab.id && "bg-primary text-tertiary shadow-[0px_0px_2px_#000000]"} hover:bg-primary hover:text-white ${tab.id === 0 ? "text-2xl" : "text-base"} duration-300`}>
        //             {tab.content}
        //         </Link>
        //     ))}
        // </div>
    )
}
