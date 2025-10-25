function Methodology() {
    // منهجية البحث
    const methodology = [
        { step: 1, title: 'تحديد أهداف البحث', description: 'فهم الاحتياجات وتحديد الأهداف بوضوح' },
        { step: 2, title: 'جمع البيانات', description: 'استخدام أدوات بحث متقدمة لجمع البيانات' },
        { step: 3, title: 'التحليل', description: 'تحليل البيانات باستخدام منهجيات علمية' },
        { step: 4, title: 'التوصيات', description: 'تقديم توصيات عملية قابلة للتطبيق' },
        { step: 5, title: 'المتابعة والتقييم', description: 'متابعة التنفيذ وتقييم الأثر' }
    ];
    return (
        <>
            {/* المنهجية */}
            <section className="py-16 bg-gradient-to-l from-blue-50 to-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
                        نُحوّل البيانات إلى معرفة... والمعرفة إلى قرارات
                    </h2>
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">
                            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block"></div>
                            <div className="grid md:grid-cols-5 gap-6 relative">
                                {methodology.map((step, index) => (
                                    <div key={step.step} className="text-center">
                                        <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 relative z-10">
                                            {step.step}
                                        </div>
                                        <h3 className="font-bold text-lg text-blue-900 mb-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
                            <p className="text-xl text-center text-gray-700 italic leading-relaxed">
                                "في مجموعة النور، نؤمن أن البحث العلمي ليس غاية بحد ذاته، بل وسيلة لصنع أثر مجتمعي حقيقي."
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Methodology;