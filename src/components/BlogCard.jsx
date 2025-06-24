import React from 'react'

export default function BlogCard({blogData}) {
  return (
      <div className='blog-card rounded-[30px] overflow-hidden relative lg:w-[calc((100%-3rem)/4)] md:w-[calc((100%-2rem)/3)] w-[calc((100%-1rem)/2)]'>
          <img src={blogData.img} alt=""  className=' w-full h-full object-cover transform scale-110 '/>
          <div className="content absolute bottom-1 left-0 bg-[#ffffffe6] rounded-3xl lg:py-3 lg:px-4 py-1 px-2 w-[96%] transform translate-x-[2%] ">
              <span className='lg:text-[.9rem] md:text-[.9rem] text-[.7rem] text-[var(--medium-gray)] '>{blogData.date}</span>
              <h5 className='lg:text-[1rem] md:text-[1rem] text-[.8rem] font-medium opacity-80 leading-tight mt-1'>{blogData.title}</h5>
          </div>
      </div>
  )
}
