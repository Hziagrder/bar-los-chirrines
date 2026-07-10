import './Menu.css'

const DISHES = [
  {
    name: 'Bocadillos',
    desc: 'Pan del día relleno hasta arriba. Los de toda la vida y alguna combinación de la casa.',
    img: 'https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&w=900&q=70',
  },
  {
    name: 'Desayunos',
    desc: 'Tostadas, café recién hecho y opción salada para empezar el día con fuerzas.',
    img: 'https://images.unsplash.com/photo-1666634901832-d71dd7948453?auto=format&fit=crop&w=900&q=70',
  },
  {
    name: 'Tapas',
    desc: 'Raciones para compartir en la barra o en la mesa, ideales para alargar la sobremesa.',
    img: 'https://images.unsplash.com/photo-1656423521731-9665583f100c?auto=format&fit=crop&w=900&q=70',
  },
]

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="menu__header">
        <p className="eyebrow">Platos destacados</p>
        <h2>Lo que más pedimos</h2>
        <p className="menu__subtitle">
          Una muestra de la carta. Pregunta en barra por el plato del día.
        </p>
      </div>

      <div className="menu__grid">
        {DISHES.map(({ name, desc, img }) => (
          <article key={name} className="dish">
            <div className="dish__photo">
              <img src={img} alt={name} loading="lazy" />
            </div>
            <div className="dish__body">
              <h3>{name}</h3>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
