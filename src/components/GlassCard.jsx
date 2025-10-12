export default function GlassCard({ className = "", children, href, ...props }) {
  // Base classes
  const baseClasses = `
    glass
    p-4
    h-full
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
