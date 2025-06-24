import React from 'react'
import { bannerImages } from '../data/data'
import Slider from './Slider'
import Button from './Button'

export default function HeroBanner() {
    // const imageSlides = bannerImages.map((ele,index) => (
    //     <div key={index} className='w-[25rem] h-[28rem] bg-white  animate-morph relative ' >
    //     <img src={ele}  alt="" className='object-contain absolute top-[-2rem] left-0 scale-130 h-[100%] w-[100%]'/>
    //    </div>
    // ))
  return (
      <div className='banner  bg-gray-100 h-[100vh]  grid grid-cols-12 lg:gap-x-[.5rem]  gap-y-[1rem] content-center  '>
          <div className="banner-content lg:col-span-6 col-span-12  lg:-order-1 flex flex-col  gap-y-[1rem]  items-center justify-center">
              <span className='text-[var(--medium-gray)] lg:text-[1.4rem] md:text-[1.2rem] text-[1rem]'>flat 30% off</span>
               <h2 className='lg:text-[2.5rem] md:text-[1.8rem] text-[1.5rem] font-bold  grid grid-cols-12'><span className='col-span-12'>explore <span className='organic text-[var(--main-color)] relative mr-6'>organic</span></span><span className='col-span-12'> & fresh vegetables</span></h2>
                <Button/>
          </div>
        {/* <Slider items={imageSlides} /> */}
          <div className="banner-img lg:col-span-6 col-span-12 -order-1  flex items-center justify-center">
                 <div className='lg:w-[25rem] lg:h-[28rem] md:w-[17rem] md:h-[19rem] h-[16rem] w-[18rem] bg-white  animate-morph relative ' >
                  <img src={bannerImages[0]}  alt="" className='object-contain absolute top-[-2rem] left-0 scale-130 h-[100%] w-[100%]'/>
           </div>
  
          </div> 
      </div>
  )
}
