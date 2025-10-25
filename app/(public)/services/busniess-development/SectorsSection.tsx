export default function SectorsSection() {
    const sectors = [
        {
            category: 'القطاعات الاقتصادية والإنتاجية',
            color: 'green',
            description: 'تحليل السوق وتطوير خطط النمو',
            examples: [
                'الصناعة والتحويل الغذائي',
                'الزراعة والأمن الغذائي',
                'الطاقة والمياه',
                'التجارة والخدمات'
            ]
        },
        {
            category: 'القطاعات الريادية والشركات الصغيرة والمتوسطة',
            color: 'blue',
            description: 'بناء الشراكات وتمكين المؤسسات',
            examples: [
                'الشركات الناشئة',
                'ريادة الأعمال الاجتماعية',
                'الحاضنات والمسرّعات',
                'مؤسسات التمويل الأصغر'
            ]
        },
        {
            category: 'القطاعات الداعمة',
            color: 'purple',
            description: 'تطوير استراتيجيات التوسع',
            examples: [
                'المصارف وشركات التمويل',
                'قطاع السياحة والنشاط الفندقي',
                'قطاع الاتصالات وتكنولوجيا المعلومات',
                'مؤسسات المجتمع المدني التنموي'
            ]
        }
    ]

    const colorMap: Record<string, string> = {
        green: 'bg-green-50 border-green-200 text-green-800',
        blue: 'bg-blue-50 border-blue-200 text-blue-800',
        purple: 'bg-purple-50 border-purple-200 text-purple-800'
    }

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
                    ندعم جميع القطاعات التي تصنع الاقتصاد الفلسطيني
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sectors.map((sector, index) => (
                        <div
                            key={index}
                            className={`border-2 rounded-lg p-6 ${colorMap[sector.color]} transition-transform hover:scale-105`}
                        >
                            <h3 className="text-xl font-semibold mb-3">{sector.category}</h3>
                            <p className="text-sm text-gray-600 mb-4">{sector.description}</p>
                            <ul className="space-y-2">
                                {sector.examples.map((example, idx) => (
                                    <li key={idx} className="flex items-start text-sm">
                                        <span className="ml-2 text-gold-600">•</span>
                                        <span>{example}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}