import { FC, useState } from "react";
import { Button } from "../ui/button";

const content = {
  Exchange: {
    heading: "Start your crypto journey here",
    points: [
      {
        label: "Fiat",
        text: "Over 140 fiat currencies supported",
      },
      {
        label: "Trade",
        text: "Futures, spot, margin, bot...",
      },
      {
        label: "Earn",
        text: "Boost your crypto profits safely and easily!",
      },
    ],
  },
  Web3: {
    heading: "Enter the Web3 Ecosystem",
    points: [
      {
        label: "DeFi",
        text: "Access decentralized finance protocols securely",
      },
      {
        label: "NFTs",
        text: "Trade and store NFTs with full ownership",
      },
      {
        label: "Wallet",
        text: "Manage crypto assets with non-custodial wallets",
      },
    ],
  },
};

export const StartCryptoJourney: FC = () => {
  const [activeTab, setActiveTab] = useState<"Exchange" | "Web3">("Exchange");

  const activeContent = content[activeTab];

  return (
    <section className="w-full py-20 bg-gradient-to-b from-black to-[#001010] text-white">
      <div className="container mx-auto px-4 grid md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <img
            src="/mock-app-ui.png"
            alt="Exchange UI preview"
            className="w-full max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>

        <div>
          <div className="flex gap-6 mb-4 text-lg font-medium">
            {(["Exchange", "Web3"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-1 ${
                  activeTab === tab
                    ? "text-white border-b-2 border-white"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            {activeContent.heading}
          </h2>

          <ul className="space-y-4 text-gray-300 mb-8">
            {activeContent.points.map((point, i) => (
              <li key={i}>
                <strong className="text-white">{point.label}</strong><br />
                {point.text}
              </li>
            ))}
          </ul>

          <Button className="bg-white text-black hover:bg-gray-200">Sign up now</Button>
        </div>
      </div>
    </section>
  );
}; 