import React from 'react'

export default function ProductCard({img}) {
  return (
    <div className='border border-gray-200 rounded-2xl col-span-3 '>
      <div className="img h-[30vh] border-b border-gray-200">
           <img src={img} alt="" />
      </div>
      <div className="content p-[1rem]">
      </div>
    </div>
  )
}
