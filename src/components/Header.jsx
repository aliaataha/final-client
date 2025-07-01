import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { useCategory } from '../hooks/useCategories'
import { CiSearch } from "react-icons/ci";
import { LuUser } from 'react-icons/lu';
import Dropdown from './Dropdown';
import { RiMenu3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserAction from './UserAction';
import { user_actions } from '../data/data';
import { IoClose } from "react-icons/io5";
import NavLinks from './NavLinks';

export default function Header() {
    const items = ["login", "register", "checkout"]
    const [show, setShow] = useState(false)
    const [showCategories, setShowCategories] = useState(false)
    const [activeBtn, setActiveBtn] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [selectedCategory,setSelectedCategory]=useState(null)
    const { data, isLoading, error } = useCategory()
    const categories = data?.map(category => category.name) || []
    // if (isLoading) return <p>Loading...</p>
    // if (error) return <p>Error: {error.message}</p>
    
  return (
  <>
    <div>
          <header className='grid'>
            <div className="top-header col-span-12 grid grid-cols-12  lg:gap-x-[1.3rem]  md:gap-x-[1.3rem] items-center lg:border-b border-gray-200 py-5  lg:px-[6.25rem] md:px-[3.125rem] gap-y-[1.2rem] px-[7.5rem]">
               <div className="logo lg:col-span-2 md:col-span-2 col-span-12">
                   <Logo />
               </div>
               <div className="search border border-gray-200 text-[var(--medium-gray)] rounded-lg lg:col-span-5 md:col-span-6  col-span-12">
                  <form action="" className='grid grid-cols-12'>
                          <div className="select relative lg:col-span-4 hidden lg:block "  onMouseEnter={()=>setShowCategories(true)} onMouseLeave={()=>setShowCategories(false)}>
                              <div className="header lg:flex justify-between cursor-pointer items-center border-r border-gray-200 lg:p-3 p-2 " >
                  <div className="select-item">{selectedCategory ?? categories[0]}</div>
                                  <div className="icon"><MdKeyboardArrowDown /></div>
                              </div>
                              <Dropdown items={categories}  show={showCategories} selectedState={setSelectedCategory}/>
                          </div>     
                <input type="text" name="" id="" placeholder='search products....' className='lg:col-span-7 col-span-11 placeholder-[var(--medium-gray)] outline-0 font-thin lg:p-3 p-2'
                  onChange={((e) => {
                    if (e.target.value.trim() != "")
                    {
                      setActiveBtn(true)
                    }
                    else
                    {
                      setActiveBtn(false)
                      }
                   })} />
                         
                         <button   disabled={!activeBtn} type='button' className={`${activeBtn?'text-gray-700 scale-110 cursor-pointer transition ':'text-gray-100 scale-100 cursor-not-allowed'}  lg:col-span-1 col-span-1`} onClick={()=>setActiveBtn(false)}><CiSearch  className=' h-[1.5rem] w-[1.5rem]'/></button>
                 </form>
               </div>
               <div className="user-action flex lg:gap-[.5rem] gap-[1rem] justify-center  lg:col-span-5 md:col-span-4 col-span-12  ">
                      <UserAction
                          icon={<LuUser className="text-[var(--main-color)] w-[1.7rem] h-[1.7rem] stroke-[1.2]" />}
                          topText="account"
                          bottomText="login"
                          onMouseEnter={() => setShow(true)}
                          onMouseLeave={() => setShow(false)}
                      >
                        {<Dropdown items={items} show={show} />}
                      </UserAction>   
                      {user_actions.map((ele, index) => (
                        <UserAction
                            key={index}
                            icon={ele.icon}
                            topText={ele.topText}
                            bottomText={ele.bottomText}
                        />
                    ))
                      }
                     <div className="menu-bar lg:hidden cursor-pointer ">
                         <RiMenu3Line className="text-[var(--main-color)] w-[1.7rem] h-[1.7rem] stroke-[.1]" onClick={()=>setIsMenuOpen(true)} />
                     </div>
            
               </div>
            </div>
            <nav className=' px-[100px] py-5 col-span-12 lg:block hidden'>
                      <NavLinks class_name='flex gap-7 text-xl'/>
            </nav> 
         
      </header>   
    </div>
      <div className={`${isMenuOpen?'translate-x-0' : '-translate-x-full'} transform transition-transform duration-300 ease-in-out mobile-menu absolute top-0 left-0 w-[100%] h-[100vh] bg-[rgba(0,0,0,.9)] z-10`}>
            <div className="content h-[100%] w-[50%] bg-white p-5">
                <div className="content-header flex justify-between items-center  ">
                     <span className='text-2xl font-bold text-[var(--dark-gray)]'>my menu</span>
                    <span> <IoClose className='text-red-500 w-[1.5rem] h-[1.5rem] '  onClick={()=>setIsMenuOpen(false)}/></span>
                </div>   
               <div className="links">
                         <NavLinks class_name='flex flex-col gap-y-[1rem] mt-[2rem] text-[var(--dark-gray)] text-xl'/>
              </div>
             </div>
      </div>
 </>    
  )
}


