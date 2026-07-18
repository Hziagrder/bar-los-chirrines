import './Reservations.css'

const PHONE_TEL = '+34602064226'
const PHONE_DISPLAY = '602 06 42 26'
const WHATSAPP_LINK = 'https://wa.me/34602064226'

const STEPS = [
  {
    title: 'Llámanos',
    text: 'Pulsa el botón y te ponemos directamente en llamada con el bar.',
  },
  {
    title: 'Dinos día, hora y comensales',
    text: 'Con eso nos basta para dejarte la mesa reservada.',
  },
  {
    title: 'Te confirmamos',
    text: 'Te lo confirmamos en la misma llamada.',
  },
]

export default function Reservations() {
  return (
    <section id="reservas" className="reservas">
      <div className="reservas__inner">
        <div className="reservas__copy">
          <p className="eyebrow eyebrow--invert">Reservas</p>
          <h2>Resérvanos por teléfono, sin líos</h2>
          <p className="reservas__lead">
            Nada de formularios largos. Nos llamas, nos dices cuántos sois y a qué hora
            venís, y te guardamos la mesa.
          </p>

          <div className="reservas__actions">
            <a className="btn btn--primary btn--large" href={`tel:${PHONE_TEL}`}>
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>
            <a className="btn btn--ghost-invert btn--large" href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              <WhatsappIcon />
              WhatsApp
            </a>
          </div>
        </div>

        <ol className="reservas__steps">
          {STEPS.map((step, i) => (
            <li key={step.title} className="reservas__step">
              <span className="reservas__step-index">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
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

function WhatsappIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.63 1.44 5.15L2 22l5.09-1.53a9.88 9.88 0 0 0 4.95 1.33c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.35-.5.05-.98.24-3.3-.7-2.79-1.14-4.6-3.97-4.74-4.16-.14-.19-1.13-1.5-1.13-2.87 0-1.36.71-2.03.97-2.3.26-.28.56-.34.75-.34.19 0 .38 0 .54.01.18.01.42-.07.65.5.24.58.82 2 .89 2.14.07.15.12.32.02.51-.1.19-.15.31-.3.48-.14.17-.3.37-.43.5-.14.14-.29.29-.13.57.17.28.75 1.24 1.62 2.01 1.11 1 2.05 1.3 2.33 1.45.28.14.44.12.6-.07.17-.19.71-.83.9-1.11.19-.28.38-.24.63-.14.26.09 1.65.78 1.94.92.28.14.47.21.54.33.07.12.07.71-.17 1.4z" />
    </svg>
  )
}
