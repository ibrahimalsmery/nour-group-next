import Image from "next/image";

function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Image src={'/services/consulting.webp'} width={1000} objectFit="cover" height={100} className="rounded" alt="consulting" />
            <h1 className="text-4xl font-bold mb-6 text-center text-[var(--text-color)]">الاستشارات المهنية</h1>
            <section className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                    في نور جروب، نقدم الاستشارات المهنية التي تساعد المؤسسات والأفراد على تحقيق التميز في أعمالهم وتطوير قدراتهم لمواجهة تحديات السوق المتغيرة. نعتمد على خبرة فريقنا في تقديم حلول عملية واستراتيجيات فعّالة تساهم في تحسين الأداء المؤسسي وتعزيز النمو المستدام.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">خدمات الاستشارات المهنية التي نقدمها</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li className="mb-2">استشارات إدارية وتنظيمية: تطوير الهياكل التنظيمية وتحسين العمليات الإدارية لرفع كفاءة المؤسسة.</li>
                    <li className="mb-2">استشارات الموارد البشرية: وضع سياسات فعّالة لإدارة وتطوير الكوادر البشرية وتحفيز فرق العمل.</li>
                    <li className="mb-2">استشارات مالية ومحاسبية: تقديم حلول مالية مبتكرة تساعد في إدارة الموارد وتحقيق الاستدامة المالية.</li>
                    <li className="mb-2">استشارات تسويقية: بناء استراتيجيات تسويقية فعّالة لزيادة الانتشار وتحقيق الأهداف التجارية.</li>
                    <li className="mb-2">استشارات تقنية: دعم التحول الرقمي وتطبيق أحدث التقنيات لتحسين الأداء المؤسسي.</li>
                    <li className="mb-2">استشارات تطوير الأعمال: مساعدة المؤسسات على اكتشاف فرص جديدة وتوسيع نطاق أعمالها.</li>
                </ul>
            </section>
        </main>
    );
}

export default Page;