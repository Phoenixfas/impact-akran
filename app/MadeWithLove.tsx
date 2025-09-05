import Image from "next/image";


interface GalleryImage {
    id: number;
    src: string;
    alt: string;
}

const galleryImages: GalleryImage[] = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1712971404080-87271ce2e473?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHZlbnVlfGVufDF8fHx8MTc1NTc4OTA0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Corporate event venue setup"
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1700062069869-0c59ff21fa3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBzZXR1cHxlbnwxfHx8fDE3NTU4NTU1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Wedding ceremony decoration"
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1557804500-7a58fbcd4d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25mZXJlbmNlJTIwcm9vbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzU1NzgyOTg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Conference room meeting setup"
    },
    {
        id: 4,
        src: "https://images.unsplash.com/photo-1651482123980-fa4625df46cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNlbGVicmF0aW9uJTIwbGlnaHRzfGVufDF8fHx8MTc1NTg1NTUyOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Party celebration with lights"
    },
    {
        id: 5,
        src: "https://images.unsplash.com/photo-1653821355226-6def361cc7ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwZGVjb3JhdGlvbnxlbnwxfHx8fDE3NTU4NTU1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Event planning and decoration"
    },
    {
        id: 6,
        src: "https://images.unsplash.com/photo-1573463908761-567b9356c64f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvdXRkb29yJTIwZmVzdGl2YWwlMjBzdGFnZXxlbnwxfHx8fDE3NTU4NTU1Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
        alt: "Outdoor festival stage"
    }
];

export default function MadeWithLove() {
    return (
        <section className="px-6 mb-32">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-5">
                        <div className="w-8 h-1 bg-secondary rounded-full"></div>
                        <span className="text-8xl k2d-extrabold text-foreground tracking-wider uppercase text-center">Made with Love</span>
                        <div className="w-8 h-1 bg-secondary rounded-full"></div>
                    </div>

                    <h2 className="mb-5 text-3xl font-light text-slate-400">
                        Every Little Detail Counts
                    </h2>

                    <p className="max-w-2xl mx-auto text-slate-600 leading-relaxed">
                        Every event is treated as a work of art at Impact Makers Events. Our enthusiasm for quality and your pleasure fuels our production, logistics, and design processes.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.slice(0, 5).map((image, index) => (
                        <div key={image.id} className={`group relative overflow-hidden rounded-2xl bg-foreground shadow-lg hover:shadow-xl transition-all duration-300 ${index === 0 ? 'md:col-span-2 md:row-span-2 ' : 'h-[250px]'} ${index === 3 ? 'lg:col-span-2' : ''}`} >
                            <div className="relative w-full h-full overflow-hidden">
                                <Image src={image.src} alt={image.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" width={1000} height={850} />

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                {/* Content overlay */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <p className="text-sm font-medium">{image.alt}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                {/* <div className="text-center mt-16">
                    <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 cursor-pointer group">
                        <span>View All Our Work</span>
                        <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </div>
                </div> */}
            </div>
        </section>
    );
}