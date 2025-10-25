import HeroSection from './HeroSection'
import StaffingVision from './StaffingVision'
import ServicesGrid from './ServicesGrid'
import SectorsSection from './SectorsSection'
import Methodology from './Methodology'
import SuccessStories from './SuccessStories'
import CTASection from './CTASection'

export default function StaffingPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <StaffingVision />
      <ServicesGrid />
      <SectorsSection />
      <Methodology />
      <SuccessStories />
      <CTASection />
    </div>
  )
}