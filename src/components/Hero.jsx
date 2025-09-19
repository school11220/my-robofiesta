import Countdown from "@/components/Countdown";
import { EVENT_DATE_ISO, REG_LINK } from "@/lib/constants";

export default function Hero() {
  return (
    <section id="home" className="section pt-40 md:pt-44">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="font-orbitron text-4xl md:text-6xl font-extrabold leading-tight neon-title">
              Technoverse:
              <br />
              <span className="text-[var(--neon)]">Beyond Boundaries</span>
            </h1>
            <p className="mt-4 text-white/80 text-lg md:text-xl">
              RoboFiesta 2025 — A Tech event celebrating AI, Robotics, and
              Tech.
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
              {/* <div className="text-white/70 text-sm">Event</div> */}
              <div className="font-orbitron text-3xl md:text-5xl font-extrabold mt-2 neon-subtitle">
                Hack-A-Day
              </div>

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
                  <div className="text-xs text-white/60">Theme</div>
                  <div className="font-semibold">Open Innovation</div>
                </div>
              </div>
              <div className="mt-8">
                <a
                  href={REG_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="glow-btn text-lg p-20"
                >
                  Register Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
