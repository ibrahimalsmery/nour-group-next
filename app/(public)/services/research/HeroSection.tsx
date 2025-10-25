function HeroSection() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-l from-blue-900 to-blue-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                        نحو قرارات أدق... من خلال أبحاث ودراسات مبنية على الأدلة
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
                        في مجموعة النور الاستشارية، نقدّم منظومة متكاملة من خدمات الأبحاث والدراسات
                        التي تُمكّن المؤسسات والجهات الفاعلة من اتخاذ قرارات مستنيرة مبنية على البيانات
                        في مختلف القطاعات التنموية والاقتصادية والاجتماعية في فلسطين.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-gold-500 hover:bg-gold-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                            ابدأ مشروعك البحثي معنا
                        </button>
                        <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                            <a href="mailto:dr.ziyad.mezher@al-nourgroup.com">
                                اطلب استشارة الآن
                            </a>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default HeroSection;