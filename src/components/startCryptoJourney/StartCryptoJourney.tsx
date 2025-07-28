import { FC, useState } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

interface StartCryptoJourneyProps {
  onSignup: () => void;
}

export const StartCryptoJourney: FC<StartCryptoJourneyProps> = ({ onSignup }) => {
  const { t } = useTranslation();
  const tabs = ["Exchange", "Web3"] as const;
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Exchange");

  const content = t(`journey.${activeTab.toLowerCase()}`, { returnObjects: true }) as {
    heading: string;
    points: { label: string; text: string }[];
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-[#001010] text-white relative">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <img src="/mock-app-ui.png" alt={t("journey.imageAlt")} className="w-full max-w-sm md:max-w-md lg:max-w-lg" />
        </div>

        <div>
          <div className="flex gap-6 mb-4 text-lg font-medium">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 transition-all ${
                  activeTab === tab ? "text-white border-b-2 border-white" : "text-gray-500 hover:text-white"
                }`}
              >
                {t(`journey.tabs.${tab.toLowerCase()}`)}
              </button>
            ))}
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{content.heading}</h2>

          <ul className="space-y-4 text-gray-300 mb-8">
            {content.points.map((point, i) => (
              <li key={i}>
                <strong className="text-white">{point.label}</strong><br />
                {point.text}
              </li>
            ))}
          </ul>

          <Button className="bg-white text-black hover:bg-gray-200" onClick={onSignup}>
            {t("journey.cta")}
          </Button>
        </div>
      </div>
    </section>
  );
};
