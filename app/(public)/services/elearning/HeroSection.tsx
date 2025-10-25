import Button from '@/app/components/ui/Button'

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          التعليم الرقمي... استثمار في المستقبل
        </h1>
        <p className="text-xl md:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto">
          في مجموعة النور الاستشارية، نؤمن أن التعليم الرقمي هو أحد أعمدة التنمية المستدامة، 
          وركيزة أساسية لبناء اقتصاد المعرفة في فلسطين. نقود مشاريع استثمارية مبتكرة في مجال 
          تكنولوجيا التعليم (EdTech) تجمع بين المحتوى التربوي، الأدوات التقنية، والتدريب التفاعلي.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="gold" size="lg">
            استثمر في التعليم الرقمي معنا
          </Button>
          <Button variant="outline" size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
            اكتشف منصتنا التعليمية
          </Button>
        </div>
      </div>
    </section>
  )
}