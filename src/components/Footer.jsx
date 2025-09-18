import { GitHubIcon, TwitterIcon, LinkedInIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-20 md:mt-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="glass p-8 rounded-t-2xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-orbitron text-2xl font-bold text-white">
                RoboFiesta 2025
              </h3>
              
            </div>
            <div className="flex items-center gap-6">
              <TwitterIcon />
              <GitHubIcon />
              <LinkedInIcon />
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-white/60 text-sm">
            © {new Date().getFullYear()} RoboFiesta. All rights reserved.
            
          </div>
        </div>
      </div>
    </footer>
  );
}
