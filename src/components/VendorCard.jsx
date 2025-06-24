import React from 'react'

export default function VendorCard({ vendorData,className,index, setActive}) {
    
  return (
      <div className={`vendor border border-gray-300 bg-gray-100 rounded-2xl px-6 py-7 mb-[1.5rem] cursor-pointer ${className}`} onClick={()=>setActive(index)}  > 
          <div className="heading flex justify-between mb-[.4rem] ">
             <h6 className='font-medium opacity-90 text-[1.2rem]'>{vendorData.name}</h6>  
             <span className='text-[var(--medium-gray)] text-[.9rem] font-medium'>sales-{vendorData.sales}</span>
           </div>
          <p className='text-[var(--medium-gray)] text-[.9rem]'>fruits({vendorData.fruits}) | vegetables({vendorData.vegetables}) | snack({vendorData.snack})</p>
         
      </div>
  )
}
