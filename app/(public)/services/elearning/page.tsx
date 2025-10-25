import HeroSection from './HeroSection'
import EducationVision from './EducationVision'
import ServicesGrid from './ServicesGrid'
import SectorsSection from './SectorsSection'
import Methodology from './Methodology'
import PlatformShowcase from './PlatformShowcase'
import SuccessStories from './SuccessStories'
import SocialIntegration from './SocialIntegration'
import CTASection from './CTASection'

export default function DigitalEducationPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <EducationVision />
      <ServicesGrid />
      <SectorsSection />
      <Methodology />
      <PlatformShowcase />
      <SuccessStories />
      <SocialIntegration />
      <CTASection />
    </div>
  )
}