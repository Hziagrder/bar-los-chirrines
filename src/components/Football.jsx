import './Football.css'

export default function Football() {
  return (
    <section id="futbol" className="futbol">
      <div className="futbol__inner">
        <div className="futbol__copy">
          <p className="eyebrow eyebrow--invert">Fútbol</p>
          <h2>Aquí se ve todo el fútbol</h2>
          <p className="futbol__lead">
            En Los Chirrines ponemos todos los partidos. Pantalla grande, buen ambiente y
            gente con ganas de animar — el sitio ideal para ver el fútbol acompañado, con
            algo bueno para picar y beber a mano.
          </p>
          <ul className="futbol__points">
            <li>Todos los partidos, de cualquier competición</li>
            <li>Ambientazo de barrio, con la clientela de siempre</li>
            <li>Barra abierta durante todo el partido</li>
          </ul>
        </div>

        <div className="futbol__video">
          <div className="futbol__video-frame">
            <span className="futbol__play" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <p>Vídeo próximamente</p>
          </div>
        </div>
      </div>
    </section>
  )
}
