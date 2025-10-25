import Card from '@/app/components/ui/Card'

export default function SuccessStories() {
  const stories = [
    {
      title: 'مشروع رقمنة مدارس القرى النائية',
      partners: 'وزارة التربية والتعليم',
      impact: 'وصول التعليم الرقمي لـ 50 مدرسة في المناطق النائية',
      beneficiaries: '5,000+ طالب وطالبة'
    },
    {
      title: 'تعاون مع وزارة التربية والتعليم',
      partners: 'وزارة التربية والتعليم',
      impact: 'تدريب 500 معلم على استخدام المنصات الرقمية',
      beneficiaries: '20,000+ طالب مستفيد'
    },
    {
      title: 'إنتاج محتوى رقمي لمبادرة تعليمية',
      partners: 'منظمة دولية للتنمية',
      impact: 'تطوير 100 درس تفاعلي باللغة العربية',
      beneficiaries: '10,000+ مستخدم'
    },
    {
      title: 'شراكة مع شركة تقنية ناشئة',
      partners: 'شركة EdTech ناشئة',
      impact: 'تطوير تطبيق تعليمي مبتكر للرياضيات',
      beneficiaries: '3,000+ طالب'
    }
  ]

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          استثمارات أحدثت فرقًا حقيقيًا
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
                  <p className="text-gold-600 font-semibold">{story.partners}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-1">الأثر:</h4>
                  <p className="text-gray-600 text-sm">{story.impact}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gold-600 mb-1">المستفيدون:</h4>
                  <p className="text-gold-700 text-sm font-semibold">{story.beneficiaries}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}