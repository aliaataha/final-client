import { create } from 'zustand'
export const useMainColor = create((set, get) => ({
    mainColor: "#6c7fd8",
    setColor: (color) => {
      set((state) => ({ mainColor: color }))
      document.documentElement.style.setProperty('--main-color', color)
    }
  }))