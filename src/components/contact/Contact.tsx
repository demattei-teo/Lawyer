import clsx from 'clsx'

export default function Contact() {
  const classes = {
    form: clsx('grid grid-cols-1 gap-6 bg-white/70 px-10 py-20'),
    title: clsx('self-center justify-self-center text-3xl font-semibold text-black'),
    input: clsx(
      'w-full resize-none self-center justify-self-center border border-gray-500/50 bg-transparent p-2 outline-none transition duration-700 ease-in-out focus:border-black'
    ),
    submit: clsx(
      'w-full bg-black px-5 py-3 text-white transition duration-500 ease-in-out hover:bg-brown-400/70'
    )
  }
  return (
    <form className={classes.form}>
      <h3 className={classes.title}>Get in Tuch</h3>
      <input type='text' placeholder='Name' className={classes.input} />
      <input type='number' placeholder='Mobile Number' className={classes.input} />
      <input type='Email' placeholder='Email' className={classes.input} />
      <textarea className={classes.input} placeholder='Message' name='Message' cols={5} rows={5} />
      <input type='submit' value='SUBMIT' className={classes.submit} />
    </form>
  )
}
