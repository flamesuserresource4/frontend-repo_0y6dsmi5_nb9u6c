import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 'Free',
    desc: 'For cafes and pop-ups getting started',
    features: [
      'Up to 500 payments/mo',
      '1 location',
      'Email support',
    ],
    cta: 'Start free',
    highlight: false,
  },
  {
    name: 'Growth',
    price: '1.1% + 15¢',
    desc: 'Best for busy restaurants and bars',
    features: [
      'Unlimited payments',
      'Multi-location',
      'Priority support',
      'POS integrations',
    ],
    cta: 'Talk to sales',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    desc: 'Groups and stadiums at scale',
    features: [
      'Dedicated success manager',
      'Custom SLAs',
      'Advanced analytics',
    ],
    cta: 'Contact us',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free and scale when you’re ready.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlight ? 'border-slate-900' : 'border-slate-200/60'} bg-white p-6 shadow-sm`}>
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{t.desc}</p>
                </div>
                {t.highlight && (
                  <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">Popular</span>
                )}
              </div>
              <div className="mt-4 text-3xl font-bold text-slate-900">{t.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-500" /> {f}
                  </li>
                ))}
              </ul>
              <a href="#cta" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold shadow-sm ${t.highlight ? 'bg-slate-900 text-white hover:bg-slate-800' : 'bg-white text-slate-900 border border-slate-200/70 hover:bg-slate-50'}`}>{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
