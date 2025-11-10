'use client'

import Image from "next/image";

export default function StudioSection() {
    const images = Array.from({ length: 6 }, (_, i) => `/assets/CampaingsImages/image${i + 1}.jpg`);

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
        <section className="max-w-8xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                {images.map((src, idx) => (
                    <figure
                        key={idx}
                        className={`relative aspect-square overflow-hidden ${getBorderRadiusClass(idx)}`}
                    >
                        <Image
                            src={src}
                            alt={`Campanha ${idx + 1}`}
                            fill
                            priority={idx < 3}
                            sizes="(min-width: 1024px) 33vw, 100vw"
                            className="object-cover"
                        />
                    </figure>
                ))}
            </div>
        </section>
    );
}