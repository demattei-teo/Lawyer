'use client'
import { useEffect, useRef, useState } from 'react'

type IntersectionObserverTuple = [React.MutableRefObject<null>, boolean]
type IntersectionObserverHook = (threshold: number) => IntersectionObserverTuple

const useIntersectionObserver: IntersectionObserverHook = (threshold) => {
  const targetRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = targetRef.current
    if (element === null) return

    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        } else {
          setIsVisible(false)
        }
      })
    }
    const options = {
      threshold
    }
    const observer = new window.IntersectionObserver(callback, options)
    if (element) return observer.observe(element)
    return () => element && observer.unobserve(element)
  }, [threshold])

  return [targetRef, isVisible]
}

export default useIntersectionObserver
