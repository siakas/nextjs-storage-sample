import type { RecoilValue } from 'recoil'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

export function useClientSideRecoilValue<T>(
  recoilValue: RecoilValue<T>,
  defaultValue: T
): T {
  const [isClient, setIsClient] = useState(false)
  const value = useRecoilValue(recoilValue)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return isClient ? value : defaultValue
}
