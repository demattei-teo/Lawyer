import clsx from 'clsx'

function IconInstagram() {
  const classes = {
    icon: clsx('cursor-pointer transition duration-300 ease-in-out hover:scale-[1.3]')
  }

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className={classes.icon}
      width='28'
      height='28'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='#ffffff'
      fill='none'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z' />
      <path d='M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0' />
      <path d='M16.5 7.5l0 .01' />
    </svg>
  )
}

export default IconInstagram
