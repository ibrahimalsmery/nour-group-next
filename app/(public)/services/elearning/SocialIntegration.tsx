import Card from '@/app/components/ui/Card'

export default function SocialIntegration() {
    const socialPlatforms = [
        {
            name: 'LinkedIn',
            icon: '💼',
            purpose: 'منصة استثمارية موجهة للشركاء والممولين',
            content: 'تقارير الأثر، قصص الشراكات، مقاطع من المشاريع، تحليلات سوق EdTech'
        },
        {
            name: 'Facebook',
            icon: '👥',
            purpose: 'تفاعل مجتمعي مع المدارس والأهالي',
            content: 'منشورات تعريفية بالمنصة، صور أنشطة ميدانية، بث مباشر عن التعليم الرقمي'
        },
        {
            name: 'Instagram',
            icon: '📸',
            purpose: 'محتوى بصري جذاب وممتع',
            content: 'صور وفيديوهات للطلبة أثناء استخدام التطبيق، "نصيحة رقمية"، اقتباسات تحفيزية'
        },
        {
            name: 'X (Twitter)',
            icon: '🐦',
            purpose: 'منصة الأخبار والتعليم السريع',
            content: 'تغريدات عن المبادرات، الروابط للأبحاث، إحصاءات التعليم الرقمي'
        },
        {
            name: 'YouTube',
            icon: '🎥',
            purpose: 'منصة المحتوى التعليمي الطويل',
            content: 'دروس قصيرة من المنصة، مقابلات مع مطوري المحتوى، فيديوهات تعريفية بالمشاريع'
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
                    تواصل مع مجتمع التعليم الرقمي
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
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                <div className="text-center p-8 bg-blue-50 rounded-2xl">
                    <h3 className="text-2xl font-semibold text-blue-900 mb-4">
                        انضم إلى مجتمع التعليم الرقمي
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        تابع مبادرات التعليم الرقمي في مجموعة النور وكن جزءًا من التحول التعليمي
                    </p>
                    <div className="flex justify-center space-x-6 space-x-reverse text-2xl mb-4">
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" title="LinkedIn">💼</a>
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" title="Facebook">👥</a>
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" title="Instagram">📸</a>
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" title="Twitter">🐦</a>
                        <a href="#" className="text-blue-600 hover:text-blue-800 transition-colors" title="YouTube">🎥</a>
                    </div>
                    <div className="flex justify-center space-x-4 space-x-reverse text-sm text-gray-500">
                        <span>#تعليم_رقمي_النور</span>
                        <span>#AlNour_EdTech</span>
                        <span>#تعلم_مدرستي_في_جوالي</span>
                    </div>
                </div>
            </div>
        </section>
    )
}