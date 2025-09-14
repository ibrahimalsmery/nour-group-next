import Image from "next/image";

function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-8">
            <Image src={'/services/traning.jpg'} width={1000} objectFit="cover" height={100} className="rounded" alt="consulting" />
            <h1 className="text-4xl font-bold mb-6 text-center text-[var(--text-color)]">التدريب</h1>
            <section className="mb-8">
                <p className="text-lg text-gray-700 leading-relaxed">
                    في عالم سريع التغير، يُعد التدريب المستمر وتطوير المهارات من العوامل الأساسية للنجاح. نحن في نور جروب ندرك أهمية الاستثمار في رأس المال البشري، ونقدم مجموعة متنوعة من البرامج التدريبية المصممة لتلبية احتياجات الأفراد والمؤسسات على حد سواء.
                </p>
            </section>
            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">لماذا تختار برامجنا التدريبية؟</h2>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                    <li className="mb-2">مدربون معتمدون: فريقنا من المدربين يمتلك خبرات واسعة في مجالاتهم، ويستخدمون أحدث الأساليب التدريبية لضمان تحقيق أفضل النتائج.</li>
                    <li className="mb-2">محتوى محدث: نحن نحرص على تحديث محتوى برامجنا التدريبية باستمرار لمواكبة التطورات في السوق واحتياجات المتدربين.</li>
                    <li className="mb-2">تنوع البرامج: نقدم برامج تدريبية في مجالات متعددة تشمل الإدارة، التقنية، التنمية الشخصية، وغيرها الكثير.</li>
                    <li className="mb-2">مرونة في التعلم: نوفر خيارات متعددة للتدريب تشمل التدريب الوجاهي، الأونلاين، والبرامج المدمجة لتناسب جداول المتدربين المختلفة.</li>
                    <li className="mb-2">شهادات معترف بها: عند إتمام البرامج التدريبية، يحصل المتدربون على شهادات معترف بها تعزز من سيرهم الذاتية.</li>
                </ul>
            </section>
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-[var(--text-color)]">انضم إلينا اليوم!</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                    سواء كنت فردًا يسعى لتطوير مهاراته أو مؤسسة ترغب في رفع كفاءة فريقها، نحن هنا لمساعدتك على تحقيق أهدافك. تواصل معنا اليوم لمعرفة المزيد عن برامجنا التدريبية وكيف يمكننا دعم رحلتك نحو النجاح.
                </p>
            </section>
        </main>
    );
}

export default Page;