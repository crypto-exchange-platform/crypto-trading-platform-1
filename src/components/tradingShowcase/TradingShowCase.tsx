import { FC } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

export const CopyTradingShowcase: FC = () => {
  const { t } = useTranslation();
  const traders = t("copyTrading.traders", { returnObjects: true }) as any[];

  return (
    <section className="w-full text-white py-20 bg-gradient-to-b from-[#001010] to-black">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl lg:text-4xl font-bold mb-3"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {t("copyTrading.heading")}
        </motion.h2>

        <motion.p
          className="text-gray-400 mb-12 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {t("copyTrading.subheading")}
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {traders.map((trader, index) => (
            <motion.div
              key={index}
              className="bg-black/20 border border-white/10 rounded-xl p-5 flex flex-col items-start hover:border-cyan-400 transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-full text-left">
                <div className="font-medium text-sm mb-1">{trader.name}</div>
                <div className="text-xs text-gray-400 mb-1">{trader.position}</div>
                <div className="text-xs text-right text-gray-400 mb-2">
                  {t("copyTrading.profit")} <span className="text-white font-semibold">{trader.profit}</span>
                </div>
                <div className="text-2xl font-semibold mb-1">{trader.roi}</div>
                <div className="text-xs text-gray-400 mb-3">{t("copyTrading.roi")}</div>
                <img src={trader.chart} alt={t("copyTrading.chartAlt")} className="mb-4 w-full" />
                <Button className="w-full bg-transparent text-white hover:bg-gray-100 text-sm border">
                  {t("copyTrading.copyButton")}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
