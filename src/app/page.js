import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Events from "@/components/Events";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <Hero />
     
      <Events />
      <About/>
      <Contact />
      <Footer />
    </div>
  );
}
