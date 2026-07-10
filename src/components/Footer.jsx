import './Footer.css'

const PHONE_DISPLAY = '+34 602 06 42 26'
const PHONE_TEL = '+34602064226'

const DELIVERY_LINKS = [
  {
    name: 'Uber Eats',
    href: 'https://www.ubereats.com/es/store/rostisseria-los-chirrines/4DZ7SvKxR9i1AvFiZyzFUQ',
  },
  {
    name: 'Glovo',
    href: 'https://glovoapp.com/es/es/barcelona/stores/bar-rostisseria-los-chirrines-barcelona',
  },
  { name: 'Just Eat', href: 'https://www.just-eat.es/' },
]

const NAV_LINKS = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#menu', label: 'Carta' },
  { href: '#pedir', label: 'Pedir a domicilio' },
  { href: '#reservas', label: 'Reservas' },
  { href: '#ubicacion', label: 'Ubicación' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__cta">
        <div>
          <h2>¿Hambre ya?</h2>
          <p>Pide tu comida y recíbela caliente en casa, o resérvanos mesa.</p>
        </div>
        <a className="btn btn--primary btn--large" href={`tel:${PHONE_TEL}`}>
          {PHONE_DISPLAY}
        </a>
      </div>

      <div className="footer__grid">
        <div className="footer__about">
          <p className="footer__brand">Los Chirrines</p>
          <p className="footer__desc">
            Comida casera en Fabra i Puig, Barcelona. Hecho con cariño desde primera hora.
          </p>
        </div>

        <div className="footer__col">
          <h3>Navegación</h3>
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer__col">
          <h3>Contacto</h3>
          <a href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a>
          <span className="footer__address">Pg. de Fabra i Puig, 301, Barcelona</span>
        </div>

        <div className="footer__col">
          <h3>Pedidos online</h3>
          {DELIVERY_LINKS.map((d) => (
            <a key={d.name} href={d.href} target="_blank" rel="noopener noreferrer">
              {d.name} →
            </a>
          ))}
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Bar Los Chirrines. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
