import Countdown from "@/components/Countdown";
import StarBorder from "@/components/StarBorder";
import { EVENT_DATE_ISO, REG_LINK } from "@/lib/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="section pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          <div className="flex-1">
            <div className="flex justify-start">
              <Image
                src="/img/logo.png"
                alt="RoboFiesta 2025 Logo"
                width={500}
                height={56}
                className="h-auto w-full max-w-md md:max-w-none"
                priority
              />
            </div>
            <p className="mt-4 text-white/80 text-lg md:text-xl">
              RoboFiesta 2025 — A Tech event celebrating AI, Robotics, and Tech.
            </p>
            <p className="mt-2 text-white/70">
              Oct 13, 2025 | Bengaluru, India
            </p>

            <p className="mt-4 text-white/80 text-lg md:text-xl">
              Our Pre Events Start in
            </p>

            <Countdown targetDate={EVENT_DATE_ISO} />
          </div>
          <div className="flex-1 w-full">
            <div className="glass p-6 md:p-10 text-center">
              <p className="mt-4 text-white/80 text-lg md:text-xl">Featured Hackathon</p>
              <div className="font-orbitron text-3xl md:text-5xl font-extrabold mt-2 neon-subtitle">
                Hack-A-Day
              </div>
              {/* <p className="mt-4 text-white/80 text-lg md:text-xl">Hackathon</p> */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="glass py-3">
                  <div className="text-xs text-white/60">Location</div>
                  <div className="font-semibold">RVITM</div>
                </div>
                <div className="glass py-3">
                  <div className="text-xs text-white/60">Dates</div>
                  <div className="font-semibold">Oct 13</div>
                </div>
                <div className="glass py-3">
                  <div className="text-xs text-white/60">Prize Pool</div>
                  <div className="font-semibold">₹30,000</div>
                </div>
                
              </div>
              <div className="mt-8">
                <StarBorder
                  as="a"
                  href={REG_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-bold "
                  color="cyan"
                  speed="1.5s"
                >
                  REGISTER NOW
                </StarBorder>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
