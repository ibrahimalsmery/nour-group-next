export default function SectorsSection() {
  const sectors = [
    {
      category: 'القطاع التعليمي والتدريبي',
      icon: '🎓',
      examples: [
        'المدارس والمؤسسات التعليمية',
        'الجامعات ومراكز التعليم العالي',
        'مؤسسات التدريب المهني والتقني'
      ]
    },
    {
      category: 'القطاع الحكومي والإداري',
      icon: '🏛️',
      examples: [
        'وزارات التعليم، التنمية، والعمل',
        'البلديات والسلطات المحلية (للتدريب الإلكتروني للموظفين)'
      ]
    },
    {
      category: 'القطاع الخاص',
      icon: '💼',
      examples: [
        'الشركات والمؤسسات التي تستثمر في التعليم كجزء من مسؤوليتها المجتمعية (CSR)',
        'شركات التقنية وتكنولوجيا المعلومات (ICT)'
      ]
    },
    {
      category: 'المنظمات غير الحكومية والدولية',
      icon: '🌍',
      examples: [
        'المنظمات التنموية المهتمة بالالتعليم والتقنية والابتكار'
      ]
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          نُحدث أثرًا في كل قطاع يرتبط بالمعرفة
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {sectors.map((sector, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border-r-4 border-gold-500">
              <div className="flex items-center space-x-4 space-x-reverse mb-4">
                <div className="text-3xl">{sector.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900">{sector.category}</h3>
              </div>
              <ul className="space-y-2">
                {sector.examples.map((example, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="ml-2 text-gold-600">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700">
            كل قطاع لديه فرصة استثمارية في التعليم الرقمي — من التطوير إلى التشغيل إلى التوسّع
          </p>
        </div>
      </div>
    </section>
  )
}