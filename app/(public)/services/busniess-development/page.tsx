import HeroSection from './HeroSection'
import BusinessVision from './BusinessVision'
import ServicesGrid from './ServicesGrid'
import SectorsSection from './SectorsSection'
import Methodology from './Methodology'
import SuccessStories from './SuccessStories'
import SocialIntegration from './SocialIntegration'
import CTASection from './CTASection'

export default function BusinessDevelopmentPage() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />
            <BusinessVision />
            <ServicesGrid />
            <SectorsSection />
            <Methodology />
            <SuccessStories />
            <SocialIntegration />
            <CTASection />
        </div>
    )
}