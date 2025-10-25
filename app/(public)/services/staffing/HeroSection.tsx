import Button from '@/app/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          نصل الكفاءات بفرص النجاح
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
          في مجموعة النور الاستشارية، نؤمن أن النجاح المؤسسي يبدأ بالإنسان.
          نوفّر حلولًا متكاملة في التوظيف وإدارة الموارد البشرية لمساعدة المؤسسات 
          على اختيار الكفاءات المناسبة، وتطوير فرق العمل، وبناء أنظمة تشغيل بشرية مرنة وفعّالة.
        </p>
        <Button variant="gold" size="lg">
          قدّم طلب توظيف أو اطلب كفاءات الآن
        </Button>
      </div>
    </section>
  )
}