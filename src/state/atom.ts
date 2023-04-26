import type { Movie } from '@/types/movies'
import { atom } from 'recoil'

export const mylistState = atom({
  key: 'mylistState',
  default: [] as Movie[],
})
