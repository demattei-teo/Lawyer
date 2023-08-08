import { Footer, Header, MarqueeText } from '@/components'
import '@/styles/globals.css'

export const metadata = {
  title: 'Lawyer',
  description:
    'We are a law firm with more than 20 years of experience in the legal field. We offer advisory services, representation and legal defense in various areas of law, such as civil, criminal, labor, administrative and tax law. We have a team of highly qualified professionals committed to excellence, ethics and the satisfaction of our clients. Our mission is to provide efficient, innovative and personalized legal solutions, based on the rigorous study of each case and respect for the principles and values that characterize us.',
  generator: 'Next.js',
  applicationName: 'Lawyer',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'lawless lawyer',
    'family lawyers near me',
    'types of lawyers',
    'lawyers',
    'lawyer salary',
    'rocket lawyer',
    'real estate lawyer near me',
    'lawyer near me',
    'divorce lawyer near me',
    'los angeles personal injury lawyer',
    'divorce lawyers near me',
    'immigration lawyer near me',
    'personal injury lawyer maryland',
    'memphis personal injury lawyer',
    'best personal injury lawyer memphis',
    'chicago injury lawyer',
    'lawyer',
    'personal injury lawyer kansas city',
    'baltimore personal injury lawyer',
    'lawyers near me',
    'attorney',
    'legal'
  ],
  authors: [
    { name: 'David', url: 'https://www.linkedin.com/in/davidmedev' },
    { name: 'Josh', url: 'https://www.linkedin.com/in/teo-demattei-63a744261' }
  ],
  colorScheme: 'normal',
  creator: 'David & Mateo',
  publisher: 'David & Mateo',
  category: 'legal',
  formatDetection: {
    email: true,
    address: true,
    telephone: true
  },
  openGraph: {
    title: 'Lawyer',
    description:
      'We are a law firm with more than 20 years of experience in the legal field. We offer advisory services, representation and legal defense in various areas of law, such as civil, criminal, labor, administrative and tax law. We have a team of highly qualified professionals committed to excellence, ethics and the satisfaction of our clients. Our mission is to provide efficient, innovative and personalized legal solutions, based on the rigorous study of each case and respect for the principles and values that characterize us.',
    url: 'https://lawyerdev.vercel.app',
    siteName: 'Lawyer',
    locale: 'en',
    type: 'website'
  }
}

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body className='2xl:mx-auto 2xl:max-w-screen-2xl'>
        <MarqueeText />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
