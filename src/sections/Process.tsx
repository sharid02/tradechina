const steps = [
  {
    n: '01',
    title: 'Share Your Requirement',
    text: 'Send us your product specs, drawings or even a rough idea. A sourcing specialist responds within 24 hours.',
  },
  {
    n: '02',
    title: 'Supplier Match & Verification',
    text: 'We shortlist 3–5 qualified factories, audit them in person and present transparent quotes side by side.',
  },
  {
    n: '03',
    title: 'Production & Quality Control',
    text: 'We oversee production milestones and inspect goods before shipment — with reports you can actually read.',
  },
  {
    n: '04',
    title: 'Delivery & Beyond',
    text: 'Freight, customs and final delivery are tracked to your door. Reorders and after-sales stay on our watch.',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-mist py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">How it works</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-royal lg:text-4xl">
            From Inquiry to Delivery in Four Steps
          </h2>
          <p className="mt-4 text-lg text-slateblue">
            A process refined over thousands of shipments — predictable, transparent, and built
            around your timeline.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {/* connector line */}
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-slateblue/30 lg:block" />
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-royal text-lg font-extrabold text-white shadow-lg shadow-royal/25">
                {i + 1}
                <span className="absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-mist bg-brand" />
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-slateblue">Step {s.n}</p>
              <h3 className="mt-2 text-lg font-bold text-royal">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-slateblue">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
