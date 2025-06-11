import { FC } from "react";

const footerLinks = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Blog", "Press"],
  },
  {
    title: "Products",
    links: ["Spot Trading", "Futures", "Copy Trading", "Earn"],
  },
  {
    title: "Copy",
    links: ["Top Traders", "How It Works", "Leaderboard"],
  },
  {
    title: "Services",
    links: ["Referral Program", "VIP Club", "Academy"],
  },
  {
    title: "Legal and Compliance",
    links: ["Terms of Service", "Privacy Policy", "Licenses"],
  },
  {
    title: "Tools",
    links: ["Fee Calculator", "API Docs", "Download App"],
  },
];

export const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-[#001010] via-[#082c2b] to-[#001010]  text-white border-t border-white/10 py-16 px-4">
      <div className="container mx-auto grid lg:grid-cols-6 md:grid-cols-3 gap-8 text-sm">
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-gray-400">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4 border-t border-white/10 pt-6">
        <p>© {year} Bitget. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <span>🌐 English</span>
          <a href="#" className="hover:text-white">
            Change
          </a>
        </div>
      </div>
    </footer>
  );
};
