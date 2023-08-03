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
    header: clsx('bg-gray-800 flex flex-col px-4 py-4 md:flex-row'),
    contResponsive: clsx('flex-grow grid [grid-template-areas:"logo_icons"] col-span-full items-center'),
    image: clsx('relative w-40 h-10 z-20 [grid-area:logo]'),
    contIcons: clsx('overflow-hidden justify-self-end self-center grid  [grid-template-areas:"icons"] md:hidden')
  }

  return (
    <header className={classes.header}>
      <div className={classes.contResponsive}>

        <div className={classes.image}>
          <Image src='https://res.cloudinary.com/dadpdkkq9/image/upload/v1690990471/lawyer/logo_pmyerc.png' alt='logo' fill priority />
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
