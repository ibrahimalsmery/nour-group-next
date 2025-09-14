import Image from "next/image";

function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Image src={'/services/style-research.jpg'} width={1000} objectFit="cover" height={100} className="rounded" alt="consulting" />
            <h1 className="text-4xl font-bold mb-6 text-center text-[var(--text-color)]">الأبحاث والدراسات</h1>
            <section className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                    في نور جروب، نؤمن بأن الأبحاث والدراسات هي الأساس الذي يبنى عليه النجاح والتطوير المستدام. نحن ملتزمون بتقديم حلول بحثية مبتكرة تساعد المؤسسات على اتخاذ قرارات مستنيرة وتحقيق أهدافها الاستراتيجية. من خلال فريقنا المتخصص وخبرتنا العميقة في مجالات متعددة، نقدم خدمات بحثية متميزة تلبي احتياجات عملائنا المتنوعة.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">خدمات الأبحاث والدراسات التي نقدمها</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li className="mb-2">إعداد دراسات خط الأساس: نقوم بجمع وتحليل البيانات لتقديم صورة واضحة عن الوضع الحالي للمشاريع أو البرامج.</li>
                    <li className="mb-2">إجراء دراسات الجدوى الاقتصادية والفنية: نقدم تحليلات شاملة لتقييم جدوى المشاريع من الناحيتين الاقتصادية والفنية.</li>
                    <li className="mb-2">دراسات تقييم الاحتياجات: نساعد المؤسسات على تحديد احتياجاتها وتطوير استراتيجيات تلبي تلك الاحتياجات بفعالية.</li>
                    <li className="mb-2">دراسات السوق: نقدم رؤى معمقة حول اتجاهات السوق، المنافسة، وسلوك المستهلك لمساعدة المؤسسات على اتخاذ قرارات تسويقية مستنيرة.</li>
                    <li className="mb-2">الأبحاث المسحية والميدانية: نجري أبحاثًا ميدانية لجمع البيانات النوعية والكمية التي تدعم اتخاذ القرارات الاستراتيجية.</li>
                    <li className="mb-2">دراسات تقييم المخاطر وتحليلها: نساعد المؤسسات على تحديد وتقييم المخاطر المحتملة ووضع استراتيجيات لإدارتها بفعالية.</li>
                </ul>
            </section>
        </main>
    );
}

export default Page;