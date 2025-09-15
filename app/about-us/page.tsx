import style from "@/styles/About.module.css";
import PageHero from '@/components/PageHero'
import ParticlesBg from '@/components/ParticlesBg'
import React from 'react'
import VisMis from './VisMis'
import Intro from './Intro'
import Portfolio from "./Portfolio";
import Accomplishments from "./Accomplishments";
import Showreel2 from "./Showreel2";
import Testimonials from "./Testimonials";

export default function page() {
    return (
        <div className={style.about}>
            <ParticlesBg amount={40} />
            <PageHero title='About the Events of Impact Makers' subtitle='Creating engaging event experiences that link companies throughout the globe' />
            <Intro />
            <Portfolio />
            <Accomplishments />
            <VisMis />
            <Showreel2 />
            <Testimonials />
        </div>
    )
}
