export default function TrainingVision() {
  const trainingCycle = [
    { step: 1, title: 'تحليل الاحتياج', description: 'تحديد فجوات الأداء' },
    { step: 2, title: 'تصميم البرنامج', description: 'إعداد خطة تدريبية مرنة' },
    { step: 3, title: 'تنفيذ تفاعلي', description: 'استخدام تقنيات التعلم النشط' },
    { step: 4, title: 'تقييم', description: 'قياس الأثر والتقدم' },
    { step: 5, title: 'متابعة ودعم', description: 'دعم مستمر بعد التدريب' }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          نُحوّل التعلم إلى تغيير حقيقي في الأداء
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              نؤمن أن التدريب ليس مجرد نقل معرفة، بل عملية تطوير متكاملة تبدأ بفهم الاحتياج 
              وتنتهي بقياس الأثر. برامجنا التدريبية تعتمد على مبادئ المشاركة، التطبيق العملي، 
              والتفاعل الواقعي، لتزويد الأفراد والمؤسسات بمهارات عملية قابلة للتنفيذ في بيئات العمل الفلسطينية.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex justify-between items-center">
              {trainingCycle.map((item, index) => (
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