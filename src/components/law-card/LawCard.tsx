import { brownBlurDataURL } from '@/constants'
import Image from 'next/image'

interface Props {
  categoryLaw: string
  imageSrc: string
  imageAlt: string
}

function LawCard({ categoryLaw, imageSrc, imageAlt }: Props) {
  return (
    <li className='relative h-48 flex justify-center items-center shadow-md shadow-gray-500 '>
      <Image src={imageSrc} alt={imageAlt} className='w-40 object-cover' fill blurDataURL={brownBlurDataURL} placeholder='blur' />
      <h4 className='text-fluid-2xl text-white font-semibold text-center z-10'>{categoryLaw}</h4>
    </li>
  )
}

export default LawCard
