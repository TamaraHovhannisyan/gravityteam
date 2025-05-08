import AboutTm from "./components/AboutTm";
import Balancing from "./components/Balancing";
import ContactUs from "./components/ContactUs";
import CryptoMarket from "./components/CryptoMarket";
import Footer from "./components/Footer";
import JoinTeam from "./components/JoinTeam";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Balancing />
      <AboutTm />
      <CryptoMarket />
      <Partners />
      <JoinTeam />
      <ContactUs />
      <Footer/>
    </div>
  );
}
