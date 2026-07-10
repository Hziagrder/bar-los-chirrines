import './Location.css'

const ADDRESS = 'Pg. de Fabra i Puig, 301, 08031 Barcelona'
const PHONE_DISPLAY = '+34 602 06 42 26'
const PHONE_TEL = '+34602064226'
const MAPS_QUERY = encodeURIComponent(ADDRESS)
const MAPS_EMBED_SRC = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${MAPS_QUERY}`

export default function Location() {
  return (
    <section id="ubicacion" className="ubicacion">
      <div className="ubicacion__inner">
        <div className="ubicacion__copy">
          <p className="eyebrow">Cómo llegar</p>
          <h2>Estamos en Fabra i Puig</h2>
          <p className="ubicacion__address">{ADDRESS}</p>
          <p className="ubicacion__text">
            A pie de calle, fácil de encontrar y con buena comunicación de metro y bus por
            la zona. Si vienes en coche, hay aparcamiento en las calles próximas.
          </p>

          <dl className="ubicacion__hours">
            <div>
              <dt>Todos los días</dt>
              <dd>6:00 – 23:00</dd>
            </div>
          </dl>

          <div className="ubicacion__actions">
            <a
              className="btn btn--ghost"
              href={MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
            >
              Abrir en Google Maps
            </a>
            <a className="ubicacion__phone" href={`tel:${PHONE_TEL}`}>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>

        <div className="ubicacion__map">
          <iframe
            title="Ubicación de Bar Los Chirrines en Google Maps"
            src={MAPS_EMBED_SRC}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
