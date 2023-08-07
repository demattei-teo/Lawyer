import clsx from 'clsx'
import IconsSocialMedia from '../icon-social-media/IconsSocialMedia'

export default function OfficeTime() {
  const classes = {
    cont: clsx('flex flex-col items-center  gap-20 bg-brown-400/70 py-20 text-center text-white'),
    title: clsx('text-3xl font-semibold'),
    subtitle: clsx('text-base font-medium'),
    contSpan: clsx('flex flex-col justify-center gap-3 text-center'),
    span: clsx('text-sm'),
    contSocialMedia: clsx('flex flex-col gap-2')
  }
  return (
    <article className={classes.cont}>
      <h3 className={classes.title}>Office Hours</h3>
      <div className={classes.contSpan}>
        <h4 className={classes.subtitle}>Monday - Friday</h4>
        <span className={classes.span}>8:00 - 12:30</span>
        <span className={classes.span}>04:20 - 07:30</span>
      </div>
      <div className={classes.contSocialMedia}>
        <h4 className={classes.subtitle}>call: 212-555-25XX</h4>
        <IconsSocialMedia />
      </div>
    </article>
  )
}
