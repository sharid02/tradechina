import { ShieldCheck, Languages, FileText, Handshake } from 'lucide-react'

const points = [
  {
    icon: ShieldCheck,
    title: 'Verified, Not Promised',
    text: 'Every supplier in our network passes an on-site audit. Certificates, capacity and history — checked by our own team, not taken on faith.',
  },
  {
    icon: Languages,
    title: 'Bilingual Trade Experts',
    text: 'Native-level English and Mandarin speakers on every account. Nothing gets lost in translation — in contracts or in culture.',
  },
  {
    icon: FileText,
    title: 'Transparent Pricing',
    text: 'Factory quotes, our service fee and freight costs are itemized line by line. No hidden margins, no surprise invoices.',
  },
  {
    icon: Handshake,
    title: 'End-to-End Accountability',
    text: 'One contract, one point of contact, one team responsible from first sample to final delivery. If something goes wrong, we fix it.',
  },
]

export default function WhyUs() {
  return (
    <section id="why" className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-royal/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-start gap-14 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand">Why Trade E-China</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-white lg:text-4xl">
              Trust Isn't Claimed. It's Verified.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/70">
              Cross-border trade runs on confidence. We've built our entire operation around
              earning it — on both sides of every deal.
            </p>
            <div className="mt-9 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
              <div>
                <p className="text-3xl font-extrabold text-white">15<span className="text-brand">+</span></p>
                <p className="mt-1 text-sm text-white/60">Years in China trade</p>
              </div>
              <div>
                <p className="text-3xl font-extrabold text-white">$120M<span className="text-brand">+</span></p>
                <p className="mt-1 text-sm text-white/60">Trade volume facilitated</p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {points.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-brand/40 hover:bg-white/[0.08]"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
