import './Reservations.css'

const PHONE_TEL = '+34602064226'
const PHONE_DISPLAY = '602 06 42 26'

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

          <a className="btn btn--primary btn--large" href={`tel:${PHONE_TEL}`}>
            <PhoneIcon />
            {PHONE_DISPLAY}
          </a>
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
