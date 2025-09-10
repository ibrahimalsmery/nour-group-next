import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: 'شركة النور للدراسات والتدريب',
  description: 'شركة النور للدراسات والتدريب - شركة مساهمة خصوصية محدودة تأسست عام 2007',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body >
        {children}
      </body>
    </html>
  );
}
