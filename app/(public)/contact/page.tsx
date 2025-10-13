import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'شركة النور للدراسات والتدريب|التواصل',
    description: 'شركة النور للدراسات والتدريب - شركة مساهمة خصوصية محدودة تأسست عام 2007',
}
function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <section id="contact" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-[var(--text-color)]">اتصل بنا</h2>
                <div className="grid md:grid-cols-1 gap-8">

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
                            <button type="submit" className="bg-[var(--second-color)] hover:bg-[var(--second-color)]/90 text-white  px-6 py-2 rounded  transition w-full">
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