export default function BusinessVision() {
  const developmentCycle = [
    { step: 1, title: 'التحليل السوقي', description: 'دراسة السوق والمنافسين' },
    { step: 2, title: 'التخطيط الاستراتيجي', description: 'وضع خطة النمو' },
    { step: 3, title: 'التنفيذ', description: 'تطبيق الاستراتيجيات' },
    { step: 4, title: 'التحالفات', description: 'بناء الشراكات الاستراتيجية' },
    { step: 5, title: 'النمو', description: 'تحقيق التوسع المستدام' }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          نُعزّز النمو عبر الرؤية والابتكار والشراكة
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              تجمع مجموعة النور بين المنهج العلمي والخبرة الميدانية لتطوير استراتيجيات تُمكّن 
              المؤسسات من التكيّف مع التغيرات السوقية وتحقيق النمو الفعّال.
              نؤمن أن تطوير الأعمال لا يعني فقط زيادة الأرباح، بل بناء منظمات قادرة على التجديد والاستدامة.
            </p>
          </div>
          
          <div className="relative">
            <div className="flex justify-between items-center">
              {developmentCycle.map((item, index) => (
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