import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { color_setting } from '../data/data';
import { useMainColor } from '../store/useMainColorStore';
import { useTheme } from '../store/useTheme';



export default function Setting() {
    const [show, setShow] = useState(false)
    const [active,setActive]=useState(null)
    const { setColor } = useMainColor()
    const {theme,lightTheme,darkTheme} =useTheme()
    return (
        <>
             <div className='p-2 bg-cyan-950  fixed z-100 right-0 top-[50%] rounded-xl cursor-pointer'>
                 <IoSettingsOutline className='h-[1.8rem] w-[1.8rem] text-white'  onClick={()=>setShow(true)}/>
            </div>
            <div className={`setting fixed top-0 left-0 w-full h-[100vh] bg-[rgba(0,0,0,.6)] flex justify-end  ${show?'opacity-100 visible z-100':'opacity-0 invisible'}`} onClick={()=>setShow(false)}>
                   <div className='w-[300px] bg-white h-full  'onClick={(e) => e.stopPropagation()}>
                       <h6 className='border-b border-b-gray-200 p-4 text-[20px] font-medium opacity-80'>tools</h6>
                       <div>
                        <h6 className='text-[15px] font-medium text-[var(--dark-gray)] pt-6 pl-4'>select color</h6>
                           <div className='flex flex-wrap gap-[1rem] p-5'>
                               {
                                    color_setting.map((ele, index) => (
                                        <div className={` relative theme-color h-[35px] w-[calc((100%-4rem)/5)] rounded cursor-pointer ${index==active?'selected':''}`} style={{ backgroundColor: ele }} key={index} onClick={() => { setColor(ele); setActive(index)}}> </div>
                                       ))
                               }
                           </div>
                      </div>
                      <div>
                         <h6 className='text-[15px] font-medium text-[var(--dark-gray)] pt-6 pl-4'>dark moods</h6>
                         <div className='flex gap-[1rem] pt-4 px-3'> 
                            <div className={`img w-[calc((100%-1rem)/2) h-[100px] rounded overflow-hidden cursor-pointer relative ${theme=="light"?'selected':''}`}><img src="/assets/light-mood.png" alt="" className="object-contain" onClick={lightTheme} /></div>
                            <div className={`img w-[calc((100%-1rem)/2) h-[100px] rounded overflow-hidden cursor-pointer relative ${theme=="dark"?'selected':''}`}><img src="/assets/dark-mood.png" alt="" className="object-contain"onClick={darkTheme} /></div>
                         </div>
                      </div>
                   </div>
            </div>
       </>
      
  )
}
