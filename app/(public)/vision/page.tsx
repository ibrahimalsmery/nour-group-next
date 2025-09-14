import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'شركة النور للدراسات والتدريب|الرؤية والرسالة',
    description: 'شركة النور للدراسات والتدريب - شركة مساهمة خصوصية محدودة تأسست عام 2007',
}
function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <section id="vision" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-[var(--text-color)]">الرؤية والرسالة</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)] -700">الرؤية</h3>
                        <p>
                            أن تكون النور المؤسسة الرائدة في تقديم الحلول التدريبية، البحثية، والاستشارية المتكاملة في فلسطين والمنطقة، مع التميز في توظيف الكفاءات المتميزة، الابتكار الرقمي، والالتزام بأعلى معايير الجودة الدولية، لتكون شريكًا موثوقًا في تمكين الأفراد وتعزيز الأداء المؤسسي ودعم التنمية المستدامة.
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)] -700">الرسالة</h3>
                        <p>
                            المساهمة في تنمية وتطوير وبناء قدرات مؤسسات المجتمع وأفراده للوصول إلى تحقيق الإدارة السليمة المتكاملة للنمو والحماية والاستمرارية، عبر بناء وتطوير السياسات، وإعداد الخطط والدراسات، وبناء القدرات وفق نظم الجودة العالمية، من خلال الاعتماد على المشاركة التفاعلية.
                        </p>
                    </div>
                </div>

                <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold mb-4 text-[var(--text-color)] -700">القيم الجوهرية</h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="p-4 border border-blue-200 rounded-lg">
                            <h4 className="font-bold mb-2">المعرفة</h4>
                            <p>المعرفة حق طبيعي لكل إنسان</p>
                        </div>
                        <div className="p-4 border border-blue-200 rounded-lg">
                            <h4 className="font-bold mb-2">المسؤولية</h4>
                            <p>نلتزم بتحقيق النتائج المرجوة وتحمل مسؤولية قراراتنا</p>
                        </div>
                        <div className="p-4 border border-blue-200 rounded-lg">
                            <h4 className="font-bold mb-2">النزاهة وأخلاقيات العمل</h4>
                            <p>نتسم بالشفافية ونلتزم دائمًا بالنزاهة وأخلاقيات العمل</p>
                        </div>
                        <div className="p-4 border border-blue-200 rounded-lg">
                            <h4 className="font-bold mb-2">الاحترام</h4>
                            <p>نحترم الجميع أيًا كانت خلفياتهم وآرائهم المتنوعة</p>
                        </div>
                        <div className="p-4 border border-blue-200 rounded-lg">
                            <h4 className="font-bold mb-2">الابتكار</h4>
                            <p>نحاكي المفاهيم والأفكار الرائدة وننفذها</p>
                        </div>
                        <div className="p-4 border border-blue-200 rounded-lg">
                            <h4 className="font-bold mb-2">الالتزام</h4>
                            <p>نلتزم بتوفير خدمات على أعلى مستوى من الجودة</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Page;