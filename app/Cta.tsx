import { FaCalendarMinus, FaChevronRight } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';
import { BsTelephone } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';

export default function Cta() {
    return (
        <section className="py-20 px-6 bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)',
                    backgroundSize: '20px 20px'
                }}></div>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 mb-5">
                        <div className="w-8 h-1 bg-white rounded-full"></div>
                        <span className="text-5xl k2d-extrabold text-white tracking-wider uppercase text-center">Get Started</span>
                        <div className="w-8 h-1 bg-white rounded-full"></div>
                    </div>

                    <h2 className="text-xl font-light text-white/70 mb-6">
                        Launch Your Upcoming Event
                    </h2>

                    <p className="max-w-2xl mx-auto text-white/90 leading-relaxed">
                        With the support of our expertise, imagination, and strategic planning, let&apos;s realise your next big idea.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Primary CTA - Request a Consultation */}
                    <button className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-primary rounded-full hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center">
                        <FaCalendarMinus className="text-xl" />
                        <span className="font-medium">Request a Consultation</span>
                        <FaChevronRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                    </button>

                    {/* Secondary CTA - Contact Our Team */}
                    <button className="group inline-flex items-center gap-3 px-8 py-4 border-2 border-white/40 text-white rounded-full hover:bg-white/10 hover:border-white/60 transition-all duration-300 w-full sm:w-auto justify-center">
                        <LuMail className="text-xl" />
                        <span className="font-medium">Contact Our Team</span>
                        <FaChevronRight className="text-base transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Additional Info */}
                <div className="text-center mt-8">
                    <p className="text-white/70 text-sm">
                        Free consultation • No obligations • Expert guidance
                    </p>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12 pt-8 border-t border-white/20">
                    <div className="flex items-center gap-2 text-white/80">
                        <BsTelephone className="text-base" />
                        <span className="text-sm">+1 (555) 123-4567</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80">
                        <LuMail className="text-base" />
                        <span className="text-sm">hello@impactmakersevents.com</span>
                    </div>

                    <div className="flex items-center gap-2 text-white/80">
                        <BiTimeFive className="text-base" />
                        <span className="text-sm">Available 24/7</span>
                    </div>
                </div>
            </div>
        </section>
    );
}