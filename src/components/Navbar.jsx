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
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        {/* Desktop View: A single bar, hidden on mobile */}
        <div className="hidden md:flex mt-4 glass items-center justify-between px-4 py-3">
          <a href="/#" className="flex items-center gap-2">
            <Image
              src="/img/logo.png"
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
          <div className="glass flex justify-center px-4 py-3">
            <a href="/#home" className="flex items-center gap-2">
              <Image
                src="/img/logo.png"
                alt="RoboFiesta 2025 Logo"
                width={200}
                height={46}
                className="h-auto"
                priority
              />
            </a>
          </div>
          {/* Nav links bar */}
          <div className="glass flex justify-center px-4 py-2">
            <nav className="flex items-center gap-3">
              <NavLink href="/#home">Home</NavLink>
              {/* <NavLink href="/#about">About</NavLink> */}
              <NavLink href="#Schedule">Schedule</NavLink>
              <NavLink href="/events">Events</NavLink>
              <NavLink href="/#contact">Contact</NavLink>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
