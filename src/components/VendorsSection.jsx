import React, { useState } from 'react'
import { vendorsData } from '../data/data'
import VendorCard from './VendorCard'
import SectionHeader from './SectionHeader'
export default function VendorsSection() {
 const [active,setActive]=useState(0)
    return (
 <div>
<SectionHeader heading={'Top'} highlight={'vendors'} description={'Discover Our Trusted Partners: Excllence & Reliability in Every choice'} textAlgin={'center'} />   
<div className='vendors px-[var(--md-px)] grid grid-cols-12 gap-[1.5rem] py-[var(--l-py)]'>
    <div className="img lg:col-span-5 col-span-12 h-[75vh] rounded-2xl rounded-br-none overflow-hidden relative">
                <img src={vendorsData[active].img} alt="" className='w-full h-full object-cover object-top' />  
                <div className='bg-white absolute bottom-0 right-0 w-[30%] p-6 pb-0 rounded-tl-4xl'>
                    <img src={vendorsData[active].icon} alt="" className='w-full h-full object-contain' />
                </div>  

     </div>     
      <div className='vendors lg:col-span-7 col-span-12'>
           {
       vendorsData.map((ele, index) => (
           <VendorCard key={index} vendorData={ele} index={index}  className={index === active ? 'active' : 'normal'}  setActive={setActive} />
      ))
      }
    </div>
            </div>
</div>            
  )
}
