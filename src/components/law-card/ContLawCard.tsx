interface Props {
  children: React.ReactNode
}

function ContLawCard({ children }: Props) {
  return (
    <ul className='grid p-4 gap-6 min-[596px]:grid-cols-3 lg:px-24 lg:py-12 lg:gap-16'>{children}</ul>
  )
}

export default ContLawCard
