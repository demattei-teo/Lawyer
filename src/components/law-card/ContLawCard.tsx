interface Props {
  children: React.ReactNode
}

function ContLawCard({ children }: Props) {
  return <ul className='grid gap-6 p-8 py-32 md:grid-cols-3 lg:gap-10 lg:px-24'>{children}</ul>
}

export default ContLawCard
