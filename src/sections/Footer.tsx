import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react'

const columns = [
  {
    title: 'For Buyers',
    links: ['Product Sourcing', 'Supplier Verification', 'Quality Control', 'Logistics & Freight'],
  },
  {
    title: 'For Exporters',
    links: ['Digital Marketing', 'B2B Lead Generation', 'Multilingual Websites', 'Brand Positioning'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Process', 'Client Stories', 'Contact'],
  },
]

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="inline-flex rounded-xl bg-white p-3">
              <img src="/logo.png" alt="Trade E-China" className="h-9 w-auto" />
            </div>
            <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-white/60">
              The trusted bridge between global buyers and verified Chinese manufacturers — and the
              growth partner for Chinese exporters going global.
            </p>
            <div className="mt-6 space-y-3 text-sm text-white/70">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-brand" /> hello@tradee-china.com
              </p>
              <p className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-brand" /> +86 755 8888 0000
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-brand" /> Futian District, Shenzhen, China
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a href="#top" className="text-sm text-white/60 transition-colors hover:text-brand">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Trade E-China. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {[Linkedin, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#top"
                aria-label="Social link"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white/60 transition-colors hover:border-brand hover:text-brand"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
