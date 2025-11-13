import { ShieldCheck, Wallet, Clock3, Sparkles, QrCode, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: QrCode,
    title: 'Table QR Pay',
    desc: 'Unique codes per table for instant scan-to-pay with itemized checks.',
  },
  {
    icon: Wallet,
    title: 'One-tap Wallets',
    desc: 'Apple Pay, Google Pay, and saved cards. No app downloads ever.',
  },
  {
    icon: ShieldCheck,
    title: 'Bank-grade Security',
    desc: 'PCI-compliant tokenization and 3D Secure where required.',
  },
  {
    icon: Clock3,
    title: 'Faster Turns',
    desc: 'Cut payment time by 8 minutes per table on average.',
  },
  {
    icon: BarChart3,
    title: 'Tip Optimization',
    desc: 'Smart defaults and tip nudges increase average tip by 18%.',
  },
  {
    icon: Sparkles,
    title: 'Plug & Play',
    desc: 'Works alongside your POS with a lightweight API.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Built for hospitality</h2>
          <p className="mt-3 text-slate-600">Everything you need to turn tables faster and earn more tips.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
