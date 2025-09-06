'use client'
import { useEffect, useState } from "react";
import style from "../styles/layout.module.css";
import Image from "next/image"
import Link from "next/link"
// import { usePathname } from "next/navigation";
import { CgClose, CgMenuRight } from "react-icons/cg"
import NavBarMenu from "./NavBarMenu";
// import { FaCalendarAlt } from 'react-icons/fa';
// import { useTheme } from 'next-themes'

export default function Navbar() {
    // const { resolvedTheme } = useTheme()
    // const route = usePathname();
    const [toggle, setToggle] = useState(false)

    const [show, setShow] = useState(false);

    const handleButton = () => {
        setShow(!show)
    }

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 0) {
                setToggle(true)
            } else
                setToggle(false)
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        }

    }, []);

    return (
        <div className={`${style.navbar} ${toggle && style.navToggled}`} >
            <div className={style.navbar__left}>
                <div className={`relative w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] flex items-center justify-center rounded-full overflow-hidden ${style.navbar__left__img}`}>
                    <Image src={"/logo_t_white.svg"} alt="logo" width={200} height={200} className="absolute w-full h-full object-contain animate-[spin_7s_linear_infinite_reverse]" />
                    <Image src={"/logo_g_white.svg"} alt="logo" width={200} height={200} className="w-full h-full object-contain" />
                </div>
            </div>
            <div className={`${style.navbar__right}`}>
                <Link href="/">HOME</Link>
                <Link href="/about-us">ABOUT US</Link>
                <div className={style.products__nav}><Link href="/services">SERVICES</Link><NavBarMenu /></div>
                <Link href="/blogs">BLOGS</Link>
                <Link href="/contact-us" ><p className={`${style.contact}`}>CONTACT US</p></Link>
            </div>
            <div className={style.navbar__mobile}>
                {show ? <CgClose onClick={handleButton} color="#1A3D52" size={toggle ? 30 : 35} /> : <CgMenuRight onClick={handleButton} color={"#1A3D52"} size={toggle ? 30 : 35} />}
            </div>
            <div className={`${show ? style.nav__drawer : style.invisible}`}>
                <Link href="/"><span onClick={handleButton}>HOME</span></Link>
                <Link href="/about-us"><span onClick={handleButton}>ABOUT US</span></Link>
                <Link href="/services"><span onClick={handleButton}>SERVICES</span></Link>
                <Link href="/blogs"><span onClick={handleButton}>BLOGS</span></Link>
                <Link href="/contact-us" ><p className={`${style.contact}`} onClick={handleButton}>CONTACT US</p></Link>
            </div>

        </div>
    )
}
