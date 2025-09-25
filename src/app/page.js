import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Galaxy from "@/components/Galaxy";

export default function Home() {
  return (
    <div className="min-h-screen text-white relative">
      {/* Animated starfield background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="stars"></div>
        <div className="twinkling"></div>
        <div className="clouds"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About/>
        <Schedule />
        {/* <Events /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
