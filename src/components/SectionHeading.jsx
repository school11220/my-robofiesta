export default function SectionHeading({ children, className = "" }) {
  return (
    <h2 className={`font-orbitron text-3xl text-center md:text-4xl font-bold neon-title ${className}`}>
      {children}
    </h2>
  );
}
