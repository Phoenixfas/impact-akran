import PageHero from '@/components/PageHero'
import React from 'react'
import Intro from './Intro'
import ServicesCards from './ServicesCards'
import CTA from './CTA'
import KickStart from './KickStart'
import WeGoodAt from './WeGoodAt'
import WhyUs from './WhyUs'

export default function page() {
    return (
        <div className='relative w-full min-h-screen'>
            <PageHero title='Our Offerings' subtitle='Everything you need for events that will be remembered, from concept to celebration.' />
            <Intro />
            <ServicesCards />
            <CTA />
            <KickStart />
            <WeGoodAt />
            <WhyUs />
        </div>
    )
}
