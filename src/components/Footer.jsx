import './Footer.css'

const PHONE_DISPLAY = '+34 602 06 42 26'
const PHONE_TEL = '+34602064226'

const SOCIAL_LINKS = [
  { name: 'TikTok', href: 'https://www.tiktok.com/@loschirrines301', icon: 'tiktok' },
  { name: 'Instagram', href: 'https://www.instagram.com/loschirrines301', icon: 'instagram' },
]

const DELIVERY_LINKS = [
  {
    name: 'Uber Eats',
    href: 'https://www.ubereats.com/es/store/rostisseria-los-chirrines/4DZ7SvKxR9i1AvFiZyzFUQ',
  },
  {
    name: 'Glovo',
    href: 'https://glovoapp.com/es/es/barcelona/stores/bar-rostisseria-los-chirrines-barcelona',
  },
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
        <div className="footer__social">
          {SOCIAL_LINKS.map((s) => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name} className="footer__social-link">
              <SocialIcon type={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

function SocialIcon({ type }) {
  if (type === 'tiktok') {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.6 5.82c-.88-.96-1.38-2.21-1.38-3.5h-3.1v13.1c0 1.5-1.22 2.72-2.72 2.72a2.72 2.72 0 0 1 0-5.44c.27 0 .53.04.78.11V9.7a5.9 5.9 0 0 0-.78-.05A5.82 5.82 0 0 0 3.4 15.47a5.82 5.82 0 0 0 5.82 5.82 5.82 5.82 0 0 0 5.82-5.82V9.01a8.3 8.3 0 0 0 4.86 1.56V7.47a4.86 4.86 0 0 1-3.3-1.65z" />
      </svg>
    )
  }
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}
