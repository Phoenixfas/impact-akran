'use client'
import { useEffect } from "react"
import style from "../styles/Home.module.css"
// import PassionSvg from "../public/images/svgs/passion_animated.svg"
// import NeedsSvg from "../public/images/svgs/needs_animated.svg"
// import WantsSvg from "../public/images/svgs/wants_animated.svg"
import { BsChevronExpand } from "react-icons/bs"
import HeroSlider from "@/components/HeroSlider";

export default function Hero() {
    useEffect(() => {

        const heroBack = document.getElementById("hero-back")
        const heroTouch = document.getElementById("hero-touch")
        // console.log(heroTouch)

        const hero = document.getElementById("hero")

        if (hero && heroBack && heroTouch) {
            const onMove = (e: MouseEvent) => {
                const pixel = e.clientX + "px";
                heroBack.style.setProperty("--xpos", pixel);
            }

            hero.addEventListener("mousemove", onMove)
            hero.addEventListener("touchmove", (e) => {
                const pixel = e.touches[0].clientX + "px";
                heroBack.style.setProperty("--xpos", pixel);
                heroTouch.style.left = pixel;
            })
            hero.addEventListener("click", (e) => {
                const pixel = e.x + "px";
                heroTouch.style.left = pixel;
            })

            return () => {
                hero.removeEventListener('mousemove', onMove);
                hero.removeEventListener('touchmove', (e) => {
                    const pixel = e.touches[0].clientX + "px";
                    heroBack.style.setProperty("--xpos", pixel);
                    heroTouch.style.left = pixel;
                });
                hero.removeEventListener("click", (e) => {
                    const pixel = e.x + "px";
                    heroTouch.style.left = pixel;
                })
            }
        }

    }, []);

    return (
        <div className={style.hero} id="hero">

            <div id="hero-back" className={style.hero__back}>
                <div className={style.hero__title}>
                    <h1>Memorable, Meaningful <span className="[text-shadow:_0px_0px_20px_#000000]">Experiences</span></h1>
                </div>
                <div className="w-full">
                    <HeroSlider />
                </div>
            </div>

            <div id="hero-front" className={style.hero__front}>
                <div className={`${style.hero__title} ${style.dark}`}>
                    <h1>Memorable, Meaningful <span className="[text-shadow:_0px_0px_20px_#000000]">Experiences</span></h1>
                </div>
                <div className="w-full">
                    <HeroSlider rev={true} />
                </div>

                <div id="hero-touch" className={style.hero__backTouch}><BsChevronExpand size={25} color="#1A3D52" /></div>

            </div>

        </div>
    )
}
