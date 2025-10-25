import Card from '@/app/components/ui/Card'
import Button from '@/app/components/ui/Button'

export default function ServicesGrid() {
  const services = [
    {
      icon: '🖥️',
      title: 'تطوير المنصات التعليمية الرقمية',
      description: 'تصميم وإدارة منصات تعليمية تفاعلية مثل "افتح يا سمسم – تعلم! مدرستي في جوالي" لتمكين التعليم الذاتي والمدرسي.'
    },
    {
      icon: '📊',
      title: 'تحليل الاستثمار في التعليم الرقمي',
      description: 'إعداد دراسات جدوى اقتصادية وتقنية لمشاريع EdTech في السوق الفلسطيني.'
    },
    {
      icon: '🎬',
      title: 'إنتاج المحتوى التعليمي الرقمي',
      description: 'تطوير مواد تفاعلية (فيديوهات، أنشطة، تطبيقات) باللغتين العربية والإنجليزية، تراعي المناهج المحلية.'
    },
    {
      icon: '🔄',
      title: 'التحول الرقمي للمؤسسات التعليمية',
      description: 'دعم المدارس والجامعات للتحول إلى بيئة رقمية متكاملة من حيث الأنظمة والبنية التحتية.'
    },
    {
      icon: '👨‍🏫',
      title: 'تدريب المعلمين والمتخصصين',
      description: 'بناء قدرات التربويين في تصميم الدروس التفاعلية، إدارة الفصول الافتراضية، وتقييم الطلبة إلكترونيًا.'
    },
    {
      icon: '🤝',
      title: 'الشراكات الاستثمارية في EdTech',
      description: 'تسهيل الربط بين المستثمرين والمشاريع التعليمية الرقمية الناشئة، ودعم استدامة المبادرات.'
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          حلول متكاملة لبناء منظومة تعليم رقمي فعّال
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow h-full flex flex-col">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed mb-4 flex-grow">{service.description}</p>
              <Button variant="outline" size="sm">
                اكتشف المزيد
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}