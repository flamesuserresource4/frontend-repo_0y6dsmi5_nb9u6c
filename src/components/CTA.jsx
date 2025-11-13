export default function CTA() {
  return (
    <section id="cta" className="relative py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200/60 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12 text-white shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold tracking-tight">Launch TapNScan at your restaurant</h3>
              <p className="mt-2 text-white/70">Create your location, upload your menu, and print table QR codes. You’ll be live in under 10 minutes.</p>
            </div>
            <form className="flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Work email" className="w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30" />
              <button type="submit" className="rounded-xl bg-white px-5 py-3 font-semibold text-slate-900 shadow-sm hover:bg-white/90">Get started</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
