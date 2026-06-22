import { Star } from 'lucide-react'

type GoogleReviewCardProps = {
  name: string
  city: string
  quote: string
}

export function GoogleReviewCard({ name, city, quote }: GoogleReviewCardProps) {
  return (
    <div className="review-card p-5 rounded-2xl border border-gray-100 card-hover" style={{ background: '#FAFAFA' }}>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="#FACC15" stroke="none" />
          ))}
        </div>
        <span className="text-xs text-gray-400 font-medium">Google</span>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed italic mb-4">&ldquo;{quote}&rdquo;</p>
      <div className="text-sm font-bold" style={{ color: '#0A0F1E' }}>{name}</div>
      <div className="text-gray-400 text-xs">{city}</div>
    </div>
  )
}
