'use client'
import { useState, useRef, useEffect } from 'react'
import { FaPlay } from 'react-icons/fa6';

export default function Showreel2() {
    const [isPlaying, setIsPlaying] = useState(false);

    const handleVideoClick = () => {
        setIsPlaying(!isPlaying);
    };

    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }
        }
    }, [isPlaying]);

    return (
        <div className='relative w-full h-[70vh] flex'>
            <video ref={videoRef} className='w-full h-full object-cover' muted loop>
                <source src="/videos/service_vid.MOV" type="video/mp4" />
            </video>

            <div className={`absolute left-0 top-0 w-full h-full flex flex-col items-center justify-end gap-10 text-white px-5 py-20 text-center overflow-hidden`}>
                <div className={`absolute left-0 top-0 w-full h-full bg-[linear-gradient(to_top,_black_0%,_#000000aa_40%,_transparent_70%)] ${isPlaying ? 'translate-y-full' : ''} duration-200`}></div>
                <h3 className={`relative text-5xl font-normal leading-[3.5rem] max-w-[900px] duration-300 ${isPlaying ? 'opacity-0 translate-y-20' : 'opacity-100'}`}>Witness our work in action, ranging from large-scale corporate productions to exhibitions.</h3>
                <div className={`relative w-fit px-7 py-3 text-base font-normal bg-white rounded-full flex items-center gap-3 duration-700 ${isPlaying ? 'opacity-0 translate-y-20' : 'opacity-100'} cursor-pointer hover:scale-105 text-secondary hover:text-white hover:bg-secondary`} onClick={handleVideoClick}>
                    <FaPlay size={25} />
                    <span>Play Showreel</span>
                </div>
            </div>
            {isPlaying &&
                <div className={`absolute left-0 top-0 w-full h-full cursor-pointer`} onClick={handleVideoClick}></div>
            }
        </div>
    )
}
