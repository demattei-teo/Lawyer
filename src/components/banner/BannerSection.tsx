import { bannerPhotoURL, brownBlurDataURL } from '@/constants'
import Image from 'next/image'
import Button from '../button/Button'

function BannerSection() {
  return (
    <section className='relative space-y-6 bg-black/30 px-8 py-40'>
      <Image
        src={bannerPhotoURL}
        alt='Lawyer banner'
        fill
        priority
        blurDataURL={brownBlurDataURL}
        placeholder='blur'
        className='-z-10 object-cover object-center'
      />
      <h1 className='text-fluid-3xl font-extrabold text-white sm:w-1/2'>
        Your Legal Needs, Our Expertise
      </h1>
      <Button sizes='xl'>Get Legal Help Now</Button>
    </section>
  )
}

export default BannerSection
