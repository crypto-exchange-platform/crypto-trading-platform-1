import { FC } from "react";
import { Button } from "../ui/button";

const promotions = [
  {
    title: "WIN 20 USDT!",
    subtitle: "Click here to claim",
  },
  {
    title: "VIP TRADING CHALLENGE",
    subtitle: "Win an Omega watch & share 8,000 USDT in rewards!",
  },
  {
    title: "RAMADAN BLESSINGS",
    subtitle: "Simpler tasks, greater rewards",
  },
  {
    title: "BECOME BITGET VIP CLIENT",
    subtitle: "Get 8,000 USDT as a welcome kit!",
  },
];

export const HeroSpinPrize: FC = () => {
  return (
    <section className="w-full bg-transparent text-white">
      <div className="container mx-auto px-4 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold leading-tight lg:text-5xl">
            Spin & Score! 100% Guaranteed Prize
          </h1>
          <p className="text-lg text-gray-300">
            Win Popular Tokens Like ADA, XRP, SOL, and More.
          </p>

          <form className="flex w-full max-w-md rounded overflow-hidden border border-white/30">
            <input
              type="text"
              placeholder="Email/Phone number"
              className="flex-1 bg-transparent px-4 py-2 text-white placeholder:text-white/50 focus:outline-none"
            />
            <Button type="submit" className="rounded-none">
              Start now
            </Button>
          </form>
        </div>

        <div className="flex justify-center">
          <img
            src="/token_orb.png"
            alt="Spin reward visual"
            className="w-full max-w-xs md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>

      <div className="w-full overflow-x-auto py-8">
        <div className="container mx-auto px-4 flex gap-4 md:justify-center">
          {promotions.map(({ title, subtitle }) => (
            <div
              key={title}
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
