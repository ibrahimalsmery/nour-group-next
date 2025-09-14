import Image from "next/image";

function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Image src={'/services/edu-learn.jpg'} width={1000} objectFit="cover" height={100} className="rounded" alt="consulting" />
            <h1 className="text-4xl font-bold mb-6 text-center text-[var(--text-color)]">التعليم الإلكتروني</h1>
            <section className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                    في نور جروب، نؤمن بأن التعليم الإلكتروني هو مستقبل التعليم والتدريب. نحن ملتزمون بتقديم حلول تعليمية رقمية مبتكرة تساعد الأفراد والمؤسسات على تحقيق أهدافهم التعليمية والتطويرية. من خلال منصاتنا التعليمية المتقدمة وفريقنا المتخصص، نقدم تجارب تعلم متميزة تلبي احتياجات المتعلمين في العصر الرقمي.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">خدمات التعليم الإلكتروني التي نقدمها</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li className="mb-2">منصة مدرستي في جوالي: نقدم منصة تعليمية متكاملة تتيح للطلاب الوصول إلى المحتوى التعليمي بسهولة عبر هواتفهم المحمولة.</li>
                    <li className="mb-2">منصات تعليمية رقمية متكاملة: نصمم ونطور منصات تعليمية تلبي احتياجات المؤسسات التعليمية وتوفر تجارب تعلم تفاعلية ومبتكرة.</li>
                    <li className="mb-2">حلول للتعليم في الطوارئ: نقدم حلول تعليمية مرنة تتيح استمرار التعلم في حالات الطوارئ مثل الأوبئة والكوارث الطبيعية.</li>
                </ul>
            </section>
        </main>
    );
}

export default Page;