'use client';

import CarouselComponent from "@/components/CarouselComponent";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer"
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import Link from "next/link";


type productCategories = {
  nama: string,
  image: string,
}

export default function Home() {

  const [visibleSlide, setVisibleSlide] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(orientation: portrait)")

    const handleChange = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsPortrait(e.matches);
    }

    handleChange(mediaQuery);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
    
  }, [])

  const slidesLandscape: string[] = ['/HeroImage-Slide1.png', '/HeroImage-Slide2.png'];
  const slidesPortrait: string[] = ['/HeroImageMobile-Slide1.png', '/HeroImageMobile-Slide2.png', '/HeroImageMobile-Slide3.png'];
  const categories: productCategories[] = [
    { nama: "LOREM", image: "/HeroImageMobile-Slide1.png"},
    { nama: "LOREM", image: "/HeroImageMobile-Slide2.png" },
    { nama: "LOREM", image: "/HeroImageMobile-Slide3.png" },
    { nama: "LOREM", image: "/HeroImageMobile-Slide3.png" },
    { nama: "LOREM", image: "/HeroImageMobile-Slide2.png" },
    { nama: "LOREM", image: "/HeroImageMobile-Slide1.png" },
  ]

  const slides = isPortrait ? slidesPortrait : slidesLandscape

  useEffect(() => {
    setVisibleSlide(0);
  }, [isPortrait]);

  const handleNextButton = () => {
    setVisibleSlide((prev) => (prev + 1) % slides.length);
  }
  const handlePrevButton = () => {
    setVisibleSlide((prev) =>
      prev - 1 >= 0 ? prev - 1 : slides.length - 1
    );
  }


  return (
    <>
      <NavBar />
      <main>
        <section id="hero-section" className="sm:h-screen h-[500px] flex flex-col items-center justify-center relative">
          <div className="absolute inset-0 bg-black overflow-hidden ">
            {slides.map((slide, index) => (
              <Image
                key={slide}
                src={slide}
                alt=""
                fill
                sizes="100vw"
                quality={75}
                priority={index === 0}
                className={`object-cover transition-all duration-2000 ease-[cubic-bezier(0.22,1,0.36,1)] ${index === visibleSlide ? "opacity-100 scale-100" : "opacity-0 scale-110"
                  }`}
              />
            ))}
          </div>
    
          {/* <div className="inset-0 bg-[#75757513] absolute"/> */}
          <div className="flex flex-col font-playFair relative z-10 items-center w-full sm:gap-5 gap-2">
            <div className="text-white flex flex-col items-center justify-center">
              <h1 className="text-[7.5vw] md:text-[7vw] portrait:lg:text-[7vw] lg:text-[5vw]">Marion&apos;s Eksotik Tenun</h1>
              <i className="text-[5vw] md:text-[4vw] portrait:lg:text-[4vw] lg:text-[3.5vw]">&quot;One Design One Peace&quot;</i>
            </div>
            <Link href="/product" className="px-[2.5vw] py-[1vw] lg:py-[.75vw] text-[3vw]  md:text-[2.5vw] portrait:lg:text-[2.5vw] lg:text-[1.25vw] bg-white">Explore Our Collections</Link>
          </div>
          <div className=" w-full flex justify-center absolute z-20 sm:bottom-10 bottom-2 ">
            <div className="w-full flex justify-center gap-2">
            {slides.map((_, index) => (
         
                <div key={index} className={` ${index === visibleSlide ? "bg-white/80 sm:w-4 sm:h-2 w-3 h-1.5 " : "bg-white/40 w-1.5 h-1.5 sm:w-2 sm:h-2 "} rounded-full transition-all duration-300 ease-linear cursor-pointer` } onClick={() => setVisibleSlide(index)}/>
          
            ))}
              </div>
          </div>
          <div className="flex justify-center gap-2 sm:gap-5 absolute bottom-2 sm:bottom-10 items-center right-2 sm:right-10">
            <button className="rounded-full w-[8vw] sm:w-[7vw] portrait:lg:w-[7vw] lg:w-[3vw] h-[8vw] sm:h-[7vw] portrait:lg:h-[7vw] lg:h-[3vw] text-[4vw] sm:text-[3vw] portrait:lg:text-[3vw] lg:text-[1.25vw] border border-white text-white cursor-pointer hover:bg-gray-400/20 transition-all duration-750 ease-out flex justify-center items-center" onClick={() => handlePrevButton()}><IoMdArrowBack /></button>
            <button className="rounded-full w-[8vw] sm:w-[7vw] portrait:lg:w-[7vw] lg:w-[3vw] h-[8vw] sm:h-[7vw] portrait:lg:h-[7vw] lg:h-[3vw] text-[4vw] sm:text-[3vw] portrait:lg:text-[3vw] lg:text-[1.25vw] border border-white text-white cursor-pointer hover:bg-gray-400/20 transition-all duration-750 ease-out flex justify-center items-center" onClick={() => handleNextButton()}><IoMdArrowForward /></button>
          </div>
        </section>
        <section className="min-h-[300px] font-playFair flex flex-col items-center pt-[5vw] portrait:lg:pt-[5vw] lg:pt-[2vw] gap-[1vw] px-[10vw] md:px-[9.5vw] portrait:lg:px-[9.5vw] lg:px-[8vw]">
          <h1 className="text-[6vw] portrait:lg:text-[5.5vw] lg:text-[3vw]">About Us</h1>
          <div className="flex flex-col ">
            <p className="text-justify text-[3.25vw] md:text-[2.75vw] portrait:lg:text-[2.75vw] lg:text-[1.5vw]">Marions Eksotik Tenun adalah brand fashion yang menghadirkan koleksi busana pria dan wanita dengan kombinasi Tenun Nusa Tenggara Timur (NTT). Menghadirkan karya eksklusif, di mana setiap model, penataan, dan komposisi tenun dalam satu busana dirancang berbeda dan tidak pernah kembar, meskipun menggunakan jenis kain yang serupa. <br />  <br /> Tradisi menenun telah dilakukan secara turun-temurun oleh berbagai suku di Nusa Tenggara Timur (NTT), khususnya oleh kaum perempuan. Dalam tradisi ini, seorang perempuan dianggap telah dewasa dan siap menikah apabila ia telah mampu menenun dengan baik. Proses menenun yang membutuhkan waktu lama, ketekunan, serta kesabaran menjadi tolok ukur kedewasaan seorang perempuan.
              <br />  Satu kain tenun dapat memakan waktu berbulan-bulan hingga bertahun-tahun dalam proses pembuatannya. Oleh karena itu, kain tenun NTT memiliki nilai yang tinggi. Setiap penenun juga memiliki cara dan ekspresi tersendiri dalam menciptakan motif, sehingga tidak ada kain tenun yang benar-benar sama.</p>
          </div>
        </section>
        <section className="min-h-[3  00px] font-playFair flex flex-col items-center pt-[5vw] portrait:lg:pt-[5vw] lg:pt-[2vw] gap-[1vw] px-[10vw] md:px-[9.5vw] portrait:lg:px-[9.5vw] lg:px-[8vw]">
          <h1 className="text-[6vw] portrait:lg:text-[5.5vw] lg:text-[3vw]">New Arrivals</h1>
          <CarouselComponent />
        </section>
        <section className="min-h-[300px]  font-playFair flex flex-col items-center pt-[5vw] portrait:lg:pt-[5vw] lg:pt-[2vw] gap-[1vw] px-[10vw] md:px-[9.5vw] portrait:lg:px-[9.5vw] lg:px-[8vw]">
          <h1 className="text-[6vw] portrait:lg:text-[5.5vw] lg:text-[3vw]">Our Categories</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 w-full">
            {categories.map((item, index) => (
              <div key={index} className="w-full relative">
                <div className="w-full h-[450px]">
                  <Image src={item.image} alt="it" fill className="object-cover"/>
                </div>
                  <h2 className="absolute top-1/9 translate-x-1/2 right-1/2 text-[7vw] sm:text-[4.5vw] portrait:lg:text-[4.5vw] lg:text-[3vw] text-white font-black">{item.nama}</h2>
                  <a href="#" className="absolute bottom-1/9 right-1/2 translate-x-1/2 underline text-[7vw] sm:text[4.5vw] portrait:lg:text-[4.5vw] lg:text-[3vw] text-white">View</a>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
