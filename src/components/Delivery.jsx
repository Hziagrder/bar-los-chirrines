import './Delivery.css'

const PLATFORMS = [
  {
    name: 'Uber Eats',
    desc: 'Pide online y sigue tu pedido en tiempo real.',
    href: 'https://www.ubereats.com/es/store/rostisseria-los-chirrines/4DZ7SvKxR9i1AvFiZyzFUQ',
    accent: '#06C167',
  },
  {
    name: 'Glovo',
    desc: 'Entrega rápida a domicilio en Barcelona.',
    href: 'https://glovoapp.com/es/es/barcelona/stores/bar-rostisseria-los-chirrines-barcelona',
    accent: '#FFC244',
  },
  {
    name: 'Just Eat',
    desc: 'Busca "Los Chirrines" y pide a domicilio.',
    href: 'https://www.just-eat.es/',
    accent: '#FF8000',
  },
]

export default function Delivery() {
  return (
    <section id="pedir" className="delivery">
      <div className="delivery__header">
        <p className="eyebrow">Pide a domicilio</p>
        <h2>También llegamos a tu casa</h2>
        <p className="delivery__subtitle">
          Elige tu app favorita y pide directamente desde ahí.
        </p>
      </div>

      <div className="delivery__grid">
        {PLATFORMS.map((p) => (
          <a
            key={p.name}
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="delivery__card"
            style={{ '--accent': p.accent }}
          >
            <span className="delivery__accent" aria-hidden="true" />
            <div className="delivery__card-body">
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
            </div>
            <span className="delivery__arrow" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </section>
  )
}
