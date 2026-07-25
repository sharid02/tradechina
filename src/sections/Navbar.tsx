import { useState } from 'react'
import { Menu, X, ArrowRight } from 'lucide-react'

const links = [
  { label: 'For Buyers', href: '#audience' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why' },
  { label: 'Stories', href: '#stories' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slateblue/15 bg-offwhite/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#top" className="flex items-center gap-3">
          <img src="/logo.png" alt="Trade E-China" className="h-10 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-medium text-royal/80 transition-colors hover:text-royal"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#contact"
            className="rounded-lg border border-slateblue/50 px-4 py-2 text-sm font-semibold text-royal transition-colors hover:border-royal hover:bg-mist"
          >
            For Exporters
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Get a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <button
          className="rounded-md p-2 text-royal lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slateblue/15 bg-offwhite px-5 pb-6 pt-3 lg:hidden">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-base font-medium text-royal"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-lg bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Get a Free Quote
          </a>
        </div>
      )}
    </header>
  )
}
