export default function EducationVision() {
    const pillars = [
        {
            title: 'المحتوى',
            description: 'مواد تعليمية تفاعلية مبنية على المناهج الفلسطينية',
            color: 'blue'
        },
        {
            title: 'التكنولوجيا',
            description: 'منصات وتطبيقات تعليمية مبتكرة وسهلة الاستخدام',
            color: 'gold'
        },
        {
            title: 'الاستثمار',
            description: 'شراكات استثمارية مستدامة لضمان استمرارية المشاريع',
            color: 'green'
        }
    ]

    const colorMap: Record<string, string> = {
        blue: 'bg-blue-100 text-blue-800',
        gold: 'bg-yellow-100 text-yellow-800',
        green: 'bg-green-100 text-green-800'
    }

    return (
        <section className="py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
                    نحو تعليم فلسطيني رقمي مرن، شامل، ومستدام
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                            تسعى مجموعة النور إلى جعل التحول الرقمي في التعليم استثمارًا مجتمعيًا يُسهم في
                            تمكين الأفراد والمؤسسات من الوصول إلى المعرفة بسهولة. نركز على بناء حلول تعليمية
                            رقمية تجمع بين التقنية والمحتوى والتمويل والشراكة.
                        </p>
                        <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center">
                                <span className="ml-2 text-gold-600">✓</span>
                                دعم جودة التعليم وتحسين مخرجاته
                            </li>
                            <li className="flex items-center">
                                <span className="ml-2 text-gold-600">✓</span>
                                توسيع الوصول إلى التعلم في المناطق النائية
                            </li>
                            <li className="flex items-center">
                                <span className="ml-2 text-gold-600">✓</span>
                                تحفيز سوق عمل قائم على المهارات الرقمية
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                        {pillars.map((pillar, index) => (
                            <div key={index} className="space-y-4">
                                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto ${colorMap[pillar.color]} text-xl font-bold`}>
                                    {index + 1}
                                </div>
                                <h4 className="font-semibold text-blue-900">{pillar.title}</h4>
                                <p className="text-sm text-gray-600">{pillar.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}