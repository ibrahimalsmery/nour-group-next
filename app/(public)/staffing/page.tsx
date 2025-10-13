import CopyButton from "@/app/components/CopyButton";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'شركة النور للدراسات والتدريب|التوظيف',
    description: 'شركة النور للدراسات والتدريب - شركة مساهمة خصوصية محدودة تأسست عام 2007',
}

interface Link { text: string, url: string }

function Page() {
    const links: Link[] = [
        { text: "الذكاء الصناعي AI", url: "https://docs.google.com/forms/d/e/1FAIpQLSeOr8bb31YjCHYYWbKujdFtW2WnikaW54p0nOjCnrcKSAeqiw/viewform?usp=header" },
        { text: "الامن والسلامةالمهنية", url: "https://docs.google.com/forms/d/e/1FAIpQLSeE5PkUekULhajKRNghf3EsZZ1Ob1BU_NnKtS83Z_NOzsZVGQ/viewform?usp=header" },
        { text: "الزراعة ومجالاتها", url: "https://docs.google.com/forms/d/e/1FAIpQLSd_Mpec6RpxGV6JTqdytA-TyTDMfqqzwU38ZGjF9O4-uwJoRQ/viewform?usp=header" },
        { text: "التعليم", url: "https://docs.google.com/forms/d/e/1FAIpQLSdFT3ROkLRZYwQTiplKsePb1psohmE8AjfgRCXyqw1_HmxMrw/viewform?usp=header" },
        { text: "تكنولوجيا المعلومات", url: "https://docs.google.com/forms/d/e/1FAIpQLSfuObltK5xV8aEQC1J_AoE3wMk72pbHAz-DyiM9tCaMGkW3TQ/viewform?usp=header" },
        { text: "البرمجة", url: "https://docs.google.com/forms/d/e/1FAIpQLSdZ1DqL87bVsHS9EPyHBB_bWD5vJYQ6qvXif8DQ7HyqfpvQOA/viewform?usp=header" },
        { text: "العنف المبني على النوع الاجتماعي", url: "https://docs.google.com/forms/d/e/1FAIpQLSddVEbcjSbJVQv_2Hd0g7_Cs2ULNIbvd5dtKXWIxwdZM0LYnw/viewform?usp=header" },
        { text: "الارشاد النفسي", url: "https://docs.google.com/forms/d/e/1FAIpQLScK3jaffEV6PPO13Wf8hYpebJZ0ffYztL7Lh1MdHJae7O14-g/viewform?usp=header" },
        { text: "ادارة المخيمات", url: "https://docs.google.com/forms/d/e/1FAIpQLSftN99eJR9iO2T5Gx-skrVn-7wTpKmkMQO4dCHEqpi25oztww/viewform?usp=header" },
        { text: "المياه والصرف الصحي", url: "https://docs.google.com/forms/d/e/1FAIpQLScwcoLdm8zw-v6dWtrRRIud2G_FnyPPngKti05yUPFDLeTh9A/viewform?usp=header" },
        { text: "الارشاد و التدريب", url: "https://docs.google.com/forms/d/e/1FAIpQLSeAGsOAS4vK0fZWzkG2UpNx2_pnJZzFsbLeXzX_8vI_3859Nw/viewform?usp=header" },
        { text: "التدريب الوجاهي والرقمي", url: "https://docs.google.com/forms/d/e/1FAIpQLSc0xJBLG_GmhZcJOJnSnatbue2rwePvcDft6X3Riqw3aTyLtg/viewform?usp=dialog" },
    ]
    return (
        <main className="max-w-4xl mx-auto px-4 py-12">
            <section id="about" className="mb-16">
                <h2 className="text-center text-3xl font-bold mb-6 text-[var(--text-color)]">التوظيف</h2>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <ul>
                        {links.map((l, index) => (
                            <li key={index} className="mb-3 flex justify-between">
                                <a target="_blank" href={l.url} className="md:text-4xl hover:text-[var(--text-color)]"><p>{l.text}</p></a>
                                <CopyButton text={l.url} />
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </main>
    );
}

export default Page;