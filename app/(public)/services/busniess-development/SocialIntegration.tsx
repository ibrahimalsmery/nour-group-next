import Card from '@/app/components/ui/Card'

export default function SocialIntegration() {
  const socialPlatforms = [
    {
      name: 'LinkedIn',
      icon: '💼',
      purpose: 'المنصة الأساسية لخدمة تطوير الأعمال',
      content: 'تقارير قصيرة عن المشاريع، قصص نجاح، تحليلات نمو السوق'
    },
    {
      name: 'Facebook',
      icon: '👥',
      purpose: 'التفاعل المجتمعي وبناء الثقة المحلية',
      content: 'صور من الدورات، لقاءات ميدانية، احتفالات توقيع شراكات'
    },
    {
      name: 'Instagram',
      icon: '📸',
      purpose: 'محتوى بصري وتسويقي جذاب',
      content: 'إنفوغرافيك نصائح تطوير الأعمال، فيديوهات قصيرة لرواد أعمال'
    },
    {
      name: 'X (Twitter)',
      icon: '🐦',
      purpose: 'نشر رؤى سريعة ومؤشرات اقتصادية',
      content: 'تغريدات تحتوي على حقائق سوقية، روابط للتقارير'
    },
    {
      name: 'YouTube',
      icon: '🎥',
      purpose: 'منصة التعليم والتأثير',
      content: 'فيديوهات قصيرة لبرامج تطوير الأعمال، مقابلات مع خبراء'
    }
  ]

  const latestPosts = [
    {
      platform: 'LinkedIn',
      content: 'تقرير جديد: 5 اتجاهات ستؤثر على نمو الشركات الفلسطينية في 2025',
      link: '#'
    },
    {
      platform: 'Instagram',
      content: 'إنفوغرافيك: كيف تبني شراكات استراتيجية ناجحة',
      link: '#'
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
          منصتنا في مجتمع الأعمال
        </h2>

        {/* Latest Posts */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-center text-blue-800 mb-6">
            آخر منشوراتنا على وسائل التواصل
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {latestPosts.map((post, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-3 space-x-reverse mb-3">
                  <span className="text-2xl">{post.platform === 'LinkedIn' ? '💼' : '📸'}</span>
                  <span className="font-semibold text-blue-900">{post.platform}</span>
                </div>
                <p className="text-gray-700 mb-4">{post.content}</p>
                <a href={post.link} className="text-gold-600 hover:text-gold-700 font-semibold">
                  اقرأ المزيد →
                </a>
              </Card>
            ))}
          </div>
        </div>

        {/* Social Platforms */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialPlatforms.map((platform, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-4xl mb-4">{platform.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 mb-3">{platform.name}</h3>
              <p className="text-gray-600 mb-2 font-semibold">{platform.purpose}</p>
              <p className="text-gray-500 text-sm">{platform.content}</p>
            </Card>
          ))}
        </div>

        {/* Call to Follow */}
        <div className="text-center mt-12 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">
            انضم إلى شبكتنا لتتعرف على أحدث الفرص، المشاريع، والشراكات
          </h3>
          <div className="flex justify-center space-x-6 space-x-reverse text-2xl">
            <a href="#" className="text-blue-600 hover:text-blue-800" title="LinkedIn">💼</a>
            <a href="#" className="text-blue-600 hover:text-blue-800" title="Facebook">👥</a>
            <a href="#" className="text-blue-600 hover:text-blue-800" title="Instagram">📸</a>
            <a href="#" className="text-blue-600 hover:text-blue-800" title="Twitter">🐦</a>
            <a href="#" className="text-blue-600 hover:text-blue-800" title="YouTube">🎥</a>
          </div>
          <p className="text-gray-600 mt-4">
            تابع قسم تطوير الأعمال في مجموعة النور لتتعرف على أحدث البرامج، الفرص، والمشاريع الريادية في فلسطين.
          </p>
        </div>
      </div>
    </section>
  )
}