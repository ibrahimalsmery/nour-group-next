import Card from '@/app/components/ui/Card'

export default function SuccessStories() {
  const stories = [
    {
      title: 'برنامج تطوير القيادات الشابة في البلديات',
      impact: 'تأهيل 50 قائد شاب في 15 بلدية محلية',
      quote: 'ساعدنا البرنامج على تطوير مهارات القيادة واتخاذ القرارات الاستراتيجية.'
    },
    {
      title: 'تدريب النساء الرياديات في المشاريع الصغيرة',
      impact: 'تمكين 100 امرأة ريادية في قطاع غزة والضفة الغربية',
      quote: 'اكتسبت مهارات إدارية ومحاسبية ساعدتني في تطوير مشروعي الصغير.'
    },
    {
      title: 'برنامج التحول الرقمي للهيئات المحلية',
      impact: 'رقمنة عمليات 20 هيئة محلية',
      quote: 'التحول الرقمي ساهم في رفع كفاءة الخدمات المقدمة للمواطنين.'
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          تجارب ناجحة... أثرها مستمر
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-4 mx-auto">
                ✓
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{story.title}</h3>
              <p className="text-gold-600 font-semibold mb-4">{story.impact}</p>
              <p className="text-gray-600 italic border-r-4 border-gold-500 pr-4">
                "{story.quote}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}