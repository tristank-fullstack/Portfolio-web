// src/components/CTAButton.tsx
export default function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      className="group inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-6 py-3 font-medium shadow hover:bg-blue-700 transition"
    >
      {children}
      <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
    </a>
  );
}
