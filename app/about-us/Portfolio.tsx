'use client'
import Image from 'next/image'
import { useEffect } from 'react'
import style from "@/styles/About.module.css";

export default function Portfolio() {

    useEffect(() => {
        const target1 = document.getElementById('target-1');
        const target2 = document.getElementById('target-2');

        if (!target1 || !target2) return;

        const movingText1: HTMLElement | null = document.getElementById('moving-text-1');
        const movingText2: HTMLElement | null = document.getElementById('moving-text-2');
        if (!movingText1 || !movingText2) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Initial logging when the component is in view
                    const rect1 = target1.getBoundingClientRect();
                    const rect2 = target2.getBoundingClientRect();
                    const distanceFromTop1 = window.innerHeight - rect1.bottom;
                    const distanceFromTop2 = window.innerHeight - rect2.bottom;
                    if (distanceFromTop1 < 0) {
                        movingText1.style.transform = `translateY(-100%)`;
                    } else {
                        movingText1.style.transform = `translateY(100%)`;
                    }
                    if (distanceFromTop2 < 0) {
                        movingText2.style.transform = `translateY(100%)`;
                    } else {
                        movingText2.style.transform = `translateY(-100%)`;
                    }
                    logDistanceFromBottom();
                    // Add a scroll event listener to update the log on scroll
                    window.addEventListener('scroll', logDistanceFromBottom);
                    // console.log("in view");
                } else {
                    window.removeEventListener('scroll', logDistanceFromBottom);
                    // console.log("out of view");
                }
            });
        });

        observer.observe(target1);

        // Function to calculate and log the distance
        const logDistanceFromBottom = () => {
            const rect1 = target1.getBoundingClientRect();
            const distanceFromTop1 = window.innerHeight - rect1.bottom;

            // Assuming min_val = 0 and max_val = window.innerHeight
            const percentage = (distanceFromTop1 / window.innerHeight) * 100;

            movingText1.style.transform = `translateX(${-percentage + 30}%)`;
            movingText2.style.transform = `translateX(${percentage - 30}%)`;
        };

    }, []);

    return (
        <div className="w-full flex flex-col">
            <div className='relative z-10 w-full bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))]'>
                <div id='target-1' className="flex w-full overflow-hidden py-5">
                    <div id='moving-text-1' className={`flex items-center gap-3 py-5 ${style.border_image_dynamic} border-2`}>
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-80 h-[180px] bg-white rounded-xl overflow-hidden">
                                <Image src={`https://picsum.photos/600/400?random=${i}`} alt={`Portfolio ${i + 1}`} width={320} height={180} className='w-full h-full object-cover' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='relative z-10 w-full bg-[linear-gradient(-45deg,_var(--primary),_var(--secondary),_var(--tertiary))]'>
                <div id='target-2' className="flex w-full overflow-hidden py-5">
                    <div id='moving-text-2' className={`relative right-full flex items-center gap-3 py-5 ${style.border_image_dynamic} border-2`}>
                        {[...Array(10)].map((_, i) => (
                            <div key={i} className="w-80 h-[180px] bg-white rounded-xl overflow-hidden">
                                <Image src={`https://picsum.photos/600/400?random=${i}`} alt={`Portfolio ${i + 1}`} width={320} height={180} className='w-full h-full object-cover' />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
