import Spline from '@splinetool/react-spline'
import { CheckCircle2 } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-80">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-8 md:pt-36 md:pb-16 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 shadow-sm">
              <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              Go live in minutes — no apps to download
            </div>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
              QR payments built for modern restaurants
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Let guests scan, pay, and tip instantly at the table. Faster turns, higher tips, happier staff — all with one simple QR.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#cta" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white font-semibold shadow-sm hover:bg-slate-800">
                Start free trial
              </a>
              <a href="#demo" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 font-semibold shadow-sm border border-slate-200/70 hover:bg-slate-50">
                Watch demo
              </a>
            </div>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-600">
              {[
                'No hardware required',
                'Apple Pay & Google Pay',
                'Auto-sync tips to payroll',
                'POS-agnostic API',
              ].map((f) => (
                <li key={f} className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" /> {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative h-[440px] md:h-[560px]">
            <div className="absolute inset-0 rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute -inset-10 bg-gradient-to-tr from-indigo-500/20 via-sky-400/10 to-transparent blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
