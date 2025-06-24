import React from 'react'
import { teamWork } from '../data/data'
import TestimonialCard from './TestimonialCard'
import Slider from './Slider'

export default function TestimonialsSection() {
    const testimonialsCards = teamWork.map((ele,index) => (
        <TestimonialCard teamWorkData={ele} key={index}/>
    ))
    console.log(testimonialsCards)
    return (
<div className=' relative py-[var(--l-py)]'>
      <div className='h-[60vh] bg-white mx-[var(--l-px)] absolute top-0 left-0 w-[calc(100%-2*var(--l-px))] hidden lg:block '>
          <img src="/assets/img-1.png" alt=""  className=' rounded-2xl absolute top-0 left-0 h-[65px] w-[60px] -rotate-6 blur-[1px] '/>
          <img src="/assets/img-2.png" alt=""  className='rounded-2xl absolute top-14 right-10 h-[65px] w-[60px] -rotate-30 '/>
          <img src="/assets/img-3.png" alt="" className=' rounded-2xl absolute bottom-30 right-10 h-[65px] w-[60px] rotate-6 blur-[1.5px] ' />
          <img src="/assets/img-4.png" alt=""  className='rounded-2xl absolute bottom-20 left-10 h-[65px] w-[60px] rotate-12 '/>
          <img src="/assets/img-5.png" alt="" className='rounded-2xl absolute top-20 right-60 h-[65px] w-[60px] rotate-6 blur-[2px]'/>
          <img src="/assets/img-6.png" alt="" className='rounded-2xl absolute top-0 right-130 h-[65px] w-[60px] rotate-12 '/>
          <h3 className='text-[2rem] text-white text-shadow-[2px_2px_5px_#777] -rotate-90 absolute top-25 left-5'>testimonials</h3>
        </div>
       
          <Slider items={testimonialsCards} slidesPerViewDestop={1} slidesPerViewTablet={1} slidesPerViewMobile={1}/>          
       
</div>            
  )
}
