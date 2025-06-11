import { FC, useState } from "react";
import { Button } from "../ui/button";
import { MovingAdBanner } from "./MovingAdBanner";

const tabs = ["Popular", "Gainers", "Newly listed"] as const;
type Tab = (typeof tabs)[number];

interface MarketItem {
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: string;
  icon: string;
}

const popular: MarketItem[] = [
  {
    name: "Bitcoin",
    symbol: "BTC",
    price: 81654.62,
    change: +1.97,
    volume: "482.29M",
    icon: "/btc.svg",
  },
  {
    name: "PRL",
    symbol: "PRL",
    price: 1.1466,
    change: -13.9,
    volume: "187.79M",
    icon: "/prl.svg",
  },
  {
    name: "BNB",
    symbol: "BNB",
    price: 4.569,
    change: 3.44,
    volume: "155.28M",
    icon: "/bnb.svg",
  },
  {
    name: "Ethereum",
    symbol: "ETH",
    price: 1880,
    change: -1.69,
    volume: "144.28M",
    icon: "/eth.svg",
  },
    {
    name: "Aptos",
    symbol: "APT",
    price: 8.44,
    change: 5.02,
    volume: "312.22M",
    icon: "/ilk.svg",
  },
  {
    name: "SUI",
    symbol: "SUI",
    price: 1.12,
    change: -0.8,
    volume: "111.45M",
    icon: "/ins.svg",
  },
   {
    name: "QRL",
    symbol: "QRL",
    price: 0.000001,
    change: 9.3,
    volume: "412.78M",
    icon: "/qrl.svg",
  },
  
];

const gainers: MarketItem[] = [

  {
    name: "QRL",
    symbol: "QRL",
    price: 0.000001,
    change: 9.3,
    volume: "412.78M",
    icon: "/qrl.svg",
  },
    {
    name: "Bitcoin",
    symbol: "BTC",
    price: 81654.62,
    change: +1.97,
    volume: "482.29M",
    icon: "/btc.svg",
  },
   {
    name: "Aptos",
    symbol: "APT",
    price: 8.44,
    change: 5.02,
    volume: "312.22M",
    icon: "/ilk.svg",
  },
];

const newlyListed: MarketItem[] = [
  {
    name: "Aptos",
    symbol: "APT",
    price: 8.44,
    change: 5.02,
    volume: "312.22M",
    icon: "/ilk.svg",
  },
  {
    name: "SUI",
    symbol: "SUI",
    price: 1.12,
    change: -0.8,
    volume: "111.45M",
    icon: "/ins.svg",
  },
];

export const MarketTableTabs: FC = () => {
  const [activeTab, setActiveTab] = useState<Tab>("Popular");

  const getData = (): MarketItem[] => {
    switch (activeTab) {
      case "Popular":
        return popular;
      case "Gainers":
        return gainers;
      case "Newly listed":
        return newlyListed;
      default:
        return [];
    }
  };

  return (
    
    <section className="w-full text-white  bg-gradient-to-b from-[#001010] to-black ">
                <MovingAdBanner />

      <div className="container mx-auto px-4 pt-6">
        <div className="flex gap-12 border-b border-white/10 text-lg mb-6 justify-center">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 transition-colors ${
                activeTab === tab
                  ? "text-white border-b-2 border-white"
                  : "text-gray-400 hover:text-white"
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
                <th className="py-2">Name</th>
                <th className="py-2">Last price</th>
                <th className="py-2">Change</th>
                <th className="py-2">24h volume</th>
                <th className="py-2">Action</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {getData().map((item) => (
                <tr key={item.symbol} className="border-t border-white/10">
                  <td className="py-4 flex items-center gap-3">
                    <img
                      src={item.icon}
                      alt={item.symbol}
                      className="h-6 w-6"
                    />
                    <div>
                      <div className="font-medium">{item.symbol}</div>
                      <div className="text-gray-400 text-xs">{item.name}</div>
                    </div>
                  </td>
                  <td>{item.price.toLocaleString()}</td>
                  <td
                    className={
                      item.change < 0 ? "text-red-500" : "text-cyan-400"
                    }
                  >
                    {item.change > 0 ? `+${item.change}%` : `${item.change}%`}
                  </td>
                  <td>{item.volume}</td>
                  <td>
                    <Button className="bg-transparent text-white hover:bg-gray-900 px-4 py-1 h-auto text-sm border">
                      Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="text-right mt-4 text-sm text-cyan-400 hover:underline cursor-pointer">
          Explore over 800 assets →
        </div>
      </div>
    </section>
  );
};
