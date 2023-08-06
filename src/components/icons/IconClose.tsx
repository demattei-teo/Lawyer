import clsx from 'clsx'

interface Props {
  stateNavbar: boolean
}

export default function IconClose({ stateNavbar }: Props) {
  const classes = {
    icon: clsx('w-9 h-9 [grid-area:icons] transition-transform duration-500 cursor-pointer', !stateNavbar && 'translate-x-8')
  }
  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={classes.icon} viewBox='0 0 24 24' strokeWidth='1.5' stroke='#ffffff' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M18 6l-12 12' />
      <path d='M6 6l12 12' />
    </svg>
  )
}
