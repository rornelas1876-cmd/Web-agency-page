import type { LucideIcon } from 'lucide-react'

type ServiceCardProps = {
  Icon: LucideIcon
  title: string
  problem: string
  solution: string
  result: string
}

export function ServiceCard({ Icon, title, problem, solution, result }: ServiceCardProps) {
  return (
    <div className="service-card glass-card p-6 card-hover" style={{ background: 'rgba(255,255,255,0.04)' }}>
      <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4" style={{ background: 'rgba(245,158,11,0.12)' }}>
        <Icon size={20} color="#F59E0B" />
      </div>
      <h4 className="text-white font-bold text-lg mb-4">{title}</h4>
      <div className="flex flex-col gap-3 text-sm">
        <div>
          <span className="text-red-400 font-bold text-xs uppercase tracking-wide">Problema</span>
          <p className="text-white/55 mt-1 leading-relaxed">{problem}</p>
        </div>
        <div>
          <span className="text-blue-400 font-bold text-xs uppercase tracking-wide">Solución</span>
          <p className="text-white/55 mt-1 leading-relaxed">{solution}</p>
        </div>
        <div>
          <span className="text-green-400 font-bold text-xs uppercase tracking-wide">Resultado</span>
          <p className="text-white/75 mt-1 leading-relaxed font-medium">{result}</p>
        </div>
      </div>
    </div>
  )
}
