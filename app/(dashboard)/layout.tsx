
import React from 'react';
import "./dashboard.css";
import { AiFillDashboard } from 'react-icons/ai';
import { FaUser, FaUsers } from 'react-icons/fa';

export const Metadata = {
    title: 'شركة النور للدراسات والتدريب',
    description: 'شركة النور للدراسات والتدريب - شركة مساهمة خصوصية محدودة تأسست عام 2007',
}

export default function Dashboard(props: any) {

    return (
        <>
            <html lang="ar" dir="rtl">
                <body className="" >
                    <div className="drawer lg:drawer-open">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col pt-10">
                            {/* Page content here */}
                            {props.children}
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                                {/* Sidebar content here */}
                                <li><a>Sidebar Item 2</a></li>
                                <li><a><AiFillDashboard /> لوحة التحكم</a></li>
                                <li><a><FaUsers /> المستشاريين</a></li>
                            </ul>
                        </div>
                    </div>
                </body>
            </html>
        </>
    );
}