import { SmartphoneNfc, ReceiptText, ThumbsUp } from 'lucide-react'

const steps = [
  {
    icon: SmartphoneNfc,
    title: 'Scan the table QR',
    desc: 'Guests point their camera and open a hosted checkout with the live bill.',
  },
  {
    icon: ReceiptText,
    title: 'Review & pay',
    desc: 'Secure payment with cards or wallets. Add tip, split, and save receipt.',
  },
  {
    icon: ThumbsUp,
    title: 'Done in seconds',
    desc: 'Staff is notified instantly and your POS updates automatically.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">How it works</h2>
          <p className="mt-3 text-slate-600">Three steps to delight guests and staff.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div key={s.title} className="rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{i + 1}. {s.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
