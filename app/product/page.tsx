'use client';

import NavBar from '@/components/NavBar'
import Image from 'next/image'
import { useState } from 'react';
import { IoSearchOutline } from 'react-icons/io5';


type productObj = {
    image: string,
    title: string,
    price: number,
    category: string,
}


export default function Product() {

    const products: productObj[] = [
        { image: "/HeroImageMobile-Slide1.png", title: "Lorem Ipsum", price: 400000, category: "man" },
        { image: "/HeroImageMobile-Slide1.png", title: "tes Ipsum", price: 400000, category: "man" },
        { image: "/HeroImageMobile-Slide1.png", title: "Lorem Ipsum", price: 400000, category: "woman" },
        { image: "/HeroImageMobile-Slide1.png", title: "Lorem wow", price: 400000, category: "woman" },
        { image: "/HeroImageMobile-Slide1.png", title: "Lorem Ipsum", price: 400000, category: "limited" },
        { image: "/HeroImageMobile-Slide1.png", title: "Lorem Ipsum", price: 2000, category: "limited" },
    ]

    const [searchInput, setSearchInput] = useState("")
    const [search, setSearch] = useState("")
    const [selectedCategories, setSelectedCategories] = useState<string[]>([])
    const [minPrice, setMinPrice] = useState("")
    const [maxPrice, setMaxPrice] = useState("")

    const handleCategoryChange = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        )
    }

    const filteredProducts = products.filter((product) => {

        const matchSearch =
            product.title.toLowerCase().includes(search.toLowerCase())

        const matchCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(product.category)
            
        const matchMin =
            minPrice === "" || product.price >= Number(minPrice)

        const matchMax =
            maxPrice === "" || product.price <= Number(maxPrice)

        return matchSearch && matchCategory && matchMin && matchMax
    })

    const categories = [...new Set(products.map(p => p.category))]

    const handleSearch = () => {
        setSearch(searchInput)
    }

    

    return (
        <>
            <NavBar />
            <main className='font-libre'>
                <div className='h-[150px] sm:h-[32.5vw] portrait:lg:h-[32.5vw] lg:h-[350px] relative flex items-center justify-center pt-[12.5vw] sm:pt-[10vw] portrait:lg:pt-[10vw] lg:pt-[3.5vw]'>
                    <Image fill src={'/tenunImage.png'} alt='tenun' className='object-cover object-bottom opacity-90' />
                    <h1 className='relative text-white z-20 text-[7vw] sm:text-[6vw] portrait:lg:text-[6vw] lg:text-[3.5vw] font-bold'>Our Products</h1>
                </div>
                <div className='min-h-[500px] grid grid-cols-5 lg:grid-cols-4 gap-2 lg:gap-4 py-5 lg:px-2 px-1'>
                    <div className='col-span-2 lg:col-span-1 sticky top-18 lg:top-24 h-fit px-1 sm:px-2 portrait:lg:px-1 lg:px-2 flex flex-col gap-4'>
                        <div className='relative'>
                            <input
                                type="text"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                                placeholder="Search"
                                className="w-full border p-1 px-2 sm:p-1.5 sm:px-2.5 lg:p-2 lg:px-3 placeholder:font-medium placeholder:text-[3vw] sm:placeholder:text-[2.5vw] portrait:lg:placeholder:text-[1.5vw] lg:placeholder:text-[1.15vw]  "
                            />
                            <button onClick={handleSearch} className='absolute top-1/2 right-3 cursor-pointer -translate-y-1/2 text-[3vw] sm:text-[2.5vw] portrait:lg:text-[1.5vw] lg:text-[1.15vw]'>
                                <IoSearchOutline />
                            </button>

                        </div>

                        <div>
                            <p className="font-medium mb-1 text-[3.5vw] sm:text-[2.5vw] portrait:lg:text-[2.2vw] lg:text-[1.15vw]">Category</p>
                            <div className="border-t pt-2 space-y-1">
                                {categories.map((category) => (
                                    <label key={category} className="flex items-center gap-1 lg:gap-2">
                                        <input
                                            type="checkbox"
                                            checked={selectedCategories.includes(category)}
                                            onChange={() => handleCategoryChange(category)}
                                            className='w-3.5 h-3.5 lg:w-5 lg:h-5 border accent-black mt-1"'
                                        />
                                        <span className='text-[3vw] sm:text-[2.25vw] portrait:lg:text-[1.85vw] lg:text-[1.05vw]'>{category.charAt(0).toUpperCase() + category.slice(1)}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        <div className=''>
                            <label className='font-medium mb-1 text-[3.5vw] sm:text-[2.5vw] portrait:lg:text-[2.2vw] lg:text-[1.15vw]'>Price Range</label>
                            <div className='flex flex-col gap-2 border-t pt-3'>
                                <div className='grid portrait:lg:grid-cols-1 lg:grid-cols-7 items-center gap-1 lg:gap-2'>
                                    <div className="flex items-center lg:col-span-3 border w-full overflow-hidden">
                                        <span className="px-2 text-[2.95vw] sm:text-[2.45vw] portrait:lg:text-[1.85vw] lg:text-[1vw]">
                                            IDR
                                        </span>
                                        <input
                                            type="number"
                                            min={0}
                                            value={minPrice}
                                            placeholder='Min Price'
                                            onChange={(e) => setMinPrice(e.target.value)}
                                            className="w-full p-1 sm:p-2 lg:p-2 focus:outline-none text-end placeholder:text-[3.25vw] sm:placeholder:text-[2.65vw] placeholder:portrait:lg:text-[1.75vw] placeholder:lg:text-[1vw]"
                                        />
                                    </div>
                                    <p className='col-span-1 text-center text-[3vw] sm:text-[2.75vw] portrait:lg:text-[2vw] lg:text-[1.2vw] '>to</p>
                                    <div className="flex items-center lg:col-span-3 border w-full overflow-hidden">
                                        <span className="px-2 text-[2.95vw] sm:text-[2.45vw] portrait:lg:text-[1.85vw] lg:text-[1vw]">
                                            IDR
                                        </span>
                                        <input
                                            type="number"
                                            min={0}
                                            value={maxPrice}
                                            placeholder='Max Price'
                                            onChange={(e) => setMaxPrice(e.target.value)}
                                            className="w-full p-1 sm:p-2 lg:p-2 focus:outline-none text-end placeholder:text-[3.25vw] sm:placeholder:text-[2.65vw] placeholder:portrait:lg:text-[1.75vw] placeholder:lg:text-[1vw]"
                                        />
                                    </div>
                                </div>
                                </div>
                              
                        </div>

                    </div>
                    <div className='col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-4'>
                        {filteredProducts.length === 0 ? (
                            <div className="col-span-full flex justify-center items-center py-20">
                                <p className="text-gray-500 text-lg font-medium">
                                    No products found
                                </p>
                            </div>
                        ) : filteredProducts.map((product, index) => (
                            <div key={index} className='flex flex-col w-full '>
                                <div className='relative w-full aspect-3/4 '>
                                    <Image src={product.image} alt={product.title} fill className='object-cover ' />
                                </div>
                                <h1 className='text-[3.5vw] lg:text-[1.5vw]'>{product.title}</h1>
                                <p className='text-[3vw] lg:text-[1vw]'>IDR. {product.price.toLocaleString("id-ID")}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    )
}
