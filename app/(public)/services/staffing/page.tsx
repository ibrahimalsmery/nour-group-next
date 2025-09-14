import Image from "next/image";

function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Image src={'/services/hr.webp'} width={1000} objectFit="cover" height={100} className="rounded" alt="consulting" />
            <h1 className="text-4xl font-bold mb-6 text-center text-[var(--text-color)]">التوظيف</h1>
            <section className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                    في نور جروب، ندرك أن رأس المال البشري هو أحد أهم الأصول لأي منظمة. نحن ملتزمون بمساعدة الشركات والمؤسسات على العثور على أفضل المواهب التي تتناسب مع احتياجاتها وتطلعاتها. من خلال شبكتنا الواسعة وخبرتنا العميقة في مجال التوظيف، نقدم حلول توظيف مخصصة تلبي متطلبات السوق المتغيرة.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">خدمات التوظيف التي نقدمها</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li className="mb-2">تحديد احتياجات التوظيف: نعمل مع عملائنا لفهم متطلباتهم وتحديد المواصفات المثلى للمرشحين.</li>
                    <li className="mb-2">مصادر المواهب: نستخدم مجموعة متنوعة من القنوات للعثور على أفضل المرشحين، بما في ذلك قواعد البيانات، وسائل التواصل الاجتماعي، والشبكات المهنية.</li>
                    <li className="mb-2">تقييم المرشحين: نقوم بإجراء مقابلات واختبارات تقييمية لضمان توافق المرشحين مع متطلبات الوظيفة وثقافة الشركة.</li>
                    <li className="mb-2">التوظيف المؤقت والدائم: نقدم حلول توظيف مرنة تلبي احتياجات الشركات سواء كانت توظيفًا مؤقتًا أو دائمًا.</li>
                    <li className="mb-2">الاستشارات في مجال الموارد البشرية: نقدم نصائح واستشارات حول استراتيجيات التوظيف، إدارة المواهب، وتطوير القوى العاملة.</li>
                </ul>
            </section>
        </main>
    );
}

export default Page;