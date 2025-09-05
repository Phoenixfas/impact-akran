import Image from "next/image";
import { FaPlay, FaChevronRight } from 'react-icons/fa';

export default function Showreel() {
    return (
        <section className="px-6 mb-32">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-5">
                        <div className="w-8 h-1 bg-secondary rounded-full"></div>
                        <span className="text-8xl k2d-extrabold text-foreground tracking-wider uppercase text-center">Showreel</span>
                        <div className="w-8 h-1 bg-secondary rounded-full"></div>
                    </div>

                    <h2 className="mb-5 text-3xl font-light text-slate-400">
                        Witness the Results of Our Work
                    </h2>

                    <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
                        View our carefully chosen event highlights to see the impact of immaculate execution.
                    </p>
                </div>

                {/* Video Section */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative group overflow-hidden rounded-2xl bg-slate-900 shadow-2xl hover:shadow-3xl transition-all duration-500">
                        {/* Video Thumbnail */}
                        <div className="relative aspect-video">
                            <Image
                                src="https://images.unsplash.com/photo-1670437064362-77a7f5a9f57f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjaW5lbWF8ZW58MXx8fHwxNzU1ODE5NjczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Event showreel preview"
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                width={1000}
                                height={850}
                            />

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>

                            {/* Play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="relative">
                                    {/* Pulsing ring */}
                                    <div className="absolute inset-0 bg-secondary opacity-10 rounded-full animate-ping scale-150"></div>
                                    <div className="absolute inset-0 bg-secondary opacity-10 rounded-full animate-pulse scale-125"></div>

                                    {/* Play button */}
                                    <div className="relative w-20 h-20 bg-secondary rounded-full flex items-center justify-center group-hover:scale-105 duration-300 shadow-2xl cursor-pointer">
                                        <FaPlay className="text-white text-3xl ml-1" />
                                    </div>
                                </div>
                            </div>

                            {/* Video duration badge */}
                            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                                2:45
                            </div>
                        </div>
                    </div>

                    {/* Video Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <div className="text-center">
                            <div className="text-3xl font-bold text-secondary mb-2">500+</div>
                            <p className="text-slate-600">Events Captured</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-secondary mb-2">50M+</div>
                            <p className="text-slate-600">Views Generated</p>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold text-secondary mb-2">15</div>
                            <p className="text-slate-600">Awards Won</p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-12">
                        <button className="inline-flex items-center gap-3 px-10 py-5 bg-[linear-gradient(45deg,_var(--primary),_var(--secondary),_var(--tertiary))] text-white rounded-full duration-300 cursor-pointer group hover:shadow-[0px_0px_5px_var(--foreground)] hover:scale-105">
                            <FaPlay className="text-white text-xs" />
                            <span className="text-lg">Watch the Showreel</span>
                            <FaChevronRight className="text-white text-xs ml-1 duration-300 group-hover:translate-x-1" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}