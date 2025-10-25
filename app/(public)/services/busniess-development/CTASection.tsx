"use client";
import Button from '@/app/components/ui/Button'
import { EventHandler, ReactEventHandler, useState } from 'react'

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        sector: '',
        service: '',
        message: ''
    })

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e: any) => {
        e.preventDefault()
        // Handle form submission
        console.log('Form submitted:', formData)
    }

    return (
        <section className="py-16 px-4 bg-blue-900 text-white">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
                    هل ترغب في توسيع أعمالك أو تأسيس مشروعك القادم؟
                </h2>
                <p className="text-xl text-center text-blue-200 mb-12 max-w-2xl mx-auto">
                    تواصل معنا لنساعدك على بناء خطة نمو متكاملة، وتطوير شراكات استراتيجية تحقق طموحاتك.
                </p>

                <div className="bg-white rounded-lg p-8">
                    <form onSubmit={handleSubmit} className="space-y-6 text-right">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">الاسم الكامل</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                    required
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">رقم الجوال</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">اسم المؤسسة</label>
                                <input
                                    type="text"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 mb-2">القطاع</label>
                                <select
                                    name="sector"
                                    value={formData.sector}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                >
                                    <option value="">اختر القطاع</option>
                                    <option value="economic">اقتصادي وإنتاجي</option>
                                    <option value="entrepreneurial">ريادي وشركات صغيرة</option>
                                    <option value="support">قطاعات داعمة</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">نوع الخدمة المطلوبة</label>
                                <select
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                                >
                                    <option value="">اختر الخدمة</option>
                                    <option value="growth">استراتيجيات النمو</option>
                                    <option value="startup">دعم الشركات الناشئة</option>
                                    <option value="partnership">الشراكات الاستراتيجية</option>
                                    <option value="empowerment">التمكين المؤسسي</option>
                                    <option value="innovation">إدارة الابتكار</option>
                                    <option value="planning">التخطيط الاستراتيجي</option>
                                    <option value="analysis">تحليل الأسواق</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 mb-2">الرسالة</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="أخبرنا عن احتياجاتك وتطلعاتك..."
                                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                            ></textarea>
                        </div>

                        <Button type="submit" variant="gold" size="lg" className="w-full">
                            ابدأ الآن / احجز استشارة تطوير أعمال
                        </Button>
                    </form>
                </div>

                {/* Contact Channels */}
                <div className="text-center mt-8">
                    <p className="text-blue-200 mb-4">قنوات التواصل:</p>
                    <div className="flex justify-center space-x-6 space-x-reverse text-blue-200">
                        <span>?? البريد الإلكتروني</span>
                        <span>?? الهاتف</span>
                        <span>?? نموذج تواصل مباشر</span>
                        <span>?? WhatsApp للأعمال</span>
                    </div>
                </div>
            </div>
        </section>
    )
}