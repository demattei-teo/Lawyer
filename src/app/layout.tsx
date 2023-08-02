import { MarqueeText } from '@/components'
import '@/styles/globals.css'

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>
        <MarqueeText />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
