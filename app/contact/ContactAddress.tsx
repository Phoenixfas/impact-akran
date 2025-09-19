import Link from 'next/link';
import { FaMapPin, FaFacebook, FaPinterest, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { PiPhoneCallFill } from 'react-icons/pi';

export default function ContactAddress() {
    return (
        <div className='p-8 flex flex-col gap-5 justify-between bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] text-white rounded-3xl'>
            <div className="flex flex-col">
                <h3 className='text-2xl font-semibold mb-1'>Address</h3>
                <p>Dubai, United Arab Emirates</p>
                <Link href={"/"} className='flex items-center gap-2 w-fit mt-2 px-3 py-1 bg-white/70 rounded-full hover:bg-white text-primary duration-300'>
                    <FaMapPin />
                    <span>See Map</span>
                </Link>
            </div>
            <div className="flex flex-col">
                <h3 className='text-2xl font-semibold mb-1'>Email</h3>
                <p>info@impactmakersevents.com</p>
                <Link href={"/"} className='flex items-center gap-2 w-fit mt-2 px-3 py-1 bg-white/70 rounded-full hover:bg-white text-primary duration-300'>
                    <MdEmail />
                    <span>Say Hello</span>
                </Link>
            </div>
            <div className="flex flex-col">
                <h3 className='text-2xl font-semibold mb-1'>Phone</h3>
                <p>+971 54 711 4951</p>
                <Link href={"/"} className='flex items-center gap-2 w-fit mt-2 px-3 py-1 bg-white/70 rounded-full hover:bg-white text-primary duration-300'>
                    <PiPhoneCallFill />
                    <span>Call Now</span>
                </Link>
            </div>
            <div className="flex flex-col">
                <h3 className='text-2xl font-semibold mb-1'>Stay Connected</h3>
                <div className="w-full flex flex-wrap items-center gap-8">
                    <div className="p-2 rounded-full bg-white">
                        <Link href={"/"} className='flex items-center gap-2 w-fit text-primary text-2xl duration-300'>
                            <FaFacebook />
                        </Link>
                    </div>
                    <div className="p-2 rounded-full bg-white">
                        <Link href={"/"} className='flex items-center gap-2 w-fit text-primary text-2xl duration-300'>
                            <FaSquareXTwitter />
                        </Link>
                    </div>
                    <div className="p-2 rounded-full bg-white">
                        <Link href={"/"} className='flex items-center gap-2 w-fit text-primary text-2xl duration-300'>
                            <FaPinterest />
                        </Link>
                    </div>
                    <div className="p-2 rounded-full bg-white">
                        <Link href={"/"} className='flex items-center gap-2 w-fit text-primary text-2xl duration-300'>
                            <FaInstagramSquare />
                        </Link>
                    </div>
                    <div className="p-2 rounded-full bg-white">
                        <Link href={"/"} className='flex items-center gap-2 w-fit text-primary text-2xl duration-300'>
                            <FaYoutubeSquare />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
