import { Banknote, Users, Sparkles, Gauge } from 'lucide-react'

const items = [
  { icon: Gauge, title: '8 min faster turns', desc: 'Free up staff and seat more tables per shift.' },
  { icon: Banknote, title: '+18% tips', desc: 'Pre-set tip nudges with wallets and tap-to-pay.' },
  { icon: Users, title: 'Happier staff', desc: 'Less payment chasing, more hospitality.' },
  { icon: Sparkles, title: 'Delightful UX', desc: 'Branded checkout with POS-agnostic API.' },
]

export default function ValueProps() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-slate-900">{it.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
