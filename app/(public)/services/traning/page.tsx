import HeroSection from './HeroSection'
import TrainingVision from './TrainingVision'
import ProgramTypes from './ProgramTypes'
import SectorsGrid from './SectorsGrid'
import Methodology from './Methodology'
import SuccessStories from './SuccessStories'
import CTASection from './CTASection'

export default function TrainingPage() {
    return (
        <div className="min-h-screen bg-white">
            <HeroSection />
            <TrainingVision />
            <ProgramTypes />
            <SectorsGrid />
            <Methodology />
            <SuccessStories />
            <CTASection />
        </div>
    )
}