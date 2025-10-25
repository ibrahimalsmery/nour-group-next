import Button from '@/app/components/ui/Button'
import AppDownload from '@/app/components/ui/AppDownload'

export default function PlatformShowcase() {
  const platformFeatures = [
    'دروس قصيرة تفاعلية في القراءة، العلوم، والمهارات الحياتية',
    'واجهات استخدام سهلة ومناسبة لكل الأعمار',
    'أدوات للمعلمين لتتبع أداء الطلبة',
    'محتوى باللغة العربية مخصص للسياق الفلسطيني'
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-gold-50">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              منصة "افتح يا سمسم – تعلم! مدرستي في جوالي"
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              منصة "افتح يا سمسم" هي مبادرة تعليم رقمي من تطوير مجموعة النور، تهدف إلى إتاحة 
              تعلم ممتع وتفاعلي للأطفال والطلبة عبر الهواتف الذكية والأجهزة اللوحية.
            </p>
            
            <div className="space-y-3 mb-8">
              {platformFeatures.map((feature, index) => (
                <div key={index} className="flex items-center">
                  <span className="ml-3 text-gold-600 text-xl">✓</span>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="gold" size="lg">
                جرّب المنصة الآن
              </Button>
              <Button variant="outline" size="lg">
                سجّل كشريك أو داعم استثماري
              </Button>
            </div>

            {/* App Download Links */}
            <AppDownload />
          </div>
          
          <div className="text-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl inline-block">
              <div className="w-64 h-96 bg-gradient-to-b from-blue-400 to-blue-600 rounded-2xl mx-auto flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <p className="font-semibold">تعلم! مدرستي في جوالي</p>
                  <p className="text-sm mt-2">منصة التعليم الرقمي</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}