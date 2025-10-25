function Aboutus() {
    return (
        <>
            {/* من نحن */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
                        خبرة تحليلية... رؤية استراتيجية
                    </h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                نؤمن في مجموعة النور أن البحث العلمي ليس غاية بحد ذاته، بل وسيلة لصنع أثر مجتمعي حقيقي.
                                نستخدم أدوات بحث متقدمة لجمع وتحليل البيانات، ونعتمد على فرق متخصصة تجمع بين الخبرة
                                الأكاديمية والميدانية لضمان نتائج موثوقة وذات أثر.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                                    <span className="text-2xl">📊</span>
                                    <span className="font-semibold">بحث كمي</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                                    <span className="text-2xl">🎯</span>
                                    <span className="font-semibold">بحث نوعي</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                                    <span className="text-2xl">📈</span>
                                    <span className="font-semibold">تحليل بيانات</span>
                                </div>
                                <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg">
                                    <span className="text-2xl">🚀</span>
                                    <span className="font-semibold">مخرجات استراتيجية</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl p-8">
                            <img
                                src="/consulting-hero.jpg"
                                alt="منهجية البحث"
                                className="rounded-lg w-full h-96 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Aboutus;