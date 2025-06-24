import React from 'react'

export default function CategoryCard({ category,bg_color }) {
  
  return (
      <div className='rounded-xl p-3 flex flex-col items-center 'style={{ backgroundColor: bg_color }}>
          <div className="image mb-3">
              <img src= {`http://localhost:1337${category.img.url}`}  alt=""   className="w-[50px] h-[50px] object-contain"/>
          </div>
          <div className="content">
               <h3 className='text-[1.2rem] font-medium'>{category.name}</h3>
               <span className='text-[.9rem] text-[var(--medium-gray)] opacity-50'>items</span>
          </div>
      </div>
  )
}
