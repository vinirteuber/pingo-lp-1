'use client'

import Image from "next/image";

export default function LastJobsSection() {
    const images = [
        { src: '/assets/CampaingsImages/image1.jpg', title: 'Ciena', subtitle: 'Maximum Speed Research' },
        { src: '/assets/CampaingsImages/image2.jpg', title: 'Leprê x Down', subtitle: 'Jacquard Drawings' },
        { src: '/assets/CampaingsImages/image3.jpg', title: 'Comp', subtitle: 'Roots Collection' },
        { src: '/assets/CampaingsImages/image4.jpg', title: 'Limetre', subtitle: 'The Mission' },
        { src: '/assets/CampaingsImages/image5.jpg', title: 'Minacci x Takeoff', subtitle: '' },
        { src: '/assets/CampaingsImages/image6.jpg', title: 'Ta Na Base', subtitle: 'Build to Last in a Broken World' },
    ];

    const getBorderRadiusClass = (idx: number): string => {

        const classes = [];

        if (idx === 0) {
            classes.push('rounded-tl-4xl');
            classes.push('rounded-tr-4xl md:rounded-tr-none');
        }

        if (idx === 2) {
            classes.push('md:rounded-tr-4xl');
        }

        if (idx === 3) {
            classes.push('md:rounded-bl-4xl');
        }

        if (idx === 5) {
            classes.push('rounded-bl-4xl md:rounded-bl-none');
            classes.push('rounded-br-4xl');
        }

        return classes.join(' ');
    };

    return (
        <>
            <div className="flex justify-between items-end">
                <h1 className="py-15 px-[8rem] font-semibold text-4xl text-[#3DE6FF]">Ultimos trabalhos</h1>
            </div>
            <section className="max-w-8xl relative overflow-visible">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
                    {images.map((image, idx) => (
                        <figure
                            key={idx}
                            className={`relative aspect-square overflow-hidden group cursor-pointer ${getBorderRadiusClass(idx)}`}
                        >
                            <Image
                                src={image.src}
                                alt={image.title}
                                fill
                                priority={idx < 3}
                                sizes="(min-width: 1024px) 33vw, 100vw"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-[#003772]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                                <span className="text-[#FAFFE3] text-2xl font-bold text-center px-4">
                                    {image.title}
                                </span>
                                <span className="text-[#FAFFE3] text-lg font-normal text-center px-4 ">{image.subtitle}</span>
                            </div>
                        </figure>
                    ))}
                    <div className="absolute top-0 right-20 translate-x-1/8 -translate-y-[65%] z-10 animate-spin-slow">
                        <Image
                            src="/assets/pingoHeroImage.svg"
                            alt="Pingo Seal"
                            width={300}
                            height={300}
                        />
                    </div>
                </div>
            </section>
        </>
    );
}