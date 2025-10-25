"use client"
import Button from '@/app/components/ui/Button'
import { useState } from 'react'

export default function CTASection() {
    const [activeTab, setActiveTab] = useState('individuals')

    return (
        <section className="py-16 px-4 bg-blue-900 text-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                    هل تبحث عن كفاءات؟ أم عن فرصة عمل؟
                </h2>

                {/* Tab Navigation */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white rounded-lg p-1 flex">
                        <button
                            onClick={() => setActiveTab('individuals')}
                            className={`px-6 py-3 rounded-md font-semibold transition-colors ${activeTab === 'individuals'
                                ? 'bg-gold-500 text-black  border-2'
                                : 'text-blue-900 hover:bg-blue-50'
                                }`}
                        >
                            للأفراد
                        </button>
                        <button
                            onClick={() => setActiveTab('companies')}
                            className={`px-6 py-3 rounded-md font-semibold transition-colors ${activeTab === 'companies'
                                ? 'bg-gold-500 text-black border-2'
                                : 'text-blue-900 hover:bg-blue-50'
                                }`}
                        >
                            للمؤسسات
                        </button>
                    </div>
                </div>

                {/* Forms */}
                <div className="bg-white rounded-lg p-8">
                    {activeTab === 'individuals' ? (
                        <div className="text-right">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">قدّم سيرتك الذاتية الآن</h3>
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="الاسم الكامل"
                                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                    />
                                    <input
                                        type="email"
                                        placeholder="البريد الإلكتروني"
                                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="tel"
                                        placeholder="رقم الجوال"
                                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                    />
                                    <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-800">
                                        <option>القطاع</option>
                                        <option>اقتصادي وإنتاجي</option>
                                        <option>بنية تحتية وخدمات</option>
                                        <option>اجتماعي وتعليمي</option>
                                        <option>حكومي وإداري</option>
                                        <option>تقني ومعرفي</option>
                                    </select>
                                </div>

                                <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-800">
                                    <option>نوع الوظيفة المطلوبة</option>
                                    <option>توظيف دائم</option>
                                    <option>عقد مرن</option>
                                    <option>عمل عن بعد</option>
                                    <option>عمل جزئي</option>
                                </select>

                                <textarea
                                    placeholder="رسالة مختصرة عن خبراتك وتطلعاتك"
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                ></textarea>

                                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                                    <p className="text-gray-600 mb-2">ارفع سيرتك الذاتية</p>
                                    <input type="file" className="w-full" accept=".pdf,.doc,.docx" />
                                    <p className="text-sm text-gray-500 mt-2">PDF, DOC, DOCX (حتى 5MB)</p>
                                </div>

                                <Button variant="gold" size="lg" className="w-full">
                                    إرسال الطلب
                                </Button>
                            </form>
                        </div>
                    ) : (
                        <div className="text-right">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">اطلب مرشحين متخصصين</h3>
                            <form className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        placeholder="اسم المؤسسة"
                                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                    />
                                    <input
                                        type="text"
                                        placeholder="اسم المسؤول"
                                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <input
                                        type="email"
                                        placeholder="البريد الإلكتروني"
                                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="رقم الجوال"
                                        className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                    />
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-800">
                                        <option>القطاع</option>
                                        <option>اقتصادي وإنتاجي</option>
                                        <option>بنية تحتية وخدمات</option>
                                        <option>اجتماعي وتعليمي</option>
                                        <option>حكومي وإداري</option>
                                        <option>تقني ومعرفي</option>
                                    </select>
                                    <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-800">
                                        <option>نوع الخدمة المطلوبة</option>
                                        <option>توظيف مهني</option>
                                        <option>عقود مرنة</option>
                                        <option>إدارة موارد بشرية</option>
                                        <option>توفير خبراء</option>
                                        <option>بناء فرق متخصصة</option>
                                        <option>توظيف سريع</option>
                                    </select>
                                </div>

                                <textarea
                                    placeholder="وصف الوظيفة والمتطلبات"
                                    rows={4}
                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                ></textarea>

                                <Button variant="gold" size="lg" className="w-full">
                                    طلب كفاءات
                                </Button>
                            </form>
                        </div>
                    )}
                </div>

                {/* Additional Resources */}
                <div className="mt-8 text-center">
                    <div className="flex justify-center space-x-6 space-x-reverse mb-6">
                        <a href="#" className="text-blue-200 hover:text-white underline">
                            ?? تحميل نموذج طلب كفاءات (PDF)
                        </a>
                        <a href="#" className="text-blue-200 hover:text-white underline">
                            ?? تحميل دليل خدمات التوظيف
                        </a>
                    </div>

                    <div className="flex justify-center space-x-6 space-x-reverse text-blue-200">
                        <span className="cursor-pointer hover:text-white">LinkedIn</span>
                        <span className="cursor-pointer hover:text-white">Facebook</span>
                        <span className="cursor-pointer hover:text-white">Instagram</span>
                        <span className="cursor-pointer hover:text-white">YouTube</span>
                    </div>

                    <p className="mt-6 text-blue-200">
                        تابع قسم التوظيف في مجموعة النور لتعرف أحدث الفرص والكفاءات.
                    </p>
                </div>
            </div>
        </section>
    )
}