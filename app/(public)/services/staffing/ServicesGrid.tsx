import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'

export default function ServicesGrid() {
  const services = [
    {
      icon: '🎯',
      title: 'التوظيف المهني',
      description: 'البحث عن الكفاءات المهنية المتخصصة في مختلف القطاعات، عبر أساليب تقييم دقيقة واختبارات ملاءمة.'
    },
    {
      icon: '📝',
      title: 'العقود المرنة',
      description: 'حلول تشغيل قصيرة أو مؤقتة أو بدوام جزئي لتلبية احتياجات المشاريع الموسمية أو الطارئة.'
    },
    {
      icon: '🏢',
      title: 'إدارة الموارد البشرية بالوكالة',
      description: 'تولّي إدارة الموارد البشرية بالنيابة عن المؤسسات، بما يشمل الرواتب، السياسات، التدريب، والتطوير.'
    },
    {
      icon: '👨‍💼',
      title: 'توفير الخبراء والاستشاريين',
      description: 'ربط المؤسسات بخبراء محليين ودوليين في المجالات التنموية، التقنية، والإدارية.'
    },
    {
      icon: '👥',
      title: 'بناء فرق متخصصة',
      description: 'تشكيل فرق جاهزة للانخراط في مشاريع محددة (إغاثية، تعليمية، هندسية...).'
    },
    {
      icon: '⚡',
      title: 'التوظيف السريع',
      description: 'خدمات عاجلة لتعبئة الشواغر في فترات قصيرة باستخدام قاعدة بيانات النور الواسعة.'
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          حلول شاملة لإدارة الموارد البشرية وتوظيف الكفاءات
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">{service.description}</p>
              <Button variant="outline" size="sm">
                اطلب الخدمة الآن
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}