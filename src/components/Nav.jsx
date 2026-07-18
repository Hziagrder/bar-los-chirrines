import { useEffect, useState } from 'react'
import './Nav.css'

const PHONE_TEL = '+34602064226'
const PHONE_DISPLAY = '602 06 42 26'

const LINKS = [
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#menu', label: 'Carta' },
  { href: '#pedir', label: 'Pedir a domicilio' },
  { href: '#futbol', label: 'Fútbol' },
  { href: '#reservas', label: 'Reservas' },
  { href: '#ubicacion', label: 'Cómo llegar' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : 'nav--transparent'}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand">
          Los Chirrines
        </a>

        <nav className="nav__links" aria-label="Secciones de la página">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="nav__cta" href={`tel:${PHONE_TEL}`}>
          {PHONE_DISPLAY}
        </a>

        <button
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav__mobile-cta" href={`tel:${PHONE_TEL}`} onClick={() => setOpen(false)}>
            {PHONE_DISPLAY}
          </a>
        </div>
      )}
    </header>
  )
}
