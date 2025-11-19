import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
// import ComedyShowFeature from "@/components/ComedyShowFeature";
import FloatingComedyWidget from "@/components/FloatingComedyWidget";
import About from "@/components/About";
import Events from "@/components/Events";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Galaxy from "@/components/Galaxy";
import TeamPage from "./team/page";
import FAQ from "@/components/FAQ";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Floating Corner Widget */}
      <FloatingComedyWidget />
      
      {/* Animated starfield background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* <ComedyShowFeature /> */}
        <About/>
        <Schedule />
        {/* <Events /> */}
        <Contact />
        <FAQ /> 
        <Footer />
      </div>
    </div>
  );
}