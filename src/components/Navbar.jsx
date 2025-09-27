import Image from "next/image";
import Link from "next/link";

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="neon-box px-3 py-1.5 text-sm md:text-base text-white/80 hover:text-[var(--accent)]"
    >
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    // ✅ The header is no longer sticky itself. Stickiness is now controlled by the child elements.
    <header className="z-50">
      <div className="mx-auto max-w-full px-4 md:px-8">
        {/* Desktop View: The entire bar is sticky */}
        <div className="hidden md:flex sticky top-4 mt-4 glass items-center justify-between px-6 py-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/img/logo.avif"
              alt="RoboFiesta 2025 Logo"
              width={240}
              height={56}
              className="h-auto"
              priority
            />
          </Link>
          <nav className="flex items-center gap-3">
            <NavLink href="/#">Home</NavLink>
            <NavLink href="/#about">About</NavLink>
            <NavLink href="/events">Events</NavLink>
            <NavLink href="/#schedule">Schedule</NavLink>
            <NavLink href="/#contact">Contact</NavLink>
          </nav>
        </div>

        {/* Mobile View */}
        <div className="md:hidden mt-4 space-y-2">
          {/* Logo bar: This is NOT sticky and will scroll away */}
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
          {/* Nav links bar: This IS sticky */}
          <div className="glass sticky top-4 flex justify-center px-6 py-1">
            <nav className="flex items-center gap-3">
              <NavLink href="/#home">Home</NavLink>
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
