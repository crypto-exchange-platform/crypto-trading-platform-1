import { Header } from "../header/Header";
import { HeroSpinPrize } from "../heroSection/HeroSection";
import { MarketTableTabs } from "../marketTableTab/MarketTable";
import { CopyTradingShowcase } from "../tradingShowcase/TradingShowCase";
import { StartCryptoJourney } from "../startCryptoJourney/StartCryptoJourney";
import { TrustSafetySection } from "../trustSafetySection.tsx/TrustSafetySection";
import { FaqSection } from "../faqSection/FaqSection";
import { Footer } from "../footer/Footer";
import { LoginModal } from "../loginModal.tsx/LoginModal";
import { SignupModal } from "../signUpModal.tsx/SignUpModal";
import { useState } from "react";

function LandingPage() {
  const [modal, setModal] = useState<"login" | "signup" | null>(null);

  return (
    <>
       {modal === "login" && <LoginModal onClose={() => setModal(null)} />}
      {modal === "signup" && (
        <SignupModal
          onClose={() => setModal(null)}
          onSignupSuccess={() => setModal("login")}
        />
      )} 

      <div className="flex flex-col bg-gradient-to-b from-[#0a1f1c] via-[#082c2b] to-[#001010]">
        <Header
          onLogin={() => setModal("login")}
          onSignup={() => setModal("signup")}
        />
        <section id="hero">
          <HeroSpinPrize />
        </section>
        <section id="market">
          <MarketTableTabs />
        </section>
        <section id="copy">
          <CopyTradingShowcase />
        </section>
        <section id="journey">
          <StartCryptoJourney onSignup={() => setModal("signup")} />
        </section>
        <section id="trust">
          <TrustSafetySection />
        </section>
        <section id="faq">
          <FaqSection />
        </section>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
