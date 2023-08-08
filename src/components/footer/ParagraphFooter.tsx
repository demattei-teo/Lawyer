import clsx from 'clsx'

interface Props {
  title: string
  firstParagraph?: string
  secondParagraph?: string
}

function ParagraphFooter({ title, firstParagraph, secondParagraph }: Props) {
  const classes = {
    wrapper: clsx('flex flex-col gap-2  p-2 text-white  md:justify-self-center'),
    title: clsx('text-xl font-medium md:text-center'),
    paragraph: clsx('w-4/5 text-lg md:w-full md:text-center')
  }

  return (
    <div className={classes.wrapper}>
      <h4 className={classes.title}>{title}</h4>
      {firstParagraph !== undefined && <p className={classes.paragraph}>{firstParagraph}</p>}
      {secondParagraph !== undefined && <p>{secondParagraph}</p>}
    </div>
  )
}

export default ParagraphFooter
