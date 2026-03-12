import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Root() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--color-cream)] text-[var(--color-ink)]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-black/8 bg-white/85 backdrop-blur-lg">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <NavLink to="/" className="font-display text-xl tracking-[0.18em] uppercase">
            Cion Tan
          </NavLink>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-[0.16em] transition ${
                    isActive ? "text-[var(--color-ink)]" : "text-black/55 hover:text-[var(--color-ink)]"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="rounded-full border border-black/10 p-2 md:hidden"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-black/8 bg-white px-4 py-4 md:hidden">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm uppercase tracking-[0.16em] ${
                      isActive ? "bg-black text-white" : "bg-black/[0.03] text-black/70"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        ) : null}
      </nav>

      <main className="pt-18">
        <Outlet />
      </main>

      <footer className="border-t border-black/8 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 text-sm text-black/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 Cion Tan. Generated from the Figma Make design.</p>
          <div className="flex flex-wrap gap-5">
            <a href="https://linkedin.com/in/cion-tan" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/ciontan" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a href="mailto:cion.tan.se@gmail.com">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
