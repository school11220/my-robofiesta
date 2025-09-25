import Link from "next/link";
import { GitHubIcon, TwitterIcon, YouTubeIcon, InstagramIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="glass p-8 rounded-t-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Title and Navigation */}
            <div className="flex flex-col md:flex-row items-center gap-6">
              <h3 className="font-orbitron text-2xl font-bold text-white text-center md:text-left">
                RoboFiesta 2025
              </h3>
              
              {/* Footer Navigation */}
              <div className="flex items-center gap-4 text-sm">
                <a 
                  href="/team" 
                  className="text-white/70 hover:text-[var(--neon)] transition-colors duration-200"
                >
                  About Team
                </a>
                <span className="text-white/30">•</span>
                <a 
                  href="mailto:robofiesta.rvitm@rvei.edu.in" 
                  className="text-white/70 hover:text-[var(--neon)] transition-colors duration-200"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {/* Uncomment if needed */}
              {/* <a
                href="https://youtube.com/..."
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="hover:scale-110 transition-transform duration-200"
              >
                <YouTubeIcon />
              </a> */}

              <a
                href="https://www.instagram.com/robofiesta.rvitm/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="hover:scale-110 transition-transform duration-200"
              >
                <InstagramIcon />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          {/* Bottom note */}
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} RoboFiesta. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
