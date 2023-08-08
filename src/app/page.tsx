import {
  BannerSection,
  CallToAction,
  LawCard,
  WelcomeSection,
  WrapperContact,
  WrapperLawCard
} from '@/components'
import { cta2PhotoURL, cta3PhotoURL, ctaPhotoURL } from '@/constants'

function HomePage() {
  return (
    <main>
      <BannerSection />
      <div className='welcome-background bg-cover'>
        <WrapperLawCard>
          <LawCard
            categoryLaw='FAMILY LAW'
            imageAlt='family law'
            imageSrc='https://res.cloudinary.com/dadpdkkq9/image/upload/v1691103810/lawyer/family-law_uhqiuv.png'
          />
          <LawCard
            categoryLaw='EMPLOYMENT LAW'
            imageAlt='employment law'
            imageSrc='https://res.cloudinary.com/dadpdkkq9/image/upload/v1691103810/lawyer/personal-injury-law_hwmvya.png'
          />
          <LawCard
            categoryLaw='PERSONAL INJURY LAW'
            imageAlt='personal injury law'
            imageSrc='https://res.cloudinary.com/dadpdkkq9/image/upload/v1691103810/lawyer/employment-law_h2np1d.png'
          />
        </WrapperLawCard>
        <WelcomeSection />
      </div>
      <CallToAction
        direction='ltr'
        color='black'
        photoURL={ctaPhotoURL}
        title='Family Law'
        paragraph='We understand that dealing with family law issues can be stressful and overwhelming, which
          is why we strive to provide compassionate and personalized legal representation to each of
          our clients. Whether you are going through a divorce, seeking child custody, or
          considering adoption, our attorneys will work with you every step of the way to achieve
          the best possible outcome for you and your family.'
      />
      <CallToAction
        direction='rtl'
        color='white'
        photoURL={cta2PhotoURL}
        title='Employment Law'
        paragraph='At Buchannan & Morgan, our experienced employment law attorneys can help you with a variety of legal issues, including: Discrimination and harassment. Wrongful terminationWage and hour disputes.Employment contracts'
      />
      <CallToAction
        direction='ltr'
        color='black'
        photoURL={cta3PhotoURL}
        title='Personal Injury Law'
        paragraph='Personal injury law is the area of law that deals with injuries caused by the negligence or wrongdoing of others. Our personal injury attorneys at Buchannan & Morgan are dedicated to helping clients who have been injured in accidents, including car accidents, slip and falls, and medical malpractice.'
      />
      <WrapperContact />
    </main>
  )
}

export default HomePage
