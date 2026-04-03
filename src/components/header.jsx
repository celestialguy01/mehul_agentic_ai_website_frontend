// Simple class combiner
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function HeaderCtaButton({ className = '', disabled = false }) {
  return (
    <a
      href="#contact"
      aria-label="Get in touch"
      data-state={disabled ? 'disabled' : 'default'}
      className={cn(
        'btn-interaction inline-flex items-center justify-center ' +
          'h-[42px] px-4 py-2.5 ' +
          'bg-[#0F0F0F] text-h text-[16px] text-[#F9FAFB] rounded-[10px] ' +
          (disabled ? 'pointer-events-none opacity-50' : ''),
        className
      )}
    >
      Get in touch
    </a>
  );
}

export default function Header({ className = '', children = null }) {
  return (
    <header
      role="banner"
      className={cn(
        `flex static z-50 justify-end items-center px-2 py-4 w-full site-header md:absolute md:top-0 md:left-0 md:right-0 md:px-16 md:py-12 lg:px-24 lg:py-16`,
        className
      )}
    >
      {/* Left / brand spacer (kept for DOM order & future use) */}
      <div className="flex flex-1 items-center" />

      {/* CTA */}
      <HeaderCtaButton />

      {children}
    </header>
  );
}

