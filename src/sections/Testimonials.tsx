import { Quote, Star } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Trade E-China audited three factories for us and caught issues our previous agent missed completely. Our defect rate dropped below 1% in a single quarter.',
    name: 'Markus Weber',
    role: 'Procurement Director, Home Goods Retailer',
    country: 'Germany',
  },
  {
    quote:
      'Within six months of their digital marketing program, 40% of our new inquiries came from overseas buyers we never could have reached on our own.',
    name: 'Liang Chen',
    role: 'Export Manager, Furniture Manufacturer',
    country: 'Foshan, China',
  },
  {
    quote:
      'One team handled sourcing, QC and freight. It honestly feels like having our own office in Shenzhen — without the overhead.',
    name: 'Sarah Mitchell',
    role: 'Founder, Consumer Electronics Brand',
    country: 'United States',
  },
]

export default function Testimonials() {
  return (
    <section id="stories" className="bg-offwhite py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Client stories</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-royal lg:text-4xl">
            Trusted on Both Sides of the Bridge
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slateblue/20 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-royal/10"
            >
              <Quote className="h-7 w-7 text-brand/40" />
              <div className="mt-3 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-navy/85">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 border-t border-slateblue/15 pt-5">
                <p className="font-bold text-royal">{t.name}</p>
                <p className="mt-0.5 text-sm text-slateblue">
                  {t.role} · {t.country}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
