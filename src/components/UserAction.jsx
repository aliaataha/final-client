import React from 'react'

export default function UserAction({icon,topText,bottomText,onMouseEnter, onMouseLeave, children}) {
  return (
      <div
          className=" flex gap-2 items-end relative cursor-pointer"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
         <div className="icon">{icon}</div>
         <div className="content  flex-col gap-.5 hidden lg:flex ">
              <span className='text-[var(--medium-gray)]'>{topText}</span>
              <span className='font-semibold'>{bottomText}</span>
         </div>
             {children }
         </div>
  )
}
