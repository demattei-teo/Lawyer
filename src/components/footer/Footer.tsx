import clsx from 'clsx'
import { Hours, IconSocialMedia, ParagraphFooter } from '..'

function Footer() {
  const classes = {
    footer: clsx('grid gap-4 bg-gray-700 text-gray-200 md:grid-cols-3'),
    wrapperRightsReserved: clsx('col-span-full flex justify-center bg-black p-2 text-gray-400 '),
    rightReserved: clsx('text-center text-base')
  }

  return (
    <footer className={classes.footer}>
      <Hours direction='start' size='bigger' padding title='Reach us' />
      <ParagraphFooter
        title='Lorem'
        firstParagraph='Delectus veniam illum. Voluptatem dolor enim deleniti. Aut odit a sit quibusdam sint quo est autem.'
      />
      <ParagraphFooter
        title='Ipsum'
        firstParagraph='Et ipsum cupiditate eius architecto ex praesentium ipsam soluta accusantium.'
      />
      <IconSocialMedia direction='completeRow' />
      <div className={classes.wrapperRightsReserved}>
        <em className={classes.rightReserved}>©2023 - Buchannan & Morgan - All rights Reserved</em>
      </div>
    </footer>
  )
}

export default Footer
