import ExpertsSection from './ExpretsSection';
import BlogSection from './BlogSection';
import ExpertsSectionWithFilter from './ExpertsSectionWithFilter';
import HeroSection from './HeroSection';
import Aboutus from './Aboutus';
import Services from './Services';
import Sectors from './Sectors';
import Methodology from './Methodology';
import Cta from './Cta';
import Socialmedia from './Socialmedia';
const ResearchStudiesPage = () => {

    return (
        <div className="min-h-screen bg-gray-50" dir="rtl">
            <HeroSection />
            <Aboutus />
            <Services />
            <Sectors />
            <Methodology />
            <Cta />
            <Socialmedia />
            <ExpertsSection />
            <BlogSection />
            <ExpertsSectionWithFilter />
        </div>
    );
};

export default ResearchStudiesPage;