import Link from 'next/link'
import style from "@/styles/About.module.css";
import { FaStar } from 'react-icons/fa';
import BackgroundSvg from "../../public/images/svgs/background.svg"

export default function KickStart() {
    return (
        <div className='relative w-full p-28 flex flex-col items-center bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] overflow-hidden'>
            <BackgroundSvg className={style.background} />
            <div className="relative w-full max-w-4xl bg-white rounded-3xl py-14 flex items-center shadow-[5px_5px_20px_#00000055]">
                <div className="flex flex-col gap-3 bg-[linear-gradient(-45deg,_var(--primary),_var(--secondary),_var(--tertiary))] rounded-xl p-10 -translate-x-16 text-white shadow-[5px_5px_20px_var(--tertiary)]">
                    <h4 className='text-2xl font-bold'>Types of Services</h4>
                    <div className="flex flex-col gap-2">
                        {["B2B", "Non-Profit", "B2C", "eCommerce"].map((item, index) => (
                            <div key={index} className="flex items-center gap-3 text-white">
                                <FaStar /><span className='text-lg font-normal'>{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="max-w-xl flex flex-col gap-5">
                    <h2 className='text-3xl font-black text-black max-w-3xl'>Let&apos;s Kick start Your Next Event</h2>
                    <p className='text-lg font-normal max-w-3xl'>Our skilled staff is prepared to make any event unique, whether you&apos;re organizing a custom brand activation, an international expo, or a high-stakes business summit.</p>
                    <Link href={"/contact"} className='px-10 py-3 bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] text-white rounded-full hover:scale-105 duration-300 w-fit shadow-[5px_5px_20px_var(--tertiary)]'>Contact Us</Link>
                </div>
            </div>
        </div>
    )
}
