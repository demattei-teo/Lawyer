import { brownBlurDataURL, welcomePhotoURL } from '@/constants'
import Image from 'next/image'
import Button from '../button/Button'

function WelcomeSection() {
  return (
    <>
      <section className='hidden space-y-6 p-32 lg:block'>
        <h2 className='text-fluid-3xl font-extrabold text-black'>Welcome to Buchannan & Morgan</h2>
        <div className='grid grid-cols-2 items-center'>
          <div className='relative h-[400px]'>
            <Image
              className='object-cover object-center'
              src={welcomePhotoURL}
              alt='Abogados apoyando una causa'
              blurDataURL={brownBlurDataURL}
              placeholder='blur'
              fill
            />
          </div>
          <div className='-translate-x-1/4 translate-y-1/4 space-y-6 rounded-lg bg-gray-200 p-10 shadow-lg shadow-gray-200'>
            <p className='text-base text-black'>
              We are a law firm dedicated to providing exceptional legal services to clients facing
              family law, employment law, and personal injury law matters. Our firm was founded with
              a commitment to providing compassionate and effective legal representation to those in
              need. Our experienced attorneys have a deep understanding of the law and are dedicated
              to helping clients navigate their legal challenges with confidence and ease.
            </p>
            <Button sizes='sm'>Book a case evaluation</Button>
          </div>
        </div>
      </section>
      <section className='m-4 space-y-6 rounded-lg bg-gray-200 px-2.5 py-9 shadow-lg shadow-gray-200 lg:hidden'>
        <h2 className='text-fluid-3xl font-extrabold text-black'>Welcome to Buchannan & Morgan</h2>
        <p className='text-base text-black'>
          We are a law firm dedicated to providing exceptional legal services to clients facing
          family law, employment law, and personal injury law matters. Our firm was founded with a
          commitment to providing compassionate and effective legal representation to those in need.
          Our experienced attorneys have a deep understanding of the law and are dedicated to
          helping clients navigate their legal challenges with confidence and ease.
        </p>
        <Button sizes='sm'>Book a case evaluation</Button>
      </section>
    </>
  )
}

export default WelcomeSection
