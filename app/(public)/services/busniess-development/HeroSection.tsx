import Button from '@/app/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          نساعدك على النمو... بخطط ذكية وشراكات فاعلة
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
          في مجموعة النور الاستشارية، نعمل مع الشركات والمؤسسات لتمكينها من تحقيق نمو مستدام 
          ومؤثر من خلال حلول تطوير أعمال مبنية على التحليل، الابتكار، والتخطيط الاستراتيجي.
          نُسهم في بناء شركات أقوى، أكثر كفاءة، وأكثر قدرة على التنافس في السوق الفلسطيني والإقليمي.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg">
            ابدأ تطوير عملك الآن
          </Button>
          <Button variant="outline" size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            احجز استشارتك المجانية
          </Button>
        </div>
      </div>
    </section>
  )
}