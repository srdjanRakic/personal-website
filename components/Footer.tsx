export function Footer() {
  return (
    <footer className="section-dark border-t border-border py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <span className="font-mono text-xs text-muted">© 2026 Srdjan Rakic</span>
        <div className="flex items-center gap-4 font-mono text-xs text-muted">
          <a
            href="https://github.com/srdjanRakic"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-foreground transition-colors duration-200"
          >
            GitHub
          </a>
          <span className="text-border select-none">·</span>
          <span>Next.js · Tailwind · Framer Motion</span>
        </div>
      </div>
    </footer>
  )
}
