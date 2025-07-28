import { FC } from "react";
import { useTranslation } from "react-i18next";

export const TrustSafetySection: FC = () => {
  const { t } = useTranslation();
  const trustItems = t("trust.items", { returnObjects: true }) as any[];

  return (
    <section className="w-full bg-gradient-to-b from-[#001010] via-[#082c2b] to-[#0a1f1c] text-white py-24 px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2">{t("trust.heading")}</h2>
        <p className="text-gray-400 max-w-xl mx-auto">{t("trust.subheading")}</p>
      </div>

      <div className="flex justify-center mb-16">
        <img src="/chart1.png" alt={t("trust.imageAlt")} className="max-w-[1200px] w-full" />
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-left text-sm">
        {trustItems.map((item, index) => (
          <div key={index} className="flex flex-col gap-2 px-4">
            <h3 className="text-white font-semibold">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
            <span className="text-white text-xl mt-2">→</span>
          </div>
        ))}
      </div>
    </section>
  );
};
