export default function TrustBar() {
  const brands = [
    'Jumeirah', 'Mishkah', 'Couqley', 'Bistro', 'Emirates Leisure', 'Caramel']

  return (
    <section aria-label="Trusted by" className="relative py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/60 bg-white/70 backdrop-blur-xl p-4">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-xs uppercase tracking-widest text-slate-500">Trusted by leading hospitality brands</span>
            {brands.map((b) => (
              <span key={b} className="text-slate-500/80 text-sm font-semibold">
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
