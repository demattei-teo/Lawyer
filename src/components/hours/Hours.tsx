import clsx from 'clsx'

interface Props {
  direction: string
  size: string
  padding?: boolean
  title?: string | undefined
}

function Hours({ direction, size, padding, title }: Props) {
  const classes = {
    wrapper: clsx(
      'grid grid-cols-1 gap-2 md:self-center md:justify-self-center md:text-center',
      direction === 'center' ? 'items-center' : 'items-start',
      padding === true && 'p-2'
    ),
    title: clsx('text-xl font-medium'),
    subTitle: clsx('text-sm font-medium', size === 'small' ? 'text-sm' : 'text-base'),
    span: clsx(size === 'small' ? 'text-xs' : 'text-base'),
    call: clsx('row-start-7 row-end-[9] self-end', size === 'small' ? 'text-xs' : 'text-base')
  }

  return (
    <div className={classes.wrapper}>
      {title !== undefined && <h4 className={classes.title}>{title}</h4>}
      <h5 className={classes.subTitle}>Monday - Friday</h5>
      <span className={classes.span}>8:00 - 12:30</span>
      <span className={classes.span}>04:20 - 07:30</span>
      <span className={classes.call}>Call: 212 - 555-25XX</span>
    </div>
  )
}

export default Hours
