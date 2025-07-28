import { FC, useState } from "react";
import { Button } from "../ui/button";
import { MovingAdBanner } from "./MovingAdBanner";
import { useTranslation } from "react-i18next";

export const MarketTableTabs: FC = () => {
  const { t } = useTranslation();
  const tabs = t("market.tabs", { returnObjects: true }) as string[];
  const [activeTab, setActiveTab] = useState<string>(tabs[0]);

  const dataSets = t("market.data", { returnObjects: true }) as Record<string, any[]>;

  return (
    <section className="w-full text-white bg-gradient-to-b from-[#001010] via-[#082c2b] to-[#001010]">
      <MovingAdBanner />

      <div className="container mx-auto px-4 pt-6">
        <div className="flex gap-12 border-b border-white/10 text-lg mb-6 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition-colors ${
                activeTab === tab ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px]">
            <thead className="text-left text-sm text-gray-400">
              <tr>
                <th className="py-2">{t("market.headers.name")}</th>
                <th className="py-2">{t("market.headers.lastPrice")}</th>
                <th className="py-2">{t("market.headers.change")}</th>
                <th className="py-2">{t("market.headers.volume")}</th>
                <th className="py-2">{t("market.headers.action")}</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {dataSets[activeTab]?.map((item: any) => (
                <tr key={item.symbol} className="border-t border-white/10">
                  <td className="py-4 flex items-center gap-3">
                    <img src={item.icon} alt={item.symbol} className="h-6 w-6" />
                    <div>
                      <div className="font-medium">{item.symbol}</div>
                      <div className="text-gray-400 text-xs">{item.name}</div>
                    </div>
                  </td>
                  <td>{item.price}</td>
                  <td className={item.change < 0 ? "text-red-500" : "text-cyan-400"}>
                    {item.change > 0 ? `+${item.change}%` : `${item.change}%`}
                  </td>
                  <td>{item.volume}</td>
                  <td>
                    <Button className="bg-transparent text-white hover:bg-gray-900 px-4 py-1 h-auto text-sm border">
                      {t("market.details")}
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-right mt-4 text-sm text-cyan-400 hover:underline cursor-pointer">
          {t("market.explore")}
        </div>
      </div>
    </section>
  );
};
