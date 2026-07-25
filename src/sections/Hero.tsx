import { useEffect, useState } from 'react'
import { ArrowRight, ShieldCheck, Ship, FileCheck2, BadgeCheck } from 'lucide-react'

function useCountUp(target: number, duration = 1800, delay = 600) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    let raf: number
    const start = performance.now() + delay
    const tick = (now: number) => {
      const t = Math.min(Math.max((now - start) / duration, 0), 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setValue(Math.round(target * eased))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, delay])
  return value
}

function Stat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const n = useCountUp(value)
  return (
    <div>
      <div className="text-3xl font-extrabold tracking-tight text-royal lg:text-4xl">
        {n.toLocaleString()}
        <span className="text-brand">{suffix}</span>
      </div>
      <div className="mt-1 text-sm font-medium text-slateblue">{label}</div>
    </div>
  )
}

const categories = [
  'Consumer Electronics', 'Industrial Machinery', 'Textiles & Apparel', 'Furniture & Home',
  'Auto Parts', 'LED Lighting', 'Packaging Solutions', 'Building Materials',
  'Medical Supplies', 'Smart Home Devices', 'Kitchenware', 'Sports & Outdoor',
]

function GlobeVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px]">
      {/* glow */}
      <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-royal/5 blur-3xl" />

      <svg viewBox="0 0 600 600" className="relative w-full" role="img" aria-label="Global trade network connecting China to the world">
        <defs>
          <linearGradient id="globeStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#012367" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#8291B0" stopOpacity="0.35" />
          </linearGradient>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#FD7513" />
            <stop offset="100%" stopColor="#012367" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* rotating dashed orbit ring (echoes the logo) */}
        <g className="orbit-spin" style={{ transformOrigin: '300px 300px' }}>
          <ellipse cx="300" cy="300" rx="272" ry="96" fill="none" stroke="#8291B0" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="3 7" transform="rotate(-18 300 300)" />
          <circle cx="562" cy="214" r="5" fill="#FD7513" />
          <circle cx="70" cy="362" r="4" fill="#012367" />
        </g>
        <g className="orbit-spin-rev" style={{ transformOrigin: '300px 300px' }}>
          <ellipse cx="300" cy="300" rx="272" ry="96" fill="none" stroke="#FD7513" strokeOpacity="0.35" strokeWidth="1.2" strokeDasharray="2 9" transform="rotate(24 300 300)" />
          <circle cx="150" cy="142" r="4.5" fill="#FD7513" />
        </g>

        {/* globe sphere */}
        <circle cx="300" cy="300" r="218" fill="#F4F5F7" fillOpacity="0.5" stroke="url(#globeStroke)" strokeWidth="1.6" />
        {/* meridians */}
        <ellipse cx="300" cy="300" rx="218" ry="218" fill="none" stroke="#8291B0" strokeOpacity="0.28" strokeWidth="1" />
        <ellipse cx="300" cy="300" rx="150" ry="218" fill="none" stroke="#8291B0" strokeOpacity="0.28" strokeWidth="1" />
        <ellipse cx="300" cy="300" rx="72" ry="218" fill="none" stroke="#8291B0" strokeOpacity="0.28" strokeWidth="1" />
        {/* parallels */}
        <ellipse cx="300" cy="300" rx="218" ry="70" fill="none" stroke="#8291B0" strokeOpacity="0.28" strokeWidth="1" />
        <ellipse cx="300" cy="300" rx="218" ry="146" fill="none" stroke="#8291B0" strokeOpacity="0.22" strokeWidth="1" />

        {/* trade arcs: China hub -> world nodes */}
        <g fill="none" stroke="url(#arcGrad)" strokeWidth="2" strokeLinecap="round">
          <path id="arc1" className="arc-flow" d="M 418 236 Q 330 120 196 168" />
          <path id="arc2" className="arc-flow" style={{ animationDelay: '0.3s' }} d="M 418 236 Q 250 210 158 300" />
          <path id="arc3" className="arc-flow" style={{ animationDelay: '0.6s' }} d="M 418 236 Q 300 420 214 438" />
          <path id="arc4" className="arc-flow" style={{ animationDelay: '0.9s' }} d="M 418 236 Q 470 380 420 452" />
          <path id="arc5" className="arc-flow" style={{ animationDelay: '1.2s' }} d="M 418 236 Q 240 130 128 210" />
        </g>

        {/* pulses travelling along arcs */}
        <circle r="4" fill="#FD7513">
          <animateMotion dur="3.2s" repeatCount="indefinite"><mpath href="#arc1" /></animateMotion>
        </circle>
        <circle r="3.5" fill="#012367">
          <animateMotion dur="3.8s" begin="0.7s" repeatCount="indefinite"><mpath href="#arc2" /></animateMotion>
        </circle>
        <circle r="4" fill="#FD7513">
          <animateMotion dur="4.2s" begin="1.1s" repeatCount="indefinite"><mpath href="#arc3" /></animateMotion>
        </circle>
        <circle r="3.5" fill="#012367">
          <animateMotion dur="3.6s" begin="0.4s" repeatCount="indefinite"><mpath href="#arc4" /></animateMotion>
        </circle>
        <circle r="4" fill="#FD7513">
          <animateMotion dur="4.6s" begin="1.6s" repeatCount="indefinite"><mpath href="#arc5" /></animateMotion>
        </circle>

        {/* world nodes */}
        <g>
          {[
            [196, 168], [158, 300], [214, 438], [420, 452], [128, 210],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="10" fill="#012367" opacity="0.14" />
              <circle cx={x} cy={y} r="5" fill="#012367" />
            </g>
          ))}
        </g>

        {/* China hub — highlighted */}
        <circle cx="418" cy="236" r="13" fill="#FD7513" opacity="0.2" className="node-ping" />
        <circle cx="418" cy="236" r="13" fill="#FD7513" opacity="0.2" className="node-ping" style={{ animationDelay: '1.2s' }} />
        <circle cx="418" cy="236" r="11" fill="#FD7513" />
        <circle cx="418" cy="236" r="4.5" fill="#FEFEFE" />
        <text x="418" y="212" textAnchor="middle" fontSize="13" fontWeight="700" fill="#012367" fontFamily="Inter, sans-serif">CHINA</text>
      </svg>

      {/* floating status cards */}
      <div className="float-card absolute -left-2 top-[16%] hidden items-center gap-3 rounded-xl border border-slateblue/20 bg-white/95 px-4 py-3 shadow-lg shadow-royal/10 backdrop-blur sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-royal/10 text-royal">
          <FileCheck2 className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-royal">New RFQ matched</p>
          <p className="text-xs text-slateblue">Buyer in Hamburg, DE · 12 min ago</p>
        </div>
      </div>

      <div className="float-card-slow absolute -right-3 top-[42%] hidden items-center gap-3 rounded-xl border border-slateblue/20 bg-white/95 px-4 py-3 shadow-lg shadow-royal/10 backdrop-blur sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-600">
          <BadgeCheck className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-royal">QC inspection passed</p>
          <p className="text-xs text-slateblue">2,400 units · Dongguan factory</p>
        </div>
      </div>

      <div className="float-card-slower absolute bottom-[6%] left-[8%] hidden items-center gap-3 rounded-xl border border-slateblue/20 bg-white/95 px-4 py-3 shadow-lg shadow-royal/10 backdrop-blur sm:flex">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 text-brand">
          <Ship className="h-5 w-5" />
        </span>
        <div>
          <p className="text-sm font-semibold text-royal">Container departed</p>
          <p className="text-xs text-slateblue">Shenzhen → Rotterdam · ETA 26 days</p>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="dot-grid relative overflow-hidden bg-mist pb-16 pt-[120px] lg:pb-20 lg:pt-[150px]">
      {/* soft corner wash */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand/5 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-8 lg:px-8">
        {/* Copy */}
        <div>
          <div className="hero-fade d1 inline-flex items-center gap-2 rounded-full border border-slateblue/30 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-royal">
            <ShieldCheck className="h-3.5 w-3.5 text-brand" />
            Verified Sourcing · Export Growth
          </div>

          <h1 className="hero-fade d2 mt-6 text-[2.6rem] font-extrabold leading-[1.08] tracking-tight text-royal sm:text-5xl lg:text-[3.6rem]">
            Your <span className="hero-underline">Trusted Bridge</span> to China's Best Manufacturers
          </h1>

          <p className="hero-fade d3 mt-6 max-w-xl text-lg leading-relaxed text-slateblue">
            Trade E-China connects international buyers with verified Chinese suppliers — and helps
            Chinese exporters win clients worldwide. One partner, both sides of the trade.
          </p>

          <div className="hero-fade d4 mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-lg bg-brand px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:bg-brand-dark hover:shadow-brand/40"
            >
              Start Sourcing from China
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#audience"
              className="rounded-lg border border-slateblue/50 px-7 py-3.5 text-base font-semibold text-royal transition-colors hover:border-royal hover:bg-mist"
            >
              Grow My Export Business
            </a>
          </div>

          <div className="hero-fade d5 mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-slateblue/20 pt-8">
            <Stat value={2000} suffix="+" label="Verified suppliers" />
            <Stat value={60} suffix="+" label="Countries served" />
            <Stat value={98} suffix="%" label="On-time delivery" />
          </div>
        </div>

        {/* Visual */}
        <div className="hero-fade-soft d3">
          <GlobeVisual />
        </div>
      </div>

      {/* category marquee */}
      <div className="hero-fade-soft d6 marquee-mask mt-16 border-y border-slateblue/15 bg-white/70 py-4 lg:mt-20">
        <div className="marquee-track">
          {[...categories, ...categories].map((c, i) => (
            <span key={i} className="flex items-center whitespace-nowrap text-sm font-medium text-slateblue">
              <span className="px-6">{c}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-brand/60" />
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
