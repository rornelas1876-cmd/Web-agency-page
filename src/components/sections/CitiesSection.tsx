import { MapPin } from 'lucide-react'
import { cities } from '@/data/cities'
import { SectionHeader } from '@/components/ui/SectionHeader'

export function CitiesSection() {
  return (
    <section className="py-16" style={{ background: '#F8FAFC' }} aria-labelledby="cities-heading">
      <div className="max-w-7xl mx-auto px-5">
        <SectionHeader
          className="mb-10"
          title={
            <span id="cities-heading" className="text-3xl">
              Creamos páginas para negocios en <span className="gradient-text">todo México</span>
            </span>
          }
          subtitle="Trabajamos 100% remoto — te entregamos resultados sin importar dónde estés"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 reveal">
          {cities.map((city) => (
            <div key={city} className="card-hover flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-100 bg-white text-center">
              <MapPin size={22} color="#F59E0B" />
              <span className="text-xs font-semibold text-gray-600">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
