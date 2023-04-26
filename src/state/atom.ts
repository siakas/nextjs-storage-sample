import type { Movie } from '@/types/movies'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist({
  key: 'mylist',
  storage: typeof window === 'undefined' ? undefined : localStorage,
})

export const mylistState = atom({
  key: 'mylistState',
  default: [] as Movie[],
  effects_UNSTABLE: [persistAtom],
})

export const sortState = atom({
  key: 'sortState',
  default: 'default',
})
