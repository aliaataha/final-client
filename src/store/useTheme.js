import { create } from 'zustand'

export const useTheme = create((set) => ({
  theme: 'light',
  lightTheme: () => set({ theme: 'light' }),
  darkTheme: () => set({ theme: 'dark' })
}))