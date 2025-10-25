import Card from '@/app/components/ui/Card'

export default function SuccessStories() {
  const stories = [
    {
      title: 'توفير 100 موظف في مشروع بنية تحتية',
      client: 'مشروع ممول دوليًا',
      result: 'إكمال المشروع ضمن الجدول الزمني',
      quote: 'ساعدنا فريق النور في توفير الكفاءات المناسبة في الوقت المناسب.'
    },
    {
      title: 'تعاقد مع وزارة التربية',
      client: 'وزارة التربية والتعليم',
      result: 'توظيف مدربين مهنيين مؤهلين',
      quote: 'الكفاءات التي وفرتها النور ساهمت في تطوير برامجنا التدريبية.'
    },
    {
      title: 'تشغيل خبراء طاقة',
      client: 'مشروع تنمية مستدامة',
      result: 'تنفيذ مشروع الطاقة المتجددة بنجاح',
      quote: 'الخبراء الذين قدمتهم النور كانوا على أعلى مستوى من الاحترافية.'
    },
    {
      title: 'تعيين فريق إداري متكامل',
      client: 'إحدى البلديات المحلية',
      result: 'تحسين كفاءة العمليات الإدارية',
      quote: 'الفريق الإداري ساهم في رفع أداء البلدية بشكل ملحوظ.'
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          نُفاخر بشراكاتنا التي بنت فرصًا حقيقية
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
                  <p className="text-gold-600 font-semibold">{story.client}</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{story.result}</p>
              <p className="text-gray-700 italic border-r-4 border-gold-500 pr-4">
                "{story.quote}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}