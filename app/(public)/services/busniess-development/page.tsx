import Image from "next/image";

function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Image src={'/services/business-development.webp'} width={1000} objectFit="cover" height={100} className="rounded" alt="consulting" />
            <h1 className="text-4xl font-bold mb-6 text-center text-[var(--text-color)]">تطوير الاعمال</h1>
            <section className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                    في نور جروب، نؤمن أن تطوير الأعمال هو المحرك الأساسي لنمو المؤسسات واستدامتها في بيئة تنافسية متغيرة. نقدم حلولاً متكاملة تساعد الشركات على اكتشاف فرص جديدة، وتحسين العمليات، وتوسيع نطاق أعمالها محلياً ودولياً. يعتمد فريقنا على خبرة واسعة في تحليل الأسواق، وتطوير الاستراتيجيات، وبناء الشراكات الفعّالة لتحقيق أهداف عملائنا.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">خدمات تطوير الأعمال التي نقدمها</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li className="mb-2">تحليل الأسواق والفرص الاستثمارية: دراسة الأسواق المستهدفة وتحديد الفرص الواعدة للنمو والتوسع.</li>
                    <li className="mb-2">تطوير الاستراتيجيات التجارية: وضع خطط استراتيجية تساعد المؤسسات على تحقيق أهدافها وزيادة حصتها السوقية.</li>
                    <li className="mb-2">بناء وتطوير الشراكات: البحث عن شركاء محتملين وتأسيس علاقات تعاون مثمرة تدعم نمو الأعمال.</li>
                    <li className="mb-2">تحسين العمليات الداخلية: مراجعة وتطوير العمليات التشغيلية لزيادة الكفاءة وتقليل التكاليف.</li>
                    <li className="mb-2">إدارة وتطوير فرق العمل: تدريب وتأهيل الكوادر البشرية لرفع مستوى الأداء وتحقيق التميز المؤسسي.</li>
                    <li className="mb-2">دعم التوسع الدولي: تقديم الاستشارات والخدمات اللازمة لدخول أسواق جديدة خارجياً.</li>
                </ul>
            </section>
        </main>
    );
}

export default Page;