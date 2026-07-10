import './About.css'

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="about__panel" aria-hidden="true">
        <span className="about__panel-line" />
        <span className="about__panel-word">DESDE SIEMPRE EN EL BARRIO</span>
        <span className="about__panel-line" />
      </div>

      <div className="about__grid">
        <div className="about__figure" aria-hidden="true">
          <div className="about__figure-frame">
            <span className="about__figure-glyph">LC</span>
          </div>
        </div>

        <div className="about__copy">
          <p className="eyebrow">Sobre nosotros</p>
          <h2>Un bar de toda la vida, en Fabra i Puig</h2>
          <p className="about__lead">
            En Los Chirrines cocinamos como en casa y tratamos a cada cliente como a alguien
            conocido. Somos parada fija de vecinos, de gente que entra a desayunar antes del
            trabajo y de cuadrillas que se quedan de sobremesa hasta tarde.
          </p>
          <p>
            La cocina es sencilla y honesta: raciones generosas, producto de siempre y platos
            que salen rápido sin perder el punto. La barra siempre tiene sitio para uno más, y el
            trato cercano es lo que hace que la gente vuelva.
          </p>
        </div>
      </div>
    </section>
  )
}
