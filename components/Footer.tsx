import React from 'react'

export default function Footer() {
  return (
    <footer className='min-h-[300px] mt-10 flex flex-col'>
      <div className='border-t border-gray-300 border-b min-h-15 mx-5 p-[2vw] lg:p-[1.2vw] flex items-center justify-between font-libre gap-2'>
        <div className='flex gap-1 lg:gap-3'>
          <img src="/logo.png" alt="logo" className='w-[8vw] portrait:lg:w-[6vw] lg:w-[2.5vw]' />
          <div className='flex flex-col justify-center h-full'>
            <h1 className='text-[4vw] sm:text-[3.5vw] portrait:lg:text-[3vw] lg:text-[1.25vw] leading-none font-medium'>Marion&apos;s Eksotik</h1>
            <h2 className='text-[3.75vw] sm:text-[3.25vw] portrait:lg:text-[2.25vw] lg:text-[1.05vw] leading-none font-medium'>Tenun</h2>
          </div>
        </div>
          <i className='lg:text-[1.15vw] portrait:lg:text-[2.5vw] text-[3.5vw]'>One Design, One Peace</i>
      </div>
      <div className='font-playFair px-5 py-3 grid lg:grid-cols-4 grid-cols-2 min-h-[200px] lg:gap-5'>
        <div className='flex flex-col gap-1 lg:gap-3 justify-center h-full col-span-2 lg:col-span-1 text-[2.5vw] portrait:lg:text-[1.5vw] lg:text-[1vw] '>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam totam quia magni aliquam expedita necessi</p>
          <p>+62 12341123123</p>
          <p>email@gmail.com</p>
        </div>
        <div className='col-span-2 lg:place-items-center h-full'>
          <div className='flex flex-col lg:pt-8 gap-2 lg:gap-4 h-full '>
            <h2 className='font-bold text-[3vw] portrait:lg:text-[2vw] lg:text-[1.25vw]'>Navigate</h2>
            <div className='flex flex-col text-[2vw] portrait:lg:text-[1.5vw] lg:gap-1.5 lg:text-[1vw]'>
              <a href='#' className='underline'>Home</a>
              <a href='#' className='underline'>Product</a>
            </div>
          </div>
        </div>
      </div>
      <div className='border-t border-gray-300 flex mx-5 py-2 items-center justify-center font-playFair text-[2.5vw] portrait:lg:text-[1.5vw] lg:text-[1vw]'>
        &copy;Copyright Marion&apos;s Eksotik Tenun.All rights reserved.2026
      </div>
    </footer>
  )
}
