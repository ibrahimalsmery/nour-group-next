import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
function Socialmedia() {
    return (
        <>
            {/* وسائل التواصل الاجتماعي */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl font-bold text-blue-900 mb-6">
                        تابع قسم الدراسات والأبحاث في مجموعة النور
                    </h3>
                    <div className="flex justify-center gap-4 mb-6">
                        {[
                            { name: 'LinkedIn', icon: <FaLinkedin />, color: 'bg-blue-600' },
                            { name: 'Twitter', icon: <FaTwitter />, color: 'bg-black' },
                            { name: 'Facebook', icon: <FaFacebook />, color: 'bg-blue-500' },
                            { name: 'YouTube', icon: <FaYoutube />, color: 'bg-red-600' }
                        ].map((social) => (
                            <button
                                key={social.name}
                                className={`${social.color} text-white w-12 h-12 rounded-full flex items-center justify-center text-lg hover:opacity-90 transition duration-300`}
                            >
                                {social.icon}
                            </button>
                        ))}
                    </div>
                    <p className="text-gray-600">
                        تابع آخر الإصدارات والنتائج على وسائل التواصل الاجتماعي
                    </p>
                </div>
            </section>
        </>
    );
}

export default Socialmedia;