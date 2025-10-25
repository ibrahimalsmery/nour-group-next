import Button from '@/app/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          نُنمّي القدرات... لنصنع مستقبلًا أكثر كفاءة
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
          في مجموعة النور الاستشارية، نقدّم حلولًا تدريبية شاملة مصممة لتلبية احتياجات المؤسسات 
          والأفراد في مختلف القطاعات الفلسطينية. برامجنا تجمع بين الخبرة العملية والمحتوى المحدث 
          وأحدث أساليب التدريب لضمان تطوير حقيقي للأداء وبناء قدرات مستدامة.
        </p>
        <Button variant="gold" size="lg">
          احجز تدريبك الآن أو اطلب برنامجك المخصص
        </Button>
      </div>
    </section>
  )
}