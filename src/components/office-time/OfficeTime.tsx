import clsx from 'clsx'
import { Hours } from '..'
import IconsSocialMedia from '../icon-social-media/IconsSocialMedia'

function OfficeTime() {
  const classes = {
    wrapper: clsx(
      'flex flex-col items-center  gap-20 bg-brown-400/70 py-20 text-center text-white'
    ),
    title: clsx('text-3xl font-semibold'),
    subtitle: clsx('text-base font-medium'),
    wrapperSocialMedia: clsx('flex flex-col gap-2')
  }

  return (
    <article className={classes.wrapper}>
      <h3 className={classes.title}>Office Hours</h3>
      <Hours direction='center' size='small' />
      <div className={classes.wrapperSocialMedia}>
        <h4 className={classes.subtitle}>call: 212-555-25XX</h4>
        <IconsSocialMedia direction='row' />
      </div>
    </article>
  )
}

export default OfficeTime
