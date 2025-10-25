import Button from '@/app/components/ui/Button'

export default function CTASection() {
  return (
    <section className="py-16 px-4 bg-blue-900 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          هل ترغب بتطوير مهارات فريقك؟
        </h2>
        
        <div className="bg-white rounded-lg p-8 max-w-2xl mx-auto mt-8">
          <form className="space-y-4 text-right">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="اسم الجهة"
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
              />
              <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-800">
                <option>نوع التدريب</option>
                <option>وجاهي</option>
                <option>أونلاين</option>
                <option>مدمج</option>
              </select>
            </div>
            
            <select className="w-full p-3 border border-gray-300 rounded-lg text-gray-800">
              <option>القطاع</option>
              <option>اقتصادي وتنموي</option>
              <option>بنية تحتية</option>
              <option>اجتماعي وإنساني</option>
              <option>تعليمي وتدريبي</option>
              <option>تقني ومعرفي</option>
            </select>
            
            <textarea 
              placeholder="رسالة مختصرة"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg text-gray-800"
            ></textarea>
            
            <Button variant="gold" size="lg" className="w-full">
              اطلب برنامجًا تدريبيًا مخصصًا
            </Button>
          </form>
        </div>
        
        <div className="mt-8 flex justify-center space-x-6 space-x-reverse">
          <span className="cursor-pointer hover:text-gold-400">LinkedIn</span>
          <span className="cursor-pointer hover:text-gold-400">Facebook</span>
          <span className="cursor-pointer hover:text-gold-400">YouTube</span>
          <span className="cursor-pointer hover:text-gold-400">Instagram</span>
        </div>
        
        <p className="mt-6 text-blue-200">
          تابع قسم التدريب في مجموعة النور لتتعرف على أحدث البرامج والفرص التطويرية.
        </p>
      </div>
    </section>
  )
}