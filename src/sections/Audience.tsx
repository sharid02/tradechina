import { Globe2, Megaphone, Check, ArrowRight } from 'lucide-react'

const buyerPoints = [
  'Factory audits & supplier verification before you commit',
  'On-the-ground quality control at every production stage',
  'Negotiation, contracts & secure payment handling',
  'Freight, customs & door-to-door delivery managed for you',
]

const exporterPoints = [
  'Multilingual websites & product catalogs that convert',
  'SEO, Google & LinkedIn campaigns targeting overseas buyers',
  'B2B lead generation with qualified international inquiries',
  'Brand positioning that earns trust in Western markets',
]

export default function Audience() {
  return (
    <section id="audience" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Who we serve</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-royal lg:text-4xl">
            One Bridge. Two Directions.
          </h2>
          <p className="mt-4 text-lg text-slateblue">
            Whether you're buying from China or selling to the world, you get a dedicated team
            that speaks your language — literally and commercially.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Global buyers */}
          <div className="group relative overflow-hidden rounded-2xl bg-royal p-8 text-white shadow-xl shadow-royal/20 lg:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/5" />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
                <Globe2 className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold">For Global Buyers</h3>
              <p className="mt-2 font-medium text-white/70">
                Source from China with total confidence.
              </p>
              <ul className="mt-7 space-y-3.5">
                {buyerPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed text-white/90">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-2 rounded-lg bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-dark"
              >
                Source Products
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Chinese exporters */}
          <div className="group relative overflow-hidden rounded-2xl border border-slateblue/20 bg-white p-8 shadow-xl shadow-royal/5 lg:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-brand/5" />
            <div className="relative">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Megaphone className="h-6 w-6" />
              </span>
              <h3 className="mt-6 text-2xl font-bold text-royal">For Chinese Exporters</h3>
              <p className="mt-2 font-medium text-slateblue">
                Go global. Get found. Get clients.
              </p>
              <ul className="mt-7 space-y-3.5">
                {exporterPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[15px] leading-relaxed text-navy/85">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-9 inline-flex items-center gap-2 rounded-lg border border-royal/30 px-6 py-3 text-sm font-semibold text-royal transition-colors hover:border-royal hover:bg-mist"
              >
                Find Overseas Clients
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
