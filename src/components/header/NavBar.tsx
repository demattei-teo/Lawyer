import clsx from 'clsx'
import Link from 'next/link'

interface Props {
  stateNavbar: boolean
}

function NavBar({ stateNavbar }: Props) {
  const classes = {
    nav: clsx('flex items-center self-center h-0 -z-10 opacity-0 transition-[height,opacity,transform] duration-500 ease-in-out overflow-hidden -translate-y-1 md:h-auto md:z-10 md:opacity-100 md:items-center md:justify-center md:px-2', stateNavbar && 'h-12 opacity-100 z-10 translate-y-0'),

    ul: clsx('flex overflow-hidden self-end items-center gap-4 md:gap-7'),

    links: clsx('text-sm text-center self-center text-white opacity-0 transition duration-1000 ease-in-out hover:text-brown-500 md:opacity-100 md:text-base', stateNavbar && 'opacity-100')
  }

  return (
    <nav className={classes.nav}>
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
