import { brownBlurDataURL } from '@/constants'
import Image from 'next/image'

interface Props {
  categoryLaw: string
  imageSrc: string
  imageAlt: string
}

function LawCard({ categoryLaw, imageSrc, imageAlt }: Props) {
  return (
    <li className='group relative flex h-48 items-center justify-center overflow-hidden shadow-md shadow-gray-500'>
      <Image
        src={imageSrc}
        alt={imageAlt}
        className='w-40 object-cover transition-transform duration-500 group-hover:scale-110'
        fill
        blurDataURL={brownBlurDataURL}
        sizes='(max-width: 768px) 90vw, 33vw'
        placeholder='blur'
      />
      <h4 className='z-10 text-center text-fluid-2xl font-semibold text-white'>{categoryLaw}</h4>
    </li>
  )
}

export default LawCard
