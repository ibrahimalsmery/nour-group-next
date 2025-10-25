export default function Methodology() {
  const methodologySteps = [
    {
      step: '1',
      title: 'تحليل الاحتياج التعليمي والتقني',
      description: 'تحديد الفئة المستهدفة وأهداف التعلم'
    },
    {
      step: '2',
      title: 'تصميم الحلول الرقمية',
      description: 'تحديد نوع المنصة، التكنولوجيا، ونموذج العمل'
    },
    {
      step: '3',
      title: 'إنتاج المحتوى وتجربة المستخدم',
      description: 'تطوير دروس رقمية تفاعلية متوافقة مع السياق المحلي'
    },
    {
      step: '4',
      title: 'التشغيل والإطلاق التجريبي',
      description: 'تشغيل المنصة ومتابعة الأداء الفني والتربوي'
    },
    {
      step: '5',
      title: 'القياس والتوسع',
      description: 'تقييم الأثر التربوي والاستثماري، وتحسين التجربة'
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          من الفكرة إلى المنصة... ثم إلى التعلّم الفعّال
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
              "نحو بيئة تعليمية رقمية فلسطينية قادرة على النمو والتأثير."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}