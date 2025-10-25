export default function SectorsSection() {
  const sectors: Array<{ category: string; color: string; examples: string[] }> = [
    {
      category: 'القطاعات الاقتصادية والإنتاجية',
      color: 'green',
      examples: [
        'الأنشطة التجارية والخدمية',
        'القطاع الصناعي',
        'القطاع الزراعي والثروة الحيوانية والسمكية',
        'قطاع الطاقة والكهرباء',
        'قطاع المصارف والتأمين والأوراق المالية'
      ]
    },
    {
      category: 'قطاعات البنية التحتية والخدمات',
      color: 'blue',
      examples: [
        'الإنشاءات والبناء',
        'النقل والمواصلات',
        'الموارد المائية والصرف الصحي',
        'قطاع البيئة'
      ]
    },
    {
      category: 'القطاعات الاجتماعية والتعليمية',
      color: 'purple',
      examples: [
        'القطاع الصحي',
        'قطاع التعليم والتدريب المهني والتقني',
        'قطاع المرأة والطفل',
        'الأشخاص ذوي الإعاقة وكبار السن'
      ]
    },
    {
      category: 'القطاعات الحكومية والإدارية',
      color: 'orange',
      examples: [
        'البلديات والسلطات المحلية',
        'القطاع العام',
        'قطاع الأمن العام'
      ]
    },
    {
      category: 'القطاعات التقنية والمعرفية',
      color: 'gray',
      examples: [
        'الاتصالات وتكنولوجيا المعلومات',
        'السياحة والنشاط الفندقي'
      ]
    }
  ]

  const colorMap: Record<string, string> = {
    green: 'bg-green-50 border-green-200 text-green-800',
    blue: 'bg-blue-50 border-blue-200 text-blue-800',
    purple: 'bg-purple-50 border-purple-200 text-purple-800',
    orange: 'bg-orange-50 border-orange-200 text-orange-800',
    gray: 'bg-gray-50 border-gray-200 text-gray-800'
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          نوفّر الكفاءات لجميع القطاعات التي تنهض بفلسطين
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className={`border-2 rounded-lg p-6 ${colorMap[sector.color]} transition-transform hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-4">{sector.category}</h3>
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

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg border-r-4 border-gold-500">
            <h4 className="font-semibold text-blue-900 mb-3">مثال تطبيقي للقطاع الصحي:</h4>
            <p className="text-gray-600">
              نوفّر كفاءات للقطاع الصحي تشمل الأطباء، الممرضين، ومديري المشاريع الصحية.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg border-r-4 border-gold-500">
            <h4 className="font-semibold text-blue-900 mb-3">مثال تطبيقي للقطاع التعليمي:</h4>
            <p className="text-gray-600">
              ندعم قطاع التعليم عبر توفير المدربين والمشرفين الفنيين.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}