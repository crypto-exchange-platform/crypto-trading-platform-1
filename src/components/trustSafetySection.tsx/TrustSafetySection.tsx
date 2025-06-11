import { FC } from "react";

const trustItems = [
  {
    title: "Protection Fund",
    description: "Our $546 M Protection Fund ensures the security of your assets",
  },
  {
    title: "Proof of Reserves",
    description: "We guarantee at least a 1:1 reserve ratio of our customer funds.",
  },
  {
    title: "Cold storage",
    description: "We store most digital assets in offline, multi-signature wallets.",
  },
];

export const TrustSafetySection: FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#001010] via-[#082c2b] to-[#0a1f1c] text-white py-24 px-4 relative">
      <style>
        {`
          @keyframes fadeInUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }

          @keyframes glow {
            0%, 100% { text-shadow: none; }
            50% { text-shadow: 0 0 8px rgba(0, 255, 255, 0.4); }
          }

          .animate-fadeInUp {
            animation: fadeInUp 0.6s ease-out both;
          }

          .animate-float {
            animation: float 4s ease-in-out infinite;
          }

          .animate-glow {
            animation: glow 1.8s ease-in-out infinite;
          }

          .delay-1 { animation-delay: 0.2s; }
          .delay-2 { animation-delay: 0.4s; }
          .delay-3 { animation-delay: 0.6s; }
        `}
      </style>

      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2 animate-fadeInUp">Safe and reliable</h2>
        <p className="text-gray-400 max-w-xl mx-auto animate-fadeInUp delay-1">
          We are committed to safeguarding your assets and ensuring the security of your information.
        </p>
      </div>

      <div className="flex justify-center mb-16">
        <img
          src="/chart1.png"
          alt="Security Illustration"
          className="max-w-[1200px] w-full animate-float"
        />
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-left text-sm">
        {trustItems.map((item, index) => (
          <div
            key={item.title}
            className={`flex flex-col gap-2 px-4 animate-fadeInUp delay-${index + 1}`}
          >
            <h3 className="text-white font-semibold">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
            <span className="text-white text-xl mt-2 animate-glow">→</span>
          </div>
        ))}
      </div>
    </section>
  );
};
 