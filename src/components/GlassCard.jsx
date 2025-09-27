export default function GlassCard({ className = "", children, href, ...props }) {
  // Base classes including the new transition and hover effects
  const baseClasses = `
    glass
    p-4
    h-full
    cursor-pointer
    transition-all duration-300 ease-in-out
    hover:scale-[1.03]
    hover:shadow-2xl
    hover:shadow-[var(--neon)]/20
    hover:border-[var(--neon)]/30
    ${className}
  `;

  // If a link (href) is provided, render the card as an anchor tag
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={baseClasses}
        {...props}
      >
        {children}
      </a>
    );
  }

  // Otherwise, render a standard div
  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
}
