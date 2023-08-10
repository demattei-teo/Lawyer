import clsx from 'clsx'

interface Props {
  children: React.ReactNode
  sizes: 'sm' | 'xl'
  align?: 'center'
  className?: string
  valueStateAnimation?: boolean
}

function Button({ children, sizes, align, className, valueStateAnimation = false }: Props) {
  const classes = {
    button: clsx(
      'bg-brown-300 py-5 font-bold uppercase text-white transition-colors hover:bg-brown-500',
      sizes === 'sm' && 'px-5 text-sm',
      sizes === 'xl' && 'px-10 text-xl',
      align === 'center' && 'place-self-center',
      valueStateAnimation && 'animate-fade-up opacity-100',
      className
    )
  }

  return <button className={classes.button}>{children}</button>
}

export default Button
