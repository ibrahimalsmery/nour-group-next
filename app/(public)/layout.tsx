import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';



export default function Home(props: any) {

    return (
        <>
            <div dir="rtl">
                {/* Header */}
                <header className=" py-4">
                    <div className="container mx-auto px-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <div className="mr-4">
                                <Link href={'/'}>
                                    <Image
                                        src="/logo.png"
                                        alt="شعار شركة النور"
                                        width={60}
                                        height={60}
                                    />
                                </Link>

                            </div>
                            <Link href={'/'} className="text-2xl font-bold text-blue-900">شركة النور للدراسات والتدريب</Link>
                        </div>

                        <nav className="hidden md:block">
                            <ul className="flex space-x-6 ">
                                <li><Link href={'/about'} className="hover:underline">من نحن</Link></li>
                                <li><Link href={'/vision'} className="hover:underline">الرؤية والرسالة</Link></li>
                                <li><Link href={'/services'} className="hover:underline">خدماتنا</Link></li>
                                <li><Link href={'/clients'} className="hover:underline">عملاؤنا</Link></li>
                                <li><Link href={'/contact'} className="hover:underline">اتصل بنا</Link></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                    {props.children}
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
                                    <li><Link href={'/about'} className="hover:underline">من نحن</Link></li>
                                    <li><Link href={'/vision'} className="hover:underline">الرؤية والرسالة</Link></li>
                                    <li><Link href={'/services'} className="hover:underline">خدماتنا</Link></li>
                                    <li><Link href={'/clients'} className="hover:underline">عملاؤنا</Link></li>
                                    <li><Link href={'/contact'} className="hover:underline">اتصل بنا</Link></li>
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
        </>
    );
}