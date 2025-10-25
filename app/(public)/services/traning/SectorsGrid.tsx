export default function SectorsGrid() {
  const sectors = [
    {
      category: 'القطاعات الاقتصادية والتنموية',
      color: 'green',
      programs: [
        'برامج إدارة المشاريع الصغيرة والمتوسطة',
        'التخطيط المالي وإدارة الأعمال',
        'الزراعة الذكية والأمن الغذائي',
        'الطاقة المتجددة وكفاءة الموارد'
      ]
    },
    {
      category: 'قطاعات البنية التحتية والخدمات',
      color: 'blue',
      programs: [
        'السلامة المهنية وإدارة المخاطر',
        'التشغيل والصيانة الحديثة',
        'التخطيط العمراني والإدارة البيئية'
      ]
    },
    {
      category: 'القطاعات الاجتماعية والإنسانية',
      color: 'purple',
      programs: [
        'تنمية مهارات العاملين في القطاع الصحي',
        'برامج التمكين الاقتصادي للمرأة والشباب',
        'مهارات التواصل وإدارة المبادرات المجتمعية'
      ]
    },
    {
      category: 'القطاعات التعليمية والتدريبية',
      color: 'orange',
      programs: [
        'تطوير مهارات المعلمين',
        'التعليم المهني والتقني الحديث',
        'برامج القيادة الأكاديمية'
      ]
    },
    {
      category: 'القطاعات التقنية والمعرفية',
      color: 'gray',
      programs: [
        'التحول الرقمي في المؤسسات',
        'مهارات استخدام تكنولوجيا المعلومات',
        'الأمن السيبراني وإدارة البيانات'
      ]
    }
  ]

  const colorMap: Record<string, string> = {
    green: 'bg-green-100 border-green-300 text-green-800',
    blue: 'bg-blue-100 border-blue-300 text-blue-800',
    purple: 'bg-purple-100 border-purple-300 text-purple-800',
    orange: 'bg-orange-100 border-orange-300 text-orange-800',
    gray: 'bg-gray-100 border-gray-300 text-gray-800'
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          برامجنا تغطي جميع القطاعات التي تبني المجتمع الفلسطيني
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <div 
              key={index}
              className={`border-2 rounded-lg p-6 ${colorMap[sector.color]} transition-transform hover:scale-105`}
            >
              <h3 className="text-xl font-semibold mb-4">{sector.category}</h3>
              <ul className="space-y-2">
                {sector.programs.map((program, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="ml-2">•</span>
                    <span>{program}</span>
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