import HeroSection from "../modules/Home/1-Hero-Section";
import Sections from "../modules/Home/3-Sections";
import PartnerUp from "../modules/Home/4-Contact-Form";
import Footer from "../modules/Footer";
import Partners from "../modules/Home/2-Partners";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Partners />
      <Sections />
      <PartnerUp />
      <Footer />
    </>
  );
}