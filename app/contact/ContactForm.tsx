'use client'
import { BsArrowRight } from 'react-icons/bs'
import { useState } from 'react';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Reset form fields
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    }

    return (
        <div className='relative flex-grow'>
            <form onSubmit={handleSubmit} className='w-full flex flex-col gap-5'>
                <input required type="text" placeholder='Your Name' className='w-full p-5 rounded-xl border border-white/80 focus:border-primary outline-none duration-300 bg-white/80 placeholder:font-semibold' value={name} onChange={(e) => setName(e.target.value)} />
                <input required type="email" placeholder='Your Email' className='w-full p-5 rounded-xl border border-white/80 focus:border-primary outline-none duration-300 bg-white/80 placeholder:font-semibold' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input required type="text" placeholder='Subject' className='w-full p-5 rounded-xl border border-white/80 focus:border-primary outline-none duration-300 bg-white/80 placeholder:font-semibold' value={subject} onChange={(e) => setSubject(e.target.value)} />
                <textarea required placeholder='Your Message' rows={6} className='w-full p-5 rounded-xl border border-white/80 focus:border-primary outline-none duration-300 bg-white/80 placeholder:font-semibold' value={message} onChange={(e) => setMessage(e.target.value)} ></textarea>
                {/* agree to terms */}
                <div className="flex items-center gap-2">
                    <input type="checkbox" id="terms" className='accent-primary' required />
                    <label htmlFor="terms" className='text-sm'>By submitting this form, you agree to our [Terms & Conditions] and [Privacy Policy].</label>
                </div>
                <button type='submit' className="group w-fit flex items-center gap-3 mt-10">
                    <span className='w-fit px-20 py-3 bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] text-white rounded-full cursor-pointer text-base'>Send Message</span>
                    <span className="p-2 rounded-full text-white bg-secondary group-hover:bg-primary group-hover:translate-x-10 duration-300">
                        <BsArrowRight size={25} />
                    </span>
                </button>
            </form>
        </div>
    )
}
