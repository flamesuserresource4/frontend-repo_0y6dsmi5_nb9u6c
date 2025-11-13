import { useState } from 'react'

const faqs = [
  {
    q: 'Do guests need to download an app?',
    a: 'No. Guests just scan the QR and pay in their mobile browser with cards or wallets.'
  },
  {
    q: 'Can we split the bill?',
    a: 'Yes. Guests can split evenly or by item, add tips, and get a digital receipt.'
  },
  {
    q: 'Does it work with our POS?',
    a: 'We provide a lightweight API and webhooks to sync orders, payments, and tips with most POS systems.'
  },
  {
    q: 'Is it secure?',
    a: 'We use PCI-compliant tokenization and 3D Secure where required to keep payments safe.'
  }
]

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section className="relative py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">FAQs</h2>
          <p className="mt-3 text-slate-600">Answers to common questions</p>
        </div>
        <div className="mt-10 divide-y divide-slate-200/70 rounded-2xl border border-slate-200/70 bg-white">
          {faqs.map((f, i) => (
            <button key={i} onClick={() => setOpen(open === i ? -1 : i)} className="w-full text-left px-6 py-5">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <p className="font-semibold text-slate-900">{f.q}</p>
                  {open === i && (
                    <p className="mt-2 text-sm text-slate-600">{f.a}</p>
                  )}
                </div>
                <span className={`ml-auto text-xl leading-none ${open === i ? 'rotate-45' : ''}`}>+</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
