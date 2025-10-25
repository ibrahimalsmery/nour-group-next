import Card from '@/app/components/ui/Card'

export default function SuccessStories() {
  const stories = [
    {
      title: 'دعم 10 شركات ناشئة في قطاع التكنولوجيا',
      challenge: 'شركات ناشئة تحتاج إلى تطوير استراتيجيات النمو',
      solution: 'توفير إرشاد استراتيجي وبناء شراكات استثمارية',
      results: 'نمو إيرادات الشركات بنسبة 200% في سنة واحدة'
    },
    {
      title: 'إعداد خطة نمو لشركة زراعية تصديرية',
      challenge: 'شركة زراعية تسعى للتوسع في الأسواق الإقليمية',
      solution: 'تحليل الأسواق وتطوير استراتيجية تصدير شاملة',
      results: 'زيادة حجم الصادرات بنسبة 150% خلال 6 أشهر'
    },
    {
      title: 'تحالف استثماري بين شركات فلسطينية وخليجية',
      challenge: 'بحث عن شركاء استراتيجيين للتوسع الإقليمي',
      solution: 'وساطة وتنسيق لإنشاء تحالف استثماري مشترك',
      results: 'تأسيس تحالف برأس مال 5 ملايين دولار'
    },
    {
      title: 'برنامج تمكين مؤسسي لقطاع الخدمات المالية',
      challenge: 'مؤسسات مالية تحتاج إلى تحديث أنظمتها الإدارية',
      solution: 'تطوير هياكل تنظيمية وتبني تقنيات متقدمة',
      results: 'تحسين الكفاءة التشغيلية بنسبة 40%'
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          شراكات تبني المستقبل
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-start space-x-4 space-x-reverse mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl">
                  ✓
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-900">{story.title}</h3>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">التحدي:</h4>
                  <p className="text-gray-600 text-sm">{story.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">الحل:</h4>
                  <p className="text-gray-600 text-sm">{story.solution}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold-600 mb-1">النتائج:</h4>
                  <p className="text-gold-700 text-sm font-semibold">{story.results}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}