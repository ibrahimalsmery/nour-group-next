function Cta() {
    return (
        <>
            {/* CTA */}
            <section className="py-16 bg-blue-900 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        هل تحتاج إلى دراسة تدعم قرارك القادم؟
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        تواصل مع فريقنا من الخبراء لبدء مشروعك البحثي اليوم
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                        <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold py-3 px-8 rounded-lg text-lg transition duration-300">
                            ابدأ مشروعك البحثي معنا
                        </button>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <span>📧</span>
                            <span>research@al-nourgroup.com</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span>📞</span>
                            <span>+970 599 000 000</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Cta; 