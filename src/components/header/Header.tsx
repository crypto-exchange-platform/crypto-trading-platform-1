import { FC } from "react";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";

const NAV_ITEMS = [
  { key: "buyCrypto", href: "#hero" },
  { key: "markets", href: "#market" },
  { key: "trade", href: "#copy" },
  { key: "futures", href: "#journey" },
  { key: "earn", href: "#faq" },
];

interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

export const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  const { t, i18n } = useTranslation();

  return (
    <header className="w-full bg-transparent text-white p-2">
      <div className="container mx-auto flex items-center justify-between bg-gradient-to-b from-[#001010] via-[#082c2b] to-[#0a1f1c] rounded-md px-4 py-4">
        <a
          href="/"
          aria-label={t("header.homepage")}
          className="flex items-center gap-2"
        >
          <img src="/ic_iotx.svg" alt="Token logo" className="h-10 w-10" />
          <span className="text-lg font-semibold tracking-tight">
            {t("header.brand")}
          </span>
        </a>

        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {NAV_ITEMS.map(({ key, href }) => (
            <a
              key={key}
              href={href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            className="text-sm font-medium"
            onClick={onLogin}
          >
            {t("header.login")}
          </Button>
          <Button
            className="bg-cyan-400 text-black hover:bg-cyan-500"
            onClick={onSignup}
          >
            {t("header.signup")}
          </Button>
          <select
            onChange={(e) => i18n.changeLanguage(e.target.value)}
            value={i18n.language}
            className="bg-transparent border border-gray-500 rounded p-1 text-sm bg-black text-white focus:outline-none focus:border-cyan-400"
          >
            <option value="en" className="text-black">
              EN
            </option>
            <option value="es" className="text-black">
              ES
            </option>
            <option value="de" className="text-black">
              DE
            </option>
          </select>
        </div>
      </div>
    </header>
  );
};
