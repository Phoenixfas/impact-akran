import PageHero from '@/components/PageHero'
import ParticlesBg from '@/components/ParticlesBg'
import React from 'react'
import VisMis from './VisMis'

export default function page() {
    return (
        <div className='w-full min-h-screen'>
            <ParticlesBg amount={40} />
            <PageHero title='About the Events of Impact Makers' subtitle='Creating engaging event experiences that link companies throughout the globe' />
            <VisMis />
        </div>
    )
}
