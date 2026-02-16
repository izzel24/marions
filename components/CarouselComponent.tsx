'use client'

import Image from "next/image"
import { useRef } from "react"
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io"

type newArrivals = {
    image: string,
    title: string,
}

export default function CarouselComponent() {
    const carouselRef = useRef<HTMLDivElement>(null)
    const scroll = (direction: "left" | "right") => {
        if (!carouselRef.current) return

        const firstItem = carouselRef.current.querySelector(
            ".carousel-item"
        ) as HTMLElement

        if (!firstItem) return

        const scrollAmount = firstItem.offsetWidth

        carouselRef.current.scrollBy({
            left: direction === "left" ? -scrollAmount : scrollAmount,
            behavior: "smooth",
        })
    }

    const items: newArrivals[] = [
        {
            image: "/HeroImageMobile-Slide1.png",
            title: "Tenun Modern",
        },
        {
            image: "/HeroImageMobile-Slide2.png",
            title: "Elegant Collection",
        },
        {
            image: "/HeroImageMobile-Slide3.png",
            title: "Limited Edition",
        },
        {
            image: "/HeroImageMobile-Slide1.png",
            title: "Limited Edition",
        },
        {
            image: "/HeroImageMobile-Slide2.png",
            title: "Limited Edition",
        },
    ]

    return (
        <div className="relative w-full">
            <div
                ref={carouselRef}
                className="carousel max-h-[650px] gap-1 sm:gap-2 lg:gap-4 w-full overflow-x-auto scroll-smooth snap-x snap-mandatory"
            >
                {items.map((item, index) => (
                    <div key={index} className="carousel-item w-1/2 md:w-1/3 lg:w-1/3 snap-start">
                        <div className="w-full overflow-hidden">
                            <div className="relative w-full lg:h-[500px] sm:h-[300px] h-[250px]">
                                <Image
                                    src={item.image}
                                    className="object-cover"
                                    alt={item.title}
                                    fill
                                />
                            </div>
                            
                            <div className="flex flex-col">
                                <h2 className="font-semibold text-[3.5vw] sm:text-[3vw] portrait:lg:text-[2.5vw] lg:text-[1.75vw]">
                                    {item.title}
                                </h2>
                                {/* <p className="text-[3vw] sm:text-[2.5vw] portrait:lg:text-[2vw] lg:text-[1.25vw]">
                                    IDR. {item.price}
                                </p> */}
                            </div>

                        </div>
                    </div>
                ))}
            </div>

            {/* Left Button */}
            <button
                onClick={() => scroll("left")}
                className="absolute left-0 cursor-pointer text-[3vw] sm:text-[2.75vw] lg:text-[1.5vw] -translate-x-1/2 top-1/2 -translate-y-full bg-white rounded-full p-2.5 lg:p-4 shadow-[0px_0px_5px_1px_rgba(0,0,0,25%)]"
            >
                <IoMdArrowBack />
            </button>

            {/* Right Button */}
            <button
                onClick={() => scroll("right")}
                className="absolute right-0 cursor-pointer text-[3vw] sm:text-[2.75vw] lg:text-[1.5vw] translate-x-1/2 top-1/2 -translate-y-full bg-white rounded-full p-2.5 lg:p-4 shadow-[0px_0px_8px_1px_rgba(0,0,0,25%)]"
            >
                <IoMdArrowForward />
            </button>
        </div>
    )
}
