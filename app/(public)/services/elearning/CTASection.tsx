"use client"
import Button from '@/app/components/ui/Button'
import { useState } from 'react'

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    interest: '',
    message: ''
  })

  const handleChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e:any) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  return (
    <section className="py-16 px-4 bg-blue-900 text-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          هل ترغب في أن تكون جزءًا من التحول الرقمي في التعليم؟
        </h2>
        <p className="text-xl text-center text-blue-200 mb-12 max-w-2xl mx-auto">
          سواء كنت مؤسسة تعليمية، مستثمرًا، أو جهة مانحة، يمكنك الانضمام إلينا في بناء مستقبل التعليم في فلسطين.
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
                <label className="block text-gray-700 mb-2">اسم المؤسسة/الجهة</label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">مجال الاهتمام</label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
              >
                <option value="">اختر مجال اهتمامك</option>
                <option value="investment">الاستثمار في التعليم الرقمي</option>
                <option value="partnership">الشراكة في المشاريع</option>
                <option value="platform">استخدام المنصة التعليمية</option>
                <option value="consultation">استشارة في التحول الرقمي</option>
                <option value="training">تدريب المعلمين</option>
                <option value="content">إنتاج المحتوى التعليمي</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-700 mb-2">الرسالة</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                placeholder="أخبرنا عن اهتمامك بالتعليم الرقمي وكيف يمكننا التعاون..."
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
              ></textarea>
            </div>

            <Button type="submit" variant="gold" size="lg" className="w-full">
              تواصل معنا للاستثمار في التعليم الرقمي
            </Button>
          </form>
        </div>

        {/* Additional Resources */}
        <div className="text-center mt-8">
          <div className="flex justify-center space-x-6 space-x-reverse mb-6">
            <a href="#" className="text-blue-200 hover:text-white underline text-sm">
              ?? تحميل كتيب "الاستثمار في التعليم الرقمي – مجموعة النور (PDF)"
            </a>
            <a href="#" className="text-blue-200 hover:text-white underline text-sm">
              ?? طلب عرض تقديمي مفصل
            </a>
          </div>

          <p className="text-blue-200">
            ابدأ شراكتك التعليمية اليوم وكن جزءًا من بناء مستقبل التعليم في فلسطين
          </p>
        </div>
      </div>
    </section>
  )
}