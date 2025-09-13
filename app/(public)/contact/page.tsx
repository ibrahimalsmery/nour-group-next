import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'شركة النور للدراسات والتدريب|التواصل',
  description: 'شركة النور للدراسات والتدريب - شركة مساهمة خصوصية محدودة تأسست عام 2007',
}
function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <section id="contact" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-[var(--text-color)] -800">اتصل بنا</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)] -700">البيانات القانونية ووسائل الاتصال</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="font-bold">الاسم القانوني للشركة:</p>
                                <p>شركة النور للدراسات والتدريب م. خ. م</p>
                            </div>
                            <div>
                                <p className="font-bold">رقم تسجيل الشركة:</p>
                                <p>563143916</p>
                            </div>
                            <div>
                                <p className="font-bold">تاريخ تأسيس الشركة:</p>
                                <p>4/10/2007</p>
                            </div>
                            <div>
                                <p className="font-bold">اسم المسؤول:</p>
                                <p>د. زياد ذياب مزهر</p>
                            </div>
                            <div>
                                <p className="font-bold">المنصب الوظيفي:</p>
                                <p>رئيس مجلس الإدارة والمدير العام</p>
                            </div>
                            <div>
                                <p className="font-bold">العنوان:</p>
                                <p>فلسطين</p>
                            </div>
                            <div>
                                <p className="font-bold">هاتف Ooredoo:</p>
                                <p>0599748739</p>
                            </div>
                            <div>
                                <p className="font-bold">هاتف Ooredoo:</p>
                                <p>0566748739</p>
                            </div>
                            <div>
                                <p className="font-bold">البريد الإلكتروني:</p>
                                <p>ziyadmezher@gmail.com</p>
                                <p>zmezher@hotmil.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)] -700">أرسل رسالة</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block mb-1 font-bold">الاسم</label>
                                <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label className="block mb-1 font-bold">البريد الإلكتروني</label>
                                <input type="email" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label className="block mb-1 font-bold">الهاتف</label>
                                <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div>
                                <label className="block mb-1 font-bold">الرسالة</label>
                                <textarea rows={5} className="w-full p-2 border border-gray-300 rounded"></textarea>
                            </div>
                            <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
                                إرسال
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Page;