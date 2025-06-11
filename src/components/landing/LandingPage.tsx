import { Header } from "../header/Header";
import { HeroSpinPrize } from "../heroSection/HeroSection";
import { MarketTableTabs } from "../marketTableTab/MarketTable";


function LandingPage() {
    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-[#0a1f1c] via-[#082c2b] to-[#001010]  ">
            <Header/>
            <HeroSpinPrize/>
            <MarketTableTabs/>
        </div>
    );
}

export default LandingPage;
 