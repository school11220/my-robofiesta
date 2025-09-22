import Image from "next/image";

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="neon-box px-3 py-1.5 text-sm md:text-base text-white/80 hover:text-[var(--accent)]"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50">
      <div className="mx-auto max-w-full px-4 md:px-8">
        {/* Desktop View: A single bar, hidden on mobile */}
        <div className="hidden md:flex mt-4 glass items-center justify-between px-6 py-2">
          <a href="/#" className="flex items-center gap-2">
            <Image
              src="/img/logo.avif"
              alt="RoboFiesta 2025 Logo"
              width={240}
              height={56}
              className="h-auto"
              priority
            />
          </a>
          <nav className="flex items-center gap-3">
            <NavLink href="/#">Home</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/#schedule">Schedule</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </nav>
        </div>

        {/* Mobile View: Two separate bars, hidden on desktop */}
        <div className="md:hidden mt-4 space-y-2">
          {/* Logo bar */}
          <div className="glass flex justify-center px-6 py-2">
            <a href="/#home" className="flex items-center gap-2">
              <Image
              src="/img/logo.avif"
              alt="RoboFiesta 2025 Logo"
              width={240}
              height={56}
              className="h-auto"
              priority
            />
            </a>
          </div>
          {/* Nav links bar */}
          <div className="glass flex justify-center px-6 py-1">
            <nav className="flex items-center gap-3">
              <NavLink href="/#home">Home</NavLink>
              {/* <NavLink href="/#about">About</NavLink> */}
              <NavLink href="/#schedule">Schedule</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
