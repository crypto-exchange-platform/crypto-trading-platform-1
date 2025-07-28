import { FC } from "react";
import { useTranslation } from "react-i18next";

export const Footer: FC = () => {
  const { t } = useTranslation();
  const footerLinks = t("footer.links", { returnObjects: true }) as { title: string; links: string[] }[];

  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-gradient-to-b from-[#001010] via-[#082c2b] to-[#001010] text-white border-t border-white/10 py-16 px-4">
      <div className="container mx-auto grid lg:grid-cols-6 md:grid-cols-3 gap-8 text-sm">
        {footerLinks.map((section, idx) => (
          <div key={idx}>
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-gray-400">
              {section.links.map((link, linkIdx) => (
                <li key={linkIdx}>
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
        <p>© {year} Bitget. {t("footer.rights")}</p>
        <div className="flex items-center gap-4">
          <span>🌐 {t("footer.language")}</span>
          <a href="#" className="hover:text-white">
            {t("footer.change")}
          </a>
        </div>
      </div>
    </footer>
  );
};
