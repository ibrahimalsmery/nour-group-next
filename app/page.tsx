"use client"
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  return (
    <div dir="rtl">
      <Head>
        <title>شركة النور للدراسات والتدريب</title>
        <meta name="description" content="شركة النور للدراسات والتدريب - شركة مساهمة خصوصية محدودة تأسست عام 2007" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className=" py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-4">
              <Image 
                src="/logo.png" 
                alt="شعار شركة النور" 
                width={60} 
                height={60} 
              />
            </div>
            <h1 className="text-2xl font-bold">شركة النور للدراسات والتدريب</h1>
          </div>
          
          <nav className="hidden md:block">
            <ul className="flex space-x-6 space-x-reverse">
              <li><button onClick={() => setActiveSection('about')} className="hover:underline">من نحن</button></li>
              <li><button onClick={() => setActiveSection('vision')} className="hover:underline">الرؤية والرسالة</button></li>
              <li><button onClick={() => setActiveSection('services')} className="hover:underline">خدماتنا</button></li>
              <li><button onClick={() => setActiveSection('clients')} className="hover:underline">عملاؤنا</button></li>
              <li><button onClick={() => setActiveSection('contact')} className="hover:underline">اتصل بنا</button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">بيت الخبرة المتكامل</h2>
          <p className="text-xl mb-8">تقديم حلول متكاملة في التدريب، الدراسات، الاستشارات، التعليم الرقمي، التوظيف وتطوير الأعمال</p>
          <button 
            onClick={() => setActiveSection('contact')}
            className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            تواصل معنا
          </button>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* About Section */}
        {activeSection === 'about' && (
          <section id="about" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">من نحن</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-4">
                النور شركة مساهمة خصوصية محدودة تأسست بالعام 2007، تحت رقم تشغيلي (563143916) من وزارة الاقتصاد الوطني، تعمل في إطار مجلس استشاري متخصص في المجالات الفنية للخدمات الاستشارية، ومجلس ادارة لتنظيم العمل.
              </p>
              <p className="mb-4">
                لدينا مجموعة من الموظفين والمتطوعين ضمن هيكلية عمل الشركة، وتنشط في المحافظات الشمالية والجنوبية من فلسطين.
              </p>
              <p className="mb-4">
                النور تجمع بين خبرة عريقة في تقديم الاستشارات المهنية، التدريب، والدراسات المتخصصة، وبين دورها المتجدد كمنصة لتوظيف وتوفير الكفاءات من مدربين، باحثين، واستشاريين عبر عقود مرنة لتلبية احتياجات المؤسسات المحلية والدولية.
              </p>
              <p>
                يعمل مع النور مجموعة من المختصين/ت والأكاديميين والباحثين والمدربين الأكفاء في مجالات الدراسات والاستشارات وإعداد الدورات التدريبية المختصة وجميعهم يحملون مؤهلات علمية عليا ودبلومات مهنية متخصصة.
              </p>
            </div>
          </section>
        )}

        {/* Vision & Mission Section */}
        {activeSection === 'vision' && (
          <section id="vision" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">الرؤية والرسالة</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">الرؤية</h3>
                <p>
                  أن تكون النور المؤسسة الرائدة في تقديم الحلول التدريبية، البحثية، والاستشارية المتكاملة في فلسطين والمنطقة، مع التميز في توظيف الكفاءات المتميزة، الابتكار الرقمي، والالتزام بأعلى معايير الجودة الدولية، لتكون شريكًا موثوقًا في تمكين الأفراد وتعزيز الأداء المؤسسي ودعم التنمية المستدامة.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">الرسالة</h3>
                <p>
                  المساهمة في تنمية وتطوير وبناء قدرات مؤسسات المجتمع وأفراده للوصول إلى تحقيق الإدارة السليمة المتكاملة للنمو والحماية والاستمرارية، عبر بناء وتطوير السياسات، وإعداد الخطط والدراسات، وبناء القدرات وفق نظم الجودة العالمية، من خلال الاعتماد على المشاركة التفاعلية.
                </p>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">القيم الجوهرية</h3>
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
        )}

        {/* Services Section */}
        {activeSection === 'services' && (
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
                  <li>منصة "مدرستي في جوالي"</li>
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
        )}

        {/* Clients Section */}
        {activeSection === 'clients' && (
          <section id="clients" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">عملاؤنا</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="mb-6">
                عملت النور كاستشاري استراتيجي لمؤسسات حكومية, دولية أهلية وقطاع خاص منها على سبيل المثال لا الحصر:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="h-16 mb-2 bg-gray-200 rounded"></div>
                  <p>جامعة فلسطين</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="h-16 mb-2 bg-gray-200 rounded"></div>
                  <p>الجامعة الإسلامية</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="h-16 mb-2 bg-gray-200 rounded"></div>
                  <p>وزارة التربية والتعليم</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="h-16 mb-2 bg-gray-200 rounded"></div>
                  <p>وكالة غوث اللاجئين</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="h-16 mb-2 bg-gray-200 rounded"></div>
                  <p>بنك فلسطين</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="h-16 mb-2 bg-gray-200 rounded"></div>
                  <p>شركة جوال</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="h-16 mb-2 bg-gray-200 rounded"></div>
                  <p>مؤسسة الرؤية العالمية</p>
                </div>
                <div className="p-4 border border-gray-200 rounded-lg text-center">
                  <div className="h-16 mb-2 bg-gray-200 rounded"></div>
                  <p>مؤسسة انقاذ الطفل</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <section id="contact" className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">اتصل بنا</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">البيانات القانونية ووسائل الاتصال</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-bold">الاسم القانوني للشركة:</p>
                    <p>شركة النور للدراسات والتدريب م. خ. م</p>
                  </div>
                  <div>
                    <p className="font-bold">رقم تسجيل الشركة:</p>
                    <p>563143916</p>
                  </div>
                  <div>
                    <p className="font-bold">تاريخ تأسيس الشركة:</p>
                    <p>4/10/2007</p>
                  </div>
                  <div>
                    <p className="font-bold">اسم المسؤول:</p>
                    <p>د. زياد ذياب مزهر</p>
                  </div>
                  <div>
                    <p className="font-bold">المنصب الوظيفي:</p>
                    <p>رئيس مجلس الإدارة والمدير العام</p>
                  </div>
                  <div>
                    <p className="font-bold">العنوان:</p>
                    <p>فلسطين</p>
                  </div>
                  <div>
                    <p className="font-bold">هاتف Ooredoo:</p>
                    <p>0599748739</p>
                  </div>
                  <div>
                    <p className="font-bold">هاتف Ooredoo:</p>
                    <p>0566748739</p>
                  </div>
                  <div>
                    <p className="font-bold">البريد الإلكتروني:</p>
                    <p>ziyadmezher@gmail.com</p>
                    <p>zmezher@hotmil.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-700">أرسل رسالة</h3>
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
                    <textarea rows="5" className="w-full p-2 border border-gray-300 rounded"></textarea>
                  </div>
                  <button type="submit" className="bg-blue-700 text-white px-6 py-2 rounded hover:bg-blue-800 transition">
                    إرسال
                  </button>
                </form>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">شركة النور للدراسات والتدريب</h3>
              <p>بيت الخبرة المتكامل في تقديم الحلول التدريبية، البحثية، والاستشارية المتكاملة</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">روابط سريعة</h3>
              <ul className="space-y-2">
                <li><button onClick={() => setActiveSection('about')} className="hover:underline">من نحن</button></li>
                <li><button onClick={() => setActiveSection('vision')} className="hover:underline">الرؤية والرسالة</button></li>
                <li><button onClick={() => setActiveSection('services')} className="hover:underline">خدماتنا</button></li>
                <li><button onClick={() => setActiveSection('clients')} className="hover:underline">عملاؤنا</button></li>
                <li><button onClick={() => setActiveSection('contact')} className="hover:underline">اتصل بنا</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">اتصل بنا</h3>
              <p>هاتف: 0599748739</p>
              <p>بريد إلكتروني: ziyadmezher@gmail.com</p>
            </div>
          </div>
          
          <div className="border-t border-blue-700 mt-8 pt-6 text-center">
            <p>© {new Date().getFullYear()} شركة النور للدراسات والتدريب. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}