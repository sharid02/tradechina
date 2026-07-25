import { PackageSearch, ShieldCheck, ClipboardCheck, Ship, Megaphone, Users } from 'lucide-react'

const services = [
  {
    icon: PackageSearch,
    title: 'Product Sourcing',
    text: 'Tell us the product, spec and target price. We shortlist vetted factories and negotiate on your behalf — no endless Alibaba roulette.',
  },
  {
    icon: ShieldCheck,
    title: 'Supplier Verification & Audits',
    text: 'Business licenses, factory tours, production capacity and export history — verified in person before you wire a single dollar.',
  },
  {
    icon: ClipboardCheck,
    title: 'Quality Control & Inspection',
    text: 'Pre-production, in-line and pre-shipment inspections with photo and video reports, so what you ordered is what arrives.',
  },
  {
    icon: Ship,
    title: 'Logistics & Freight',
    text: 'Sea, air and rail freight with customs clearance handled end to end. Transparent quotes, tracked containers, on-time delivery.',
  },
  {
    icon: Megaphone,
    title: 'Export Digital Marketing',
    text: 'For Chinese manufacturers: multilingual websites, SEO, paid campaigns and content that put your factory in front of overseas buyers.',
  },
  {
    icon: Users,
    title: 'B2B Lead Generation',
    text: 'Targeted outreach and qualification that turns global demand into a steady pipeline of real purchase inquiries — not just clicks.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">What we do</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-royal lg:text-4xl">
            End-to-End Trade Services
          </h2>
          <p className="mt-4 text-lg text-slateblue">
            Everything between "we need this product" and "it's at our warehouse" — handled by one
            accountable team.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-slateblue/20 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-royal/30 hover:shadow-xl hover:shadow-royal/10"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-royal/5 text-royal transition-colors group-hover:bg-brand/10 group-hover:text-brand">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-royal">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-slateblue">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
