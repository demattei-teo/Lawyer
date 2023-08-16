'use client'

import { bannerPhotoURL, brownBlurDataURL } from '@/constants'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import clsx from 'clsx'
import Image from 'next/image'
import Button from '../button/Button'

function BannerSection() {
  const [targetRef, isVisible] = useIntersectionObserver(0.5)
  const classes = {
    wrapper: clsx('relative space-y-6  bg-black/30 px-8 py-40'),
    image: clsx('-z-10 object-cover object-center'),
    title: clsx(
      'text-fluid-3xl font-extrabold text-white opacity-0 sm:w-1/2',
      isVisible && 'animate-fade-right opacity-100'
    )
  }

  return (
    <section ref={targetRef} className={classes.wrapper}>
      <Image
        src={bannerPhotoURL}
        alt='Lawyer banner'
        fill
        priority
        blurDataURL={brownBlurDataURL}
        placeholder='blur'
        className={classes.image}
      />
      <h1 className={classes.title}>Your Legal Needs, Our Expertise</h1>
      <Button sizes='xl'>Get Legal Help Now</Button>
    </section>
  )
}

export default BannerSection
