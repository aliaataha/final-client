import React from 'react'

export default function TestimonialCard({teamWorkData}) {
  return (
      <div className='grid grid-cols-12 lg:w-[60%] m-auto md:w-[80%] w-[90%] items-end gap-[1.2rem]'>
          <div className="img lg:col-span-4 md:col-span-3 lg:h-[40vh] md:h-[30vh] h-[10vh] col-span-12 w-[4rem] lg:w-fll md:w-full rounded-2xl overflow-hidden">
                <img src={teamWorkData.img} alt="" className='w-full h-full object-cover' />
          </div>
          <div className="content lg:col-span-8 md:col-span-9 col-span-12">
        <h6 className='text-[1.4rem] font-medium opacity-88 mb-1'>{teamWorkData.name}</h6>
        <span className='text-[var(--medium-gray)]'>{teamWorkData.position}</span>
        <p className='border border-gray-200 p-4 bg-white rounded-4xl text-[var(--medium-gray)] mt-3'>{teamWorkData.description}</p>
          </div>
     </div>
  )
}
