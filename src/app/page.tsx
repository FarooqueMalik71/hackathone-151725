import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ThirdDiv from "./components/ThirdDiv";
import FourthDev from "./components/FourthDev";
import FifthDev from "./components/FifthDev";


export default function Home() {
  return (
    <div className="homepage py-2 px-2">
      <Header />

      <Hero />
      <ThirdDiv />
      <FourthDev />
      <FifthDev />
      
      <Footer />
    </div>
  );
}
