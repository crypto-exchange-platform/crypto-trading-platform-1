import { Header } from "../header/Header";
import { HeroSpinPrize } from "../heroSection/HeroSection";


function LandingPage() {
    return (
        <div className="flex flex-col h-screen bg-gradient-to-b from-[#0a1f1c] via-[#082c2b] to-[#001010]  ">
            <Header/>
            <HeroSpinPrize/>
        </div>
    );
}

export default LandingPage;
 