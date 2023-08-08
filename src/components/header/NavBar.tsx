import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  stateNavbar: boolean
}

function NavBar({ stateNavbar }: Props) {
  const classes = {
    wrapper: clsx(
      '-z-10 flex h-0 -translate-y-1 items-center self-center overflow-hidden opacity-0 transition-[height,opacity,transform] duration-500 ease-in-out md:z-10 md:h-auto md:items-center md:justify-center md:px-2 md:opacity-100',
      stateNavbar && 'z-10 h-12 translate-y-0 opacity-100'
    ),

    ul: clsx('flex items-center gap-4 self-end overflow-hidden md:gap-7'),

    links: clsx(
      'self-center text-center text-sm text-white opacity-0 transition duration-1000 ease-in-out hover:text-brown-500 md:text-base md:opacity-100',
      stateNavbar && 'opacity-100'
    )
  }

  return (
    <nav className={classes.wrapper}>
      <ul className={classes.ul}>
        <li className={classes.links}>
          <Link href='#'>Home</Link>
        </li>
        <li className={classes.links}>
          <Link href='#'>About Us</Link>
        </li>
        <li className={classes.links}>
          <Link href='#'>Practice Areas</Link>
        </li>
        <li className={classes.links}>
          <Link href='#'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
