import { FC, useState } from "react";

const faqs = [
  {
    question: "What is a cryptocurrency exchange?",
    answer:
      "A cryptocurrency exchange is a platform where you can buy, sell, and trade digital assets like Bitcoin, Ethereum, and more.",
  },
  {
    question: "What products does Bitget offer?",
    answer:
      "Bitget offers spot trading, futures, copy trading, staking, and a variety of earn products tailored for both beginners and pros.",
  },
  {
    question: "How to buy Bitcoin and other cryptocurrencies on Bitget?",
    answer:
      "Simply create an account, complete identity verification, then use fiat methods like credit cards or P2P to buy crypto.",
  },
  {
    question: "How do you track cryptocurrency prices?",
    answer:
      "You can track prices in real-time on Bitget using the live charts, watchlists, and market overview pages.",
  },
  {
    question: "How to trade cryptocurrencies on Bitget?",
    answer:
      "Choose between spot or futures markets, analyze charts, place market or limit orders, and manage your positions in the trading UI.",
  },
  {
    question: "How to earn with crypto on Bitget?",
    answer:
      "You can earn through staking, copy trading, saving products, or participating in promotions and campaigns.",
  },
  {
    question: "Why choose Bitget as your cryptocurrency exchange?",
    answer:
      "Bitget offers security, low fees, a user-friendly interface, and tools like copy trading to support your trading journey.",
  },
];

export const FaqSection: FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(i === openIndex ? null : i);
  };

  return (
    <section className="w-full bg-gradient-to-b from-[#0a1f1c] via-[#082c2b] to-[#0a1f1c] text-white py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12">FAQ</h2>

        <div className="space-y-4 divide-y divide-white/10 border-y border-white/10">
          {faqs.map(({ question, answer }, i) => (
            <div key={i} className="py-4">
              <button
                onClick={() => toggle(i)}
                className="w-full flex justify-between items-center text-left text-lg font-medium"
              >
                <span>{question}</span>
                <span className="text-xl">{openIndex === i ? "−" : "+"}</span>
              </button>
              {openIndex === i && (
                <p className="text-gray-400 mt-3 text-sm">{answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
 