import Link from "next/link";

function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-blue-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">بيت الخبرة المتكامل</h2>
          <p className="text-xl mb-8">تقديم حلول متكاملة في التدريب، الدراسات، الاستشارات، التعليم الرقمي، التوظيف وتطوير الأعمال</p>
          <>
            <Link href={'/contact'}
              className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition"
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