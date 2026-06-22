import { trustIndicators } from '@/data/cities'

export function TrustBar() {
  return (
    <section className="py-10 border-b border-gray-100 bg-white" aria-label="Indicadores de confianza">
      <div className="max-w-7xl mx-auto px-5">
        <p className="text-center text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8 reveal">
          Confían en nosotros
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 reveal">
          {trustIndicators.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 card-hover"
              style={{ background: '#FAFAFA' }}
            >
              <div className="stat-number text-3xl mb-2">{item.stat}</div>
              <div className="text-gray-600 text-sm font-semibold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
