import React from 'react'

export default function FeatureCard({feature}) {
  return (
      <div className='lg:col-span-3 col-span-12 md:col-span-6 border border-gray-200 p-6 text-center rounded-2xl '>
          <div className="image h-[3rem] mb-[1rem] ">
              <img src={feature.img} alt=""  className='h-[100%] w-[100%] object-contain'/>
          </div>  
          <div className="content text-center">
              <h5 className='text-[1.2rem] font-medium opacity-80 mb-[.5rem]'>{feature.title}</h5>
              <p className='text-center text-[.9rem] text-[var(--medium-gray)]'>{feature.description}</p>
         </div>
      </div>
  )
}
