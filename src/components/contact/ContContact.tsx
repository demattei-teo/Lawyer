import { Contact, OfficeTime } from '..'

export default function ContContact() {
  return (
    <section className='grid md:px-11 py-20 w-full md:grid-cols-2 md:bg-[url("https://res.cloudinary.com/dadpdkkq9/image/upload/v1691246166/lawyer/conctact-background_grwqm9.png")] bg-cover'>
      <OfficeTime />
      <Contact />
    </section>
  )
}
