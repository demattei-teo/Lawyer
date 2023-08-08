import { Contact, OfficeTime } from '..'

function WrapperContact() {
  return (
    <section className='grid w-full bg-cover py-20 md:grid-cols-2 md:bg-[url("https://res.cloudinary.com/dadpdkkq9/image/upload/v1691246166/lawyer/conctact-background_grwqm9.png")] md:px-11 lg:mt-52'>
      <OfficeTime />
      <Contact />
    </section>
  )
}

export default WrapperContact
