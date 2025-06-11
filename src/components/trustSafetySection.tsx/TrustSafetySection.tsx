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
    <section className="w-full bg-gradient-to-b from-[#001010] via-[#082c2b] to-[#0a1f1c] text-white py-24 px-4">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold mb-2">Safe and reliable</h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We are committed to safeguarding your assets and ensuring the security of your information.
        </p>
      </div>

      <div className="flex justify-center mb-16">
        <img
          src="/chart1.png"
          alt="Security Illustration"
          className="max-w-[1200px] w-full"
        />
      </div>

      <div className="container mx-auto grid md:grid-cols-3 gap-8 text-left text-sm">
        {trustItems.map((item) => (
          <div key={item.title} className="flex flex-col gap-2 px-4">
            <h3 className="text-white font-semibold">{item.title}</h3>
            <p className="text-gray-400">{item.description}</p>
            <span className="text-white text-xl mt-2">→</span>
          </div>
        ))}
      </div>
    </section>
  );
};
 