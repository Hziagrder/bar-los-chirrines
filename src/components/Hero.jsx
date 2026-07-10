import './Hero.css'

const WHATSAPP_LINK = 'https://wa.me/34602064226'
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
          <a
            className="btn btn--primary"
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon />
            Reservar por WhatsApp
          </a>
          <a className="btn btn--ghost-invert" href="#menu">
            Ver la carta
          </a>
        </div>
      </div>
    </section>
  )
}

function WhatsappIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.15L2 22l5.09-1.53a9.88 9.88 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.35-.5.05-.98.24-3.3-.7-2.79-1.14-4.6-3.97-4.74-4.16-.14-.19-1.13-1.5-1.13-2.87 0-1.36.71-2.03.97-2.3.26-.28.56-.34.75-.34.19 0 .38 0 .54.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.28.75 1.24 1.62 2.01 1.11 1 2.05 1.3 2.33 1.45.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.94.92.28.14.47.21.54.33.07.12.07.71-.17 1.4z" />
    </svg>
  )
}
