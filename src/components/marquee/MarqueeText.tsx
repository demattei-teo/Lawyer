function MarqueeText() {
  return (
    <div className='relative flex overflow-hidden bg-brown-500'>
      <div className='animate-marquee whitespace-nowrap'>
        <span className='mx-4 text-sm font-bold text-white'>
          Legal representation you can trust. Contact us today to schedule a consultation and start
          building your case.
        </span>
        <span className='mx-4 text-sm font-bold text-white'>
          Legal representation you can trust. Contact us today to schedule a consultation and start
          building your case.
        </span>
      </div>
      <div className='absolute left-0 top-0 animate-marquee2 whitespace-nowrap'>
        <span className='mx-4 text-sm font-bold text-white'>
          Legal representation you can trust. Contact us today to schedule a consultation and start
          building your case.
        </span>
        <span className='mx-4 text-sm font-bold text-white'>
          Legal representation you can trust. Contact us today to schedule a consultation and start
          building your case.
        </span>
      </div>
    </div>
  )
}

export default MarqueeText
