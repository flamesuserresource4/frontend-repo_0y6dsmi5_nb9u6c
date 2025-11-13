import { useState } from 'react'
import { Menu, X, CreditCard, QrCode } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Features', href: '#features' },
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Pricing', href: '#pricing' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/60 backdrop-blur-xl shadow-lg shadow-black/5">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-500 p-2 text-white shadow-md">
                <QrCode size={18} />
              </div>
              <span className="text-lg font-semibold tracking-tight text-slate-800">TapNScan</span>
            </a>

            <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="hover:text-slate-900 transition-colors">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900">Pricing</a>
              <a href="#cta" className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors">
                <CreditCard size={16} /> Start free
              </a>
            </div>

            <button className="md:hidden inline-flex items-center justify-center rounded-xl border border-slate-200/60 bg-white/70 p-2 shadow-sm" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/40 px-4 py-3">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-white/70">
                    {item.label}
                  </a>
                ))}
                <a href="#cta" onClick={() => setOpen(false)} className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white">
                  <CreditCard size={16} /> Start free
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
