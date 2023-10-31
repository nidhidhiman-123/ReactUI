import { create } from 'zustand'

export const useStore = create((set) => ({
    count: 0,
    increase: (val) => set((state) => ({ count:val })),
  }))