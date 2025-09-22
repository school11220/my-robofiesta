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
      {/* Galaxy WebGL Background */}
      <div className="fixed inset-0 w-full h-full">
        <Galaxy 
          mouseRepulsion={true}
          mouseInteraction={true}
          density={3.5}
          glowIntensity={0.6}
          saturation={1.0}
          hueShift={180}
          twinkleIntensity={0.4}
          rotationSpeed={0.01}
          speed={0.5}
          transparent={false}
          repulsionStrength={1.5}
        />
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
