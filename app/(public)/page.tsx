import Link from "next/link";

function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[url('/Business-Consulting-Services-50-50.png')] bg-no-repeat bg-cover bg-center bg-fixed  text-white py-16 h-screen flex items-center">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">بيت الخبرة المتكامل</h2>
          <p className="text-xl mb-8">تقديم حلول متكاملة في التدريب، الدراسات، الاستشارات، التعليم الرقمي، التوظيف وتطوير الأعمال</p>
          <>
            <Link href={'/contact'}
              className="bg-[var(--second-color)] hover:bg-[var(--second-color)]/90 text-white px-6 py-3 rounded-lg  transition"
            >
              تواصل معنا
            </Link>
          </>
        </div>
      </section>
    </>
  );
}

export default Page;