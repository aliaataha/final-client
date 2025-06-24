import React from 'react'

export default function ({heading,highlight,description ,textAlgin}) {
  return (
    <div className={`text-${textAlgin} mb-6`}>
      <h2 className='text-[2rem] font-medium opacity-80 mb-2'>{heading} <span className='text-[var(--main-color)]'>{highlight}</span> </h2>
          <p className=' text-[var(--medium-gray)]'>{description}</p>
      </div>
  )
}
