import { FC } from "react";

const ads = [
  {
    text: "Earn rewards with zero fees!",
    icon: "/ic_iotx.svg",
  },
  {
    text: "Invite friends and win up to 100 USDT",
    icon: "/ic_iotx.svg",
  },
  {
    text: "VIP clients enjoy exclusive perks",
    icon: "/ic_iotx.svg",
  },
  {
    text: "Copy pro traders in one click",
    icon: "/ic_iotx.svg",
  },
  {
    text: "Earn rewards with zero fees!",
    icon: "/ic_iotx.svg",
  },
  {
    text: "Invite friends and win up to 100 USDT",
    icon: "/ic_iotx.svg",
  },
  {
    text: "VIP clients enjoy exclusive perks",
    icon: "/ic_iotx.svg",
  },
  {
    text: "Copy pro traders in one click",
    icon: "/ic_iotx.svg",
  },
  {
    text: "Earn rewards with zero fees!",
    icon: "/ic_iotx.svg",
  },
  {
    text: "Invite friends and win up to 100 USDT",
    icon: "/ic_iotx.svg",
  },
  {
    text: "VIP clients enjoy exclusive perks",
    icon: "/ic_iotx.svg",
  },
  {
    text: "Copy pro traders in one click",
    icon: "/ic_iotx.svg",
  },
];

export const MovingAdBanner: FC = () => {
  return (
    <div className="relative overflow-hidden bg-transparent py-6 border-t border-b border-white/10">
        
      <div className="marquee-wrapper flex items-center h-10">
        <div className="marquee-content flex items-center gap-12">
          {[...ads, ...ads].map((ad, index) => (
            <div
              key={index}
              className="flex items-center gap-3 text-white text-base font-medium min-w-max transition-transform duration-300 hover:scale-105"
            >
              <img src={ad.icon} alt="Ad Icon" className="h-6 w-6" />
              <span className="whitespace-nowrap">{ad.text}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .marquee-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .marquee-content {
          display: inline-flex;
          min-width: 200%;
          animation: marquee 45s linear infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};
 