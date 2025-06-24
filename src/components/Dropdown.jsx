import React from 'react'

export default function Dropdown({ items ,show,selectedState}) {
    
    return (
        <div className={`dropdown max-h-[150px] min-w-[150px] absolute top-full left-0 text-[var(--medium-gray)] pt-2   ${show?" opacity-100  visible":" opacity-0 invisible "}  `} >
          <ul className='flex flex-col gap-2 flex-wrap border bg-white border-gray-200 shadow-2xl shadow-gray-200 rounded-xl  px-8 py-3 '> 
              {items.map((item, index) => (
                  <li key={index} className='hover:text-[var(--main-color)] cursor-pointer' onClick={()=>selectedState(item)}> {item}</li>
              ))}
          </ul>
      </div>
  )
}
