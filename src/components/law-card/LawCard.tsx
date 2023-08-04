import { brownBlurDataURL } from '@/constants'
import Image from 'next/image'

interface Props {
  categoryLaw: string
  imageSrc: string
  imageAlt: string
}

function LawCard({ categoryLaw, imageSrc, imageAlt }: Props) {
  return (
    <li className='relative h-48 flex justify-center items-center shadow-md shadow-brown-300'>
      <Image src={imageSrc} alt={imageAlt} className='-z-10 w-40 object-cover' fill blurDataURL={brownBlurDataURL} placeholder='blur' />
      <h4 className='text-fluid-2xl text-white font-semibold text-center'>{categoryLaw}</h4>
    </li>
  )
}

export default LawCard
