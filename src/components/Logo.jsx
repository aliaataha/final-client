import React from 'react'
import { useTheme } from '../store/useTheme';
export default function Logo() {
  const { theme } = useTheme()
  return (
      <div>
          <img src={`${theme === "light" ? '/assets/logo.png' : '/assets/logo-dark.png'}`} alt="" className='object-contain' />
      </div>
  )
}
