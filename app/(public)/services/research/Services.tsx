"use client"
import { useState } from "react";

function Services() {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    // بيانات الخدمات
    const researchServices = [
        {
            id: 'baseline',
            title: 'إعداد دراسات خط الأساس',
            description: 'جمع وتحليل بيانات لتحديد الوضع الحالي للمشاريع والبرامج.',
            icon: '📊'
        },
        {
            id: 'feasibility',
            title: 'دراسات الجدوى الاقتصادية والفنية',
            description: 'تقييم شامل لجدوى المشاريع من الجوانب الاقتصادية والفنية.',
            icon: '💰'
        },
        {
            id: 'needs',
            title: 'دراسات تقييم الاحتياجات',
            description: 'مساعدة المؤسسات على تحديد أولوياتها واستراتيجياتها.',
            icon: '🎯'
        },
        {
            id: 'market',
            title: 'دراسات السوق',
            description: 'تحليل الاتجاهات والمنافسة وسلوك المستهلك لدعم القرارات التسويقية.',
            icon: '📈'
        },
        {
            id: 'field',
            title: 'الأبحاث الميدانية والمسحية',
            description: 'جمع بيانات كمية ونوعية لدعم اتخاذ القرار.',
            icon: '🔍'
        },
        {
            id: 'risk',
            title: 'دراسات تقييم المخاطر',
            description: 'تحديد وتحليل وإدارة المخاطر المحتملة.',
            icon: '⚠️'
        },
        {
            id: 'policy',
            title: 'أوراق الحقائق والموقف',
            description: 'إعداد تقارير مختصرة ومرجعية تدعم صناع القرار.',
            icon: '📄'
        }
    ];
    return (<>
        {/* الخدمات */}
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
                    نقدّم لك حزمة متكاملة من خدمات البحث والتحليل
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {researchServices.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300 border border-gray-200"
                        >
                            <div className="text-3xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                            <p className="text-gray-600 mb-4">{service.description}</p>
                            <button
                                onClick={() => setSelectedService(service.id)}
                                className="text-gold-600 hover:text-gold-700 font-semibold text-sm flex items-center gap-2"
                            >
                                اقرأ المزيد
                                <span>→</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>);
}

export default Services;