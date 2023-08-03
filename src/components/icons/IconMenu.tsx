import clsx from 'clsx'

interface Props {
  stateNavbar: boolean
}

function IconMenu({ stateNavbar }: Props) {
  const classes = {
    icon: clsx('w-9 h-9 [grid-area:icons] transition ease-linear duration-500', stateNavbar && 'translate-x-16 opacity-0')
  }

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={classes.icon} viewBox='0 0 24 24' strokeWidth='1.5' stroke='#ffffff' fill='none' strokeLinecap='round' strokeLinejoin='round'>
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 6l16 0' />
      <path d='M4 12l16 0' />
      <path d='M4 18l16 0' />
    </svg>
  )
}

export default IconMenu
