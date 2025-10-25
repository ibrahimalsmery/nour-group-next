import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'

export default function ServicesGrid() {
  const services = [
    {
      icon: '🚀',
      title: 'استراتيجيات النمو المبتكرة',
      description: 'تصميم استراتيجيات تسويقية وتنافسية قائمة على تحليل البيانات والاتجاهات السوقية لدعم التوسع والنمو المستدام.'
    },
    {
      icon: '💡',
      title: 'دعم الشركات الناشئة',
      description: 'مرافقة الشركات في مراحلها الأولى عبر الإرشاد، دراسات الجدوى، نمذجة الأعمال، وبناء القدرات الإدارية والمالية.'
    },
    {
      icon: '🤝',
      title: 'الشراكات والتحالفات الاستراتيجية',
      description: 'تمكين الشركات من بناء علاقات تعاون وشراكات مع جهات محلية ودولية لتعزيز التوسع والتأثير.'
    },
    {
      icon: '🏛️',
      title: 'التمكين المؤسسي',
      description: 'تطوير الهيكل الإداري، العمليات الداخلية، وثقافة الأداء لضمان جاهزية المؤسسة للنمو.'
    },
    {
      icon: '💎',
      title: 'إدارة الابتكار وريادة الأعمال',
      description: 'مساعدة المؤسسات على تطوير منتجات وخدمات جديدة وتبني نماذج أعمال مبتكرة.'
    },
    {
      icon: '📊',
      title: 'التخطيط الاستراتيجي والتشغيلي',
      description: 'إعداد خطط متكاملة لتحقيق أهداف النمو وفق مؤشرات أداء واقعية وقابلة للقياس.'
    },
    {
      icon: '🔍',
      title: 'تحليل الأسواق وتطوير المنتجات',
      description: 'إجراء دراسات سوقية لتحديد فرص جديدة وتحسين المنتجات الحالية بما يتناسب مع احتياجات السوق.'
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          نقدّم لك حزمة متكاملة من حلول تطوير الأعمال
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{service.description}</p>
              <Button variant="outline" size="sm">
                احجز استشارة
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}