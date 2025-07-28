import { FC } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

export const HeroSpinPrize: FC = () => {
  const { t } = useTranslation();
  const promotions = t("hero.promotions", { returnObjects: true }) as { title: string; subtitle: string }[];

  return (
    <section className="w-full bg-transparent text-white">
      <div className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">{t("hero.heading")}</h1>
          <p className="text-lg text-gray-300">{t("hero.subheading")}</p>

          <form className="flex w-full max-w-md rounded overflow-hidden border border-white/30">
            <input
              type="text"
              placeholder={t("hero.placeholder")}
              className="flex-1 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:outline-none"
            />
            <Button type="submit" className="rounded-none">
              {t("hero.cta")}
            </Button>
          </form>
        </div>

        <div className="flex justify-center">
          <img src="/token_orb.png" alt={t("hero.imageAlt")} className="w-full max-w-xs md:max-w-md lg:max-w-lg" />
        </div>
      </div>

      <div className="w-full overflow-x-auto py-8">
        <div className="container mx-auto px-4 flex gap-4 md:justify-center">
          {promotions.map(({ title, subtitle }, index) => (
            <div
              key={index}
              className="min-w-[240px] flex-shrink-0 bg-black/30 border border-white/10 rounded-lg p-4 flex gap-3 items-start hover:border-cyan-400 transition"
            >
              <div>
                <h3 className="font-semibold text-sm mb-1">{title}</h3>
                <p className="text-xs text-gray-400 leading-snug">{subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 