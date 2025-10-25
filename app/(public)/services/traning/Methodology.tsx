export default function Methodology() {
  const methodologySteps = [
    {
      step: '1',
      title: 'تحليل الاحتياجات التدريبية (TNA)',
      description: 'تحديد فجوات الأداء بالتعاون مع المؤسسة.'
    },
    {
      step: '2',
      title: 'تصميم البرنامج والمحتوى',
      description: 'إعداد خطة تدريبية مرنة تتناسب مع أهداف الجهة المستفيدة.'
    },
    {
      step: '3',
      title: 'التنفيذ التفاعلي',
      description: 'استخدام تقنيات التعلم النشط، ودراسة الحالات الواقعية.'
    },
    {
      step: '4',
      title: 'التقييم وقياس الأثر',
      description: 'تطبيق نماذج تقييم متعددة (مثل نموذج كيركباتريك).'
    },
    {
      step: '5',
      title: 'المتابعة والاستدامة',
      description: 'تقديم تقارير مفصلة وتوصيات للتحسين المستمر.'
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          من الفكرة إلى الأثر... تدريب يصنع فرقًا
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {methodologySteps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 space-x-reverse">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 bg-blue-50 rounded-lg border-r-4 border-gold-500">
            <p className="text-lg text-blue-800 text-center font-semibold">
              "نقيس النجاح بمدى تطور أداء المشاركين والمؤسسات بعد التدريب، وليس بعدد الساعات التدريبية."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}