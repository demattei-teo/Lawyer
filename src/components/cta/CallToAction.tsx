import { brownBlurDataURL } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'
import Button from '../button/Button'

interface Props {
  direction: 'ltr' | 'rtl'
  title: string
  paragraph: string
  color: 'white' | 'black'
  photoURL: string
}

function CallToAction({ direction, title, paragraph, color, photoURL }: Props) {
  const classes = {
    section: clsx(
      'relative my-32 p-8 max-lg:space-y-14 lg:flex lg:items-center lg:gap-10',
      color === 'black' && 'bg-gray-700 text-white',
      color === 'white' && 'bg-gray-200 text-black'
    ),
    info: clsx(
      'basis-2/5 space-y-4',
      direction === 'ltr' && 'order-1',
      direction === 'rtl' && 'order-2'
    ),
    picture: clsx(
      'group relative aspect-video basis-3/5 overflow-hidden lg:translate-y-1/4',
      direction === 'ltr' && 'order-2',
      direction === 'rtl' && 'order-1'
    )
  }

  return (
    <section className={classes.section}>
      <div className={classes.info}>
        <h3 className='text-4xl font-extrabold'>{title}</h3>
        <p className='text-base'>{paragraph}</p>
        <Button
          className='absolute bottom-5 left-1/2 z-10 -translate-x-1/2 lg:static lg:translate-x-0'
          sizes='sm'
        >
          Contact us Today
        </Button>
      </div>
      <div className={classes.picture}>
        <Image
          className='object-cover object-center transition-transform duration-500 group-hover:scale-110'
          src={photoURL}
          alt='reunion de abogado con cliente'
          blurDataURL={brownBlurDataURL}
          sizes='(max-width: 1024px) 90vw, 50vw'
          placeholder='blur'
          fill
        />
      </div>
    </section>
  )
}

export default CallToAction
