import PageHero from '@/components/PageHero'
import React from 'react'
import ContactSection from './ContactSection'
import FAQ from './FAQ'
import Cta from '../Cta'

export default function page() {
    return (
        <div className='relative w-full min-h-screen'>
            <PageHero title='Contact Us' subtitle='Let’s bring your next event to life. Reach out and let’s turn your vision into an unforgettable experience.' />
            <ContactSection />
            <FAQ />
            <Cta />
        </div>
    )
}
