"use client";
import { useState } from "react";

function Sectors() {
    const [selectedSector, setSelectedSector] = useState<string>('all');

    // بيانات القطاعات
    const sectors = [
        {
            category: 'القطاعات الاقتصادية والتنموية',
            items: [
                'الأنشطة التجارية والخدمية',
                'القطاع الصناعي',
                'القطاع الزراعي والثروة الحيوانية والسمكية',
                'قطاع الطاقة والكهرباء',
                'قطاع المصارف والتأمين والأوراق المالية'
            ],
            color: 'bg-green-100 border-green-300',
            icon: '🏢'
        },
        {
            category: 'قطاعات البنية التحتية والخدمات',
            items: [
                'قطاع الإنشاءات والبناء',
                'قطاع النقل والمواصلات',
                'قطاع الموارد المائية والصرف الصحي',
                'قطاع البيئة'
            ],
            color: 'bg-blue-100 border-blue-300',
            icon: '🏗️'
        },
        {
            category: 'القطاعات الاجتماعية والخدمية',
            items: [
                'القطاع الصحي',
                'قطاع التعليم والتدريب المهني والتقني',
                'قطاع المرأة والطفل',
                'قطاع الأشخاص ذوي الإعاقة وكبار السن',
                'قطاع الثقافة والترفيه',
                'المجتمع المحلي'
            ],
            color: 'bg-purple-100 border-purple-300',
            icon: '👥'
        },
        {
            category: 'القطاعات الإدارية والحكومية',
            items: [
                'قطاع البلديات والسلطات المحلية',
                'القطاع العام',
                'قطاع الأمن العام'
            ],
            color: 'bg-red-100 border-red-300',
            icon: '🏛️'
        },
        {
            category: 'القطاعات التقنية والمعرفية',
            items: [
                'قطاع الاتصالات وتكنولوجيا المعلومات',
                'قطاع السياحة والنشاط الفندقي'
            ],
            color: 'bg-indigo-100 border-indigo-300',
            icon: '💻'
        }
    ];
    return (
        <>
            {/* القطاعات */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12">
                        نغطي جميع القطاعات التي تصنع مستقبل فلسطين
                    </h2>
                    <div className="space-y-6">
                        {sectors.map((sectorGroup, index) => (
                            <div key={index} className={`border-2 rounded-2xl p-6 ${sectorGroup.color}`}>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="text-2xl">{sectorGroup.icon}</span>
                                    <h3 className="text-2xl font-bold text-gray-800">{sectorGroup.category}</h3>
                                </div>
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                                    {sectorGroup.items.map((item, itemIndex) => (
                                        <div key={itemIndex} className="flex items-center gap-2 p-3 bg-white rounded-lg">
                                            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                            <span className="text-gray-700">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Sectors;