import { FC } from "react";
import { Button } from "../ui/button";

const NAV_ITEMS = [
  { label: "Buy crypto", href: "#hero" },
  { label: "Markets", href: "#market" },
  { label: "Trade", href: "#copy" },
  { label: "Futures", href: "#journey" },
  { label: "Earn", href: "#faq" },
];


interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

export const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  return (
    <header className="w-full bg-transparent text-white p-2">
      <div className="container mx-auto flex items-center justify-between bg-gradient-to-b from-[#001010] via-[#082c2b] to-[#0a1f1c] rounded-md px-4 py-4">
        <a href="/" aria-label="Homepage" className="flex items-center gap-2">
          <img src="/ic_iotx.svg" alt="Token logo" className="h-10 w-10" />
          <span className="text-lg font-semibold tracking-tight">Token</span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="text-sm font-medium" onClick={onLogin}>
            Log in
          </Button>
          <Button className="bg-cyan-400 text-black hover:bg-cyan-500" onClick={onSignup}>
            Sign up
          </Button>
        </div>
      </div>
    </header>
  );
};
 