"use client"
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



export default function Home(props: any) {

    const [isNavOpen, setIsNavOpen] = React.useState(false);

    function toggleNavMenu() {
        setIsNavOpen(!isNavOpen);
        console.log("toggle" + isNavOpen);

    }

    function closeNavMenu() {
        setIsNavOpen(false);
    }


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
                            <Link href={'/'} className="hidden md:block text-2xl font-bold text-blue-900">مجموعة النور الاستشارية</Link>
                        </div>
                        {/* menu icon trigger  */}
                        <button onClick={toggleNavMenu} className='text-3xl md:hidden hover:text-blue-700 hover:cursor-pointer'>
                            📃القائمة
                        </button>

                        <nav onClick={closeNavMenu} className={`hidden md:block ${isNavOpen ? '!block absolute top-0 left-0 h-screen bg-black/50 w-full' : ''}`}>
                            <ul className={`flex space-x-6 ${isNavOpen ? 'bg-white flex-col w-1/2 h-screen pt-10' : ''}`}>
                                <li><Link href={'/about'}     className="hover:underline hover:bg-gray-200 md:hover:bg-white py-5 px-1 block w-full">من نحن</Link></li>
                                <li><Link href={'/vision'}    className="hover:underline hover:bg-gray-200 md:hover:bg-white py-5 px-1 block w-full">الرؤية والرسالة</Link></li>
                                <li><Link href={'/services'}  className="hover:underline hover:bg-gray-200 md:hover:bg-white py-5 px-1 block w-full">خدماتنا</Link></li>
                                <li><Link href={'/clients'}   className="hover:underline hover:bg-gray-200 md:hover:bg-white py-5 px-1 block w-full">عملاؤنا</Link></li>
                                <li><Link href={'/contact'}   className="hover:underline hover:bg-gray-200 md:hover:bg-white py-5 px-1 block w-full">اتصل بنا</Link></li>
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