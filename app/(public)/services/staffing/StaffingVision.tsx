export default function StaffingVision() {
  const recruitmentCycle = [
    { step: 1, title: 'التحليل الوظيفي', description: 'فهم احتياجات المنظمة' },
    { step: 2, title: 'البحث والترشيح', description: 'استقطاب الكفاءات المناسبة' },
    { step: 3, title: 'المقابلات', description: 'تقييم المهارات والملاءمة' },
    { step: 4, title: 'التوظيف', description: 'إتمام عملية التعيين' },
    { step: 5, title: 'المتابعة والتقييم', description: 'ضمان التكيف والاستمرارية' }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          نُعيد تعريف التوظيف... بمنهجية ذكية ترتكز على الكفاءة والملاءمة
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              لا نبحث فقط عن "شاغر ووظيفة"، بل عن تناغم بين المهارات والأهداف التنظيمية.
              تجمع مجموعة النور بين التحليل المهني والاختيار المبني على البيانات لضمان 
              توظيف مستدام وفعّال، سواء لمؤسسة صغيرة أو جهة حكومية كبرى.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex justify-between items-center">
              {recruitmentCycle.map((item, index) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center text-white font-bold mb-2 mx-auto">
                    {item.step}
                  </div>
                  <h4 className="font-semibold text-blue-900">{item.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                </div>
              ))}
            </div>
            <div className="absolute top-8 left-8 right-8 h-0.5 bg-blue-200 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}