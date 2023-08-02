import { MarqueeText } from '@/components'
import '@/styles/globals.css'

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className='2xl:mx-auto 2xl:max-w-screen-2xl'>
        <MarqueeText />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
