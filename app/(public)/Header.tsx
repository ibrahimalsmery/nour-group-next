"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
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
            {/* Header */}
            <header className=" py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <div className="mr-4">
                            <Link href={'/'}>
                                <Image
                                    src="/logo-skyblue.svg"
                                    alt="شعار شركة النور"
                                    width={60}
                                    height={60}
                                />
                            </Link>

                        </div>
                        <Link href={'/'} className="hidden md:block text-2xl font-bold text-[var(--text-color)]">مجموعة النور الاستشارية</Link>
                    </div>
                    {/* menu icon trigger  */}
                    <button onClick={toggleNavMenu} className='text-3xl md:hidden hover:text-[var(--text-color)] hover:cursor-pointer'>
                        📃القائمة
                    </button>

                    <nav onClick={closeNavMenu} className={`hidden md:block ${isNavOpen ? '!block absolute top-0 left-0 h-screen bg-black/50 w-full' : ''}`}>
                        <ul className={`flex space-x-6 ${isNavOpen ? 'bg-white flex-col w-1/2 h-screen pt-10' : ''}`}>
                            <li><Link href={'/about'} className="hover:underline hover:bg-gray-200 md:hover:bg-white py-5 px-1 block w-full">من نحن</Link></li>
                            <li><Link href={'/vision'} className="hover:underline hover:bg-gray-200 md:hover:bg-white py-5 px-1 block w-full">الرؤية والرسالة</Link></li>
                            <li><Link href={'/services'} className="hover:underline hover:bg-gray-200 md:hover:bg-white py-5 px-1 block w-full">خدماتنا</Link></li>
                            <li><Link href={'/clients'} className="hover:underline hover:bg-gray-200 md:hover:bg-white py-5 px-1 block w-full">عملاؤنا</Link></li>
                            <li><Link href={'/contact'} className="hover:underline hover:bg-gray-200 md:hover:bg-white py-5 px-1 block w-full">اتصل بنا</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default Header;