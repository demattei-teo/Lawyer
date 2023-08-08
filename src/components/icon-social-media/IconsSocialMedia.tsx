import clsx from 'clsx'
import { IconFacebook, IconInstagram, IconLinkdin, IconTwitter } from '..'

interface Props {
  direction: 'row' | 'completeRow'
}

function IconsSocialMedia({ direction }: Props) {
  const classes = {
    wrapper: clsx(
      'flex gap-4',
      direction === 'row' ? 'flex-row' : 'col-span-full justify-self-center px-2'
    )
  }
  return (
    <div className={classes.wrapper}>
      <IconFacebook />
      <IconLinkdin />
      <IconTwitter />
      <IconInstagram />
    </div>
  )
}

export default IconsSocialMedia
