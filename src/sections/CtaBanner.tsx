import { ArrowRight, Clock3 } from 'lucide-react'

export default function CtaBanner() {
  return (
    <section id="contact" className="bg-mist py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-royal px-8 py-14 text-center shadow-2xl shadow-royal/30 lg:px-16 lg:py-20">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-32 -right-16 h-80 w-80 rounded-full bg-brand/15 blur-2xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-white lg:text-[2.6rem] lg:leading-tight">
              Ready to Trade with Confidence?
            </h2>
            <p className="mt-4 text-lg text-white/75">
              Tell us what you need — a sourcing specialist or export-growth consultant will reply
              with a concrete plan.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href="mailto:hello@tradee-china.com"
                className="group inline-flex items-center gap-2 rounded-lg bg-brand px-8 py-4 text-base font-semibold text-white shadow-lg shadow-brand/30 transition-all hover:bg-brand-dark"
              >
                Get Your Free Quote
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-white/70">
                <Clock3 className="h-4 w-4 text-brand" />
                Response within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
