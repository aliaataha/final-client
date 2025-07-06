import React from 'react'
import Button from './Button'
import { useTheme } from '../store/useTheme';
export default function SecondaryBanner() {
  const { theme } = useTheme()
  return (
    <div className=" SecondaryBanner bg-[url('/assets/SecondaryBannerImg.jpeg')] bg-cover bg-center h-[100vh] flex justify-end items-end my-[3rem]">
           <div className={`curved-corner-bottomleft-left ${theme === "light" ? 'light' : 'dark'}`}></div>
           <div className={`content ${theme === "light" ? 'bg-white' : 'bg-[var(--body-color)]'} px-12 pt-9 rounded-tl-4xl rounded-tr-4xl relative`}>
              <span className='text-[var(--main-color)] font-semibold text-[1.2rem]'>25% off</span>
             <h2 className='lg:text-[2.5rem] md:text-[1.8rem] text-[1.2rem] grid grid-cols-12 font-bold tracking-wider leading-tight mb-[1rem]'><span className='col-span-12'>Fresh & Organic</span> <span className='col-span-12'>vegetables</span></h2>
             <Button />
          </div>
      <div className={`curved-corner-bottomleft-right ${theme === "light" ? 'light' : 'dark'}`}></div>
      </div>
  )
}
