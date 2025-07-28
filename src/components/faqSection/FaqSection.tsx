import { FC, useState } from "react";
import { useTranslation } from "react-i18next";

export const FaqSection: FC = () => {
  const { t } = useTranslation();
  const faqs = t("faq.items", { returnObjects: true }) as { question: string; answer: string }[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="w-full bg-gradient-to-b from-[#0a1f1c] via-[#082c2b] to-[#0a1f1c] text-white py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">{t("faq.heading")}</h2>

        <div className="space-y-4 divide-y divide-white/10 border-y border-white/10">
          {faqs.map((faq, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => setOpenIndex(i === openIndex ? null : i)}
                className="w-full flex justify-between items-center text-left text-lg font-medium"
              >
                <span>{faq.question}</span>
                <span className="text-xl">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && <p className="text-gray-400 mt-3 text-sm">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
