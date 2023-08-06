'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { useState } from 'react'
import { IconClose, IconMenu, NavBar } from '..'

function Header() {
  const [openNavbar, setOpenNavbar] = useState(false)

  function changeStateNavbar() {
    setOpenNavbar(!openNavbar)
  }

  const classes = {
    header: clsx('flex flex-col bg-gray-800 px-4 py-4 md:flex-row'),
    contResponsive: clsx(
      'col-span-full grid flex-grow items-center [grid-template-areas:"logo_icons"]'
    ),
    image: clsx('relative z-20 h-10 w-40 [grid-area:logo]'),
    contIcons: clsx(
      'grid self-center justify-self-end overflow-hidden  [grid-template-areas:"icons"] md:hidden'
    )
  }

  return (
    <header className={classes.header}>
      <div className={classes.contResponsive}>
        <div className={classes.image}>
          <Image
            src='https://res.cloudinary.com/dadpdkkq9/image/upload/v1690990471/lawyer/logo_pmyerc.png'
            alt='logo'
            fill
            priority
            sizes='25vw'
          />
        </div>
        <div onClick={changeStateNavbar} className={classes.contIcons}>
          <IconMenu stateNavbar={openNavbar} />
          <IconClose stateNavbar={openNavbar} />
        </div>
      </div>
      <NavBar stateNavbar={openNavbar} />
    </header>
  )
}

export default Header
