import clsx from 'clsx'

interface Props {
  children: React.ReactNode
}

function Button({ children }: Props) {
  const classes = {
    button: clsx(
      'bg-brown-300 px-10 py-5 text-xl font-bold uppercase text-white transition-colors hover:bg-brown-500'
    )
  }

  return <button className={classes.button}>{children}</button>
}

export default Button
