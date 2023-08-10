'use client'
import { brownBlurDataURL, welcomePhotoURL } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'
import Button from '../button/Button'

import useIntersectionObserver from '@/hooks/useIntersectionObserver'

function WelcomeSection() {
  const [targetRef, isVisible] = useIntersectionObserver(0.5)
  const [mobiletargetRef, mobileIsVisible] = useIntersectionObserver(0.5)

  const classes = {
    wrapper: clsx('hidden space-y-6 p-32 lg:block'),
    title: clsx(
      'text-fluid-3xl font-extrabold text-black opacity-0',
      isVisible && 'animate-fade-up opacity-100'
    ),
    info: clsx('grid grid-cols-2 items-center'),
    picture: clsx('relative h-[400px] opacity-0', isVisible && ' animate-fade-up opacity-100'),
    image: clsx('object-cover object-center'),
    detail: clsx(
      'grid -translate-x-1/4 translate-y-1/4 space-y-6 rounded-lg bg-gray-200 p-10 shadow-lg shadow-gray-200'
    ),
    paragraph: clsx('text-base text-black opacity-0', isVisible && 'animate-fade-up opacity-100')
  }

  const classesResponsive = {
    wrapper: clsx(
      'grid space-y-6 rounded-lg bg-gray-200 p-8 opacity-0  shadow-lg shadow-gray-200 lg:hidden',
      mobileIsVisible && 'animate-fade-up opacity-100'
    ),
    title: clsx(
      'text-fluid-3xl font-extrabold text-black opacity-0 ',
      mobileIsVisible && 'animate-fade-up opacity-100'
    ),
    paragraph: clsx(
      'text-base text-black opacity-0 ',
      mobileIsVisible && 'animate-fade-up opacity-100'
    )
  }

  return (
    <>
      <section ref={targetRef} className={classes.wrapper}>
        <h2 className={classes.title}>Welcome to Buchannan & Morgan</h2>
        <div className={classes.info}>
          <div className={classes.picture}>
            <Image
              className={classes.image}
              src={welcomePhotoURL}
              alt='Abogados apoyando una causa'
              blurDataURL={brownBlurDataURL}
              sizes='(max-width: 1024px) 0vw, 50vw'
              placeholder='blur'
              fill
            />
          </div>
          <div className={classes.detail}>
            <p className={classes.paragraph}>
              We are a law firm dedicated to providing exceptional legal services to clients facing
              family law, employment law, and personal injury law matters. Our firm was founded with
              a commitment to providing compassionate and effective legal representation to those in
              need. Our experienced attorneys have a deep understanding of the law and are dedicated
              to helping clients navigate their legal challenges with confidence and ease.
            </p>
            <Button sizes='sm' align='center'>
              Book a case evaluation
            </Button>
          </div>
        </div>
      </section>
      <section ref={mobiletargetRef} className={classesResponsive.wrapper}>
        <h2 className={classesResponsive.title}>Welcome to Buchannan & Morgan</h2>
        <p className={classesResponsive.paragraph}>
          We are a law firm dedicated to providing exceptional legal services to clients facing
          family law, employment law, and personal injury law matters. Our firm was founded with a
          commitment to providing compassionate and effective legal representation to those in need.
          Our experienced attorneys have a deep understanding of the law and are dedicated to
          helping clients navigate their legal challenges with confidence and ease.
        </p>
        <Button sizes='sm' align='center'>
          Book a case evaluation
        </Button>
      </section>
    </>
  )
}

export default WelcomeSection
