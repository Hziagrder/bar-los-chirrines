import './Hero.css'

const PHONE_TEL = '+34602064226'
const PHONE_DISPLAY = '602 06 42 26'
const HERO_IMG =
  'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=2000&q=75'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <img className="hero__bg" src={HERO_IMG} alt="" aria-hidden="true" loading="eager" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="hero__content">
        <p className="hero__eyebrow">Pg. de Fabra i Puig, 301 · Barcelona</p>

        <h1 className="hero__title">
          Bar Los <em>Chirrines</em>
        </h1>

        <p className="hero__tagline">Comida casera, buen ambiente y servicio rápido.</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={`tel:${PHONE_TEL}`}>
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
          <a className="btn btn--ghost-invert" href="#menu">
            Ver la carta
          </a>
        </div>
      </div>
    </section>
  )
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
