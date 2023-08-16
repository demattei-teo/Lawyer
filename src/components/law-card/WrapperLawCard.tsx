'use client'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import clsx from 'clsx'

interface Props {
  children: React.ReactNode
}

function WrapperLawCard({ children }: Props) {
  const [targetRef, isVisible] = useIntersectionObserver(0.5)
  const classes = {
    wrapper: clsx(
      'grid gap-6 p-8 py-32 opacity-0 md:grid-cols-3 lg:gap-10 lg:px-24',
      isVisible && 'animate-fade-up opacity-100'
    )
  }
  return (
    <ul ref={targetRef} className={classes.wrapper}>
      {children}
    </ul>
  )
}

export default WrapperLawCard
