import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: 'شركة النور للدراسات والتدريب|عملاؤنا',
  description: 'شركة النور للدراسات والتدريب - شركة مساهمة خصوصية محدودة تأسست عام 2007',
}
function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <section id="clients" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-[var(--text-color)]">عملاؤنا</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="mb-6">
                        عملت النور كاستشاري استراتيجي لمؤسسات حكومية, دولية أهلية وقطاع خاص منها على سبيل المثال لا الحصر:
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        <div className="p-4 border border-gray-200 rounded-lg text-center">
                            <div className="h-16 mb-2  rounded flex items-center justify-center">
                                <Image
                                    src="/palestine-unversity.png"
                                    alt="جامعة فلسطين"
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p>جامعة فلسطين</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg text-center">
                            <div className="h-16 mb-2  rounded flex items-center justify-center">
                                <Image
                                    src="/iug.png"
                                    alt="الجامعة الإسلامية"
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p>الجامعة الإسلامية</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg text-center">
                            <div className="h-16 mb-2  rounded flex items-center justify-center">
                                <Image
                                    src="/education-ministry.jpg"
                                    alt="وزارة التربية والتعليم"
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p>وزارة التربية والتعليم</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg text-center">
                            <div className="h-16 mb-2  rounded flex items-center justify-center">
                                <Image
                                    src="/unrwa.jpg"
                                    alt="وكالة غوث اللاجئين"
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p>وكالة غوث اللاجئين</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg text-center">
                            <div className="h-16 mb-2  rounded flex items-center justify-center">
                                <Image
                                    src="/palestine-bank.png"
                                    alt="بنك فلسطين"
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p>بنك فلسطين</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg text-center">
                            <div className="h-16 mb-2  rounded flex items-center justify-center">
                                <Image
                                    src="/jawwal.jpg"
                                    alt="شركة جوال"
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p>شركة جوال</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg text-center">
                            <div className="h-16 mb-2  rounded flex items-center justify-center">
                                <Image
                                    src="/world-vision.jpg"
                                    alt="مؤسسة الرؤية العالمية"
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p>مؤسسة الرؤية العالمية</p>
                        </div>
                        <div className="p-4 border border-gray-200 rounded-lg text-center">
                            <div className="h-16 mb-2  rounded flex items-center justify-center">
                                <Image
                                    src="/save-the-children.png"
                                    alt="مؤسسة انقاذ الطفل"
                                    width={60}
                                    height={60}
                                    className=""
                                />
                            </div>
                            <p>مؤسسة انقاذ الطفل</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Page;