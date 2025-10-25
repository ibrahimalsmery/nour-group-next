import Card from '@/app/components/ui/Card'

export default function ProgramTypes() {
  const programTypes = [
    {
      icon: '🎯',
      title: 'برامج تدريبية متخصصة',
      description: 'تصميم برامج متعمقة تستهدف مهارات محددة في مجالات الإدارة، التنمية، التكنولوجيا، والقطاعات الفنية.'
    },
    {
      icon: '👥',
      title: 'التدريب الوجاهي (حضوري)',
      description: 'جلسات تدريبية عملية داخل القاعات أو في مواقع العمل، تركز على التفاعل المباشر والممارسة الواقعية.'
    },
    {
      icon: '💻',
      title: 'التدريب الأونلاين (عن بُعد)',
      description: 'برامج إلكترونية مرنة تتيح الوصول إلى المحتوى من أي مكان عبر منصات تفاعلية.'
    },
    {
      icon: '🔄',
      title: 'التدريب المدمج',
      description: 'مزيج متكامل بين التدريب الحضوري والإلكتروني لضمان المرونة والتطبيق العملي.'
    },
    {
      icon: '📚',
      title: 'تطوير المواد التدريبية',
      description: 'تصميم مواد تعليمية وأدلة تدريبية مخصصة للمؤسسات والجهات المانحة وفق أحدث المعايير.'
    },
    {
      icon: '⚡',
      title: 'التدريب حسب الطلب',
      description: 'برامج مصممة خصيصًا بناءً على احتياجات المؤسسة بعد دراسة تحليلية دقيقة.'
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          نُقدّم التدريب... بالطريقة التي تناسبك
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programTypes.map((program, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{program.title}</h3>
              <p className="text-gray-600 leading-relaxed">{program.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}