
import Link from 'next/link';
import React from 'react';
import "../globals.css";
import Header from './Header';

export const Metadata = {
    title: 'شركة النور للدراسات والتدريب',
    description: 'شركة النور للدراسات والتدريب - شركة مساهمة خصوصية محدودة تأسست عام 2007',
}

export default function Home(props: any) {




    return (
        <>
            <html lang="ar" dir="rtl">
                <body className="bg-[var(--body-bg)]" >
                    <div dir="rtl">
                        <Header />
                        {props.children}
                        {/* Footer */}
                        <footer className="bg-[var(--footer-bg)] text-white py-8">
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

                                <div className="mt-8 pt-6 text-center">
                                    <p>© {new Date().getFullYear()} شركة النور للدراسات والتدريب. جميع الحقوق محفوظة.</p>
                                </div>
                            </div>
                        </footer>
                    </div>
                </body>
            </html>
        </>
    );
}