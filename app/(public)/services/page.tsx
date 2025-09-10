function Page() {
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <section id="services" className="mb-16">
                <h2 className="text-3xl font-bold mb-6 text-blue-800">خدماتنا</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-blue-700">الدراسات والأبحاث</h3>
                        <ul className="list-disc pr-5">
                            <li>إعداد دراسات خط الأساس</li>
                            <li>إجراء دراسات الجدوى الاقتصادية والفنية</li>
                            <li>دراسات تقييم الاحتياجات</li>
                            <li>دراسات السوق</li>
                            <li>الأبحاث المسحية والميدانية</li>
                            <li>دراسات تقييم المخاطر وتحليلها</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-blue-700">التدريب</h3>
                        <ul className="list-disc pr-5">
                            <li>برامج تدريبية متخصصة</li>
                            <li>التدريب الوجاهي</li>
                            <li>التدريب الأونلاين</li>
                            <li>التدريب المدمج</li>
                            <li>تطوير المواد التدريبية والأدلة</li>
                            <li>التدريب حسب الطلب</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-blue-700">تطوير الأعمال</h3>
                        <ul className="list-disc pr-5">
                            <li>استراتيجيات النمو المبتكرة</li>
                            <li>دعم الشركات الناشئة</li>
                            <li>الشراكات والتحالفات الاستراتيجية</li>
                            <li>التمكين المؤسسي</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-blue-700">الاستثمار في التعليم الرقمي</h3>
                        <ul className="list-disc pr-5">
                            <li>منصة مدرستي في جوالي</li>
                            <li>منصات تعليمية رقمية متكاملة</li>
                            <li>حلول للتعليم في الطوارئ</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-blue-700">الاستشارات المهنية</h3>
                        <ul className="list-disc pr-5">
                            <li>الاستشارات الإدارية والمالية والتنموية</li>
                            <li>إدارة المخاطر والكوارث</li>
                            <li>إدارة الأمن والسلامة</li>
                            <li>إدارة السلامة والصحة المهنية</li>
                            <li>التخطيط الاستراتيجي والإجرائي</li>
                        </ul>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold mb-3 text-blue-700">التوظيف وتوفير الكفاءات</h3>
                        <ul className="list-disc pr-5">
                            <li>التوظيف المهني</li>
                            <li>العقود المرنة</li>
                            <li>إدارة الموارد البشرية بالوكالة</li>
                            <li>توفير الخبراء والاستشاريين</li>
                            <li>بناء فرق متخصصة</li>
                            <li>التوظيف السريع</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Page;