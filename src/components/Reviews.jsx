import { useState } from 'react'
import './Reviews.css'

const REVIEWS = [
  {
    name: 'Sintia Mejia Peña',
    meta: 'Local Guide · 11 reseñas',
    rating: 5,
    text: 'Muy contenta de que llegara al barrio un bar tan completo... tienen desayunos a tan solo 2,40€ con menú diario 11,50€ y los pollos a l\u2019ast a 12,90€ con deliciosas patatas al horno. Recomendado.',
  },
  {
    name: 'Xioralis Roque',
    meta: '9 reseñas',
    rating: 5,
    text: 'Me ha encantado el sitio, buenos precios y la comida muy rica. Pero resalto la atención de la dependienta Karen, un gusto total. Volvería sin dudas.',
  },
  {
    name: 'A.',
    meta: 'Google',
    rating: 5,
    text: 'Buen café, las empanadas riquísimas y tienen muchos sabores.',
  },
  {
    name: 'P.',
    meta: 'Google',
    rating: 5,
    text: 'Hemos venido a desayunar una amiga y yo y todo súper bien.',
  },
]

export default function Reviews() {
  const [index, setIndex] = useState(0)

  const go = (dir) => {
    setIndex((i) => (i + dir + REVIEWS.length) % REVIEWS.length)
  }

  const current = REVIEWS[index]

  return (
    <section id="opiniones" className="reviews">
      <div className="reviews__header">
        <p className="eyebrow">Opiniones</p>
        <h2>Lo que dicen nuestros clientes</h2>
      </div>

      <div className="reviews__carousel">
        <button className="reviews__arrow" onClick={() => go(-1)} aria-label="Reseña anterior">
          <ArrowIcon direction="left" />
        </button>

        <article className="reviews__card">
          <div className="reviews__stars" aria-hidden="true">
            {'★'.repeat(current.rating)}
          </div>
          <p className="reviews__text">&ldquo;{current.text}&rdquo;</p>
          <div className="reviews__author">
            <span className="reviews__name">{current.name}</span>
            <span className="reviews__meta">{current.meta}</span>
          </div>
        </article>

        <button className="reviews__arrow" onClick={() => go(1)} aria-label="Siguiente reseña">
          <ArrowIcon direction="right" />
        </button>
      </div>

      <div className="reviews__dots">
        {REVIEWS.map((r, i) => (
          <button
            key={r.name}
            className={`reviews__dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir a la reseña de ${r.name}`}
          />
        ))}
      </div>
    </section>
  )
}

function ArrowIcon({ direction }) {
  const d = direction === 'left' ? 'M15 18l-6-6 6-6' : 'M9 18l6-6-6-6'
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}
