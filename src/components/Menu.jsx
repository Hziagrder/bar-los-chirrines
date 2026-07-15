import './Menu.css'

const DISHES = [
  {
    name: 'Pollo al Carbón con Patatas y Alioli',
    price: '14,50 €',
    desc: 'Nuestro clásico: pollo entero al carbón con patatas y alioli casero.',
    img: 'https://images.unsplash.com/photo-1606728035253-49e8a23146de?auto=format&fit=crop&w=900&q=70',
  },
  {
    name: 'Arroz con Pollo de la Casa',
    price: '6,50 €',
    desc: 'Arroz meloso con pollo, receta propia de toda la vida.',
    img: 'https://images.unsplash.com/photo-1714383611437-485d97141913?auto=format&fit=crop&w=900&q=70',
  },
  {
    name: 'Butifarra con Judías',
    price: '5,50 €',
    desc: 'Butifarra a la plancha con judías, plato de cuchara de siempre.',
    img: 'https://images.unsplash.com/photo-1541518763669-27fef04b14ea?auto=format&fit=crop&w=900&q=70',
  },
  {
    name: 'Pollo al Carbón con Patatas, Alioli y 2 Bandejas de Canelones',
    price: '23,50 €',
    desc: 'El pack familiar: pollo entero, patatas, alioli y dos bandejas de canelones.',
    img: 'https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?auto=format&fit=crop&w=900&q=70',
  },
]

export default function Menu() {
  return (
    <section id="menu" className="menu">
      <div className="menu__header">
        <p className="eyebrow">Artículos destacados</p>
        <h2>Lo que más pedimos</h2>
        <p className="menu__subtitle">
          Los platos favoritos de nuestros clientes en Uber Eats y Glovo.
        </p>
      </div>

      <div className="menu__grid">
        {DISHES.map(({ name, price, desc, img }) => (
          <article key={name} className="dish">
            <div className="dish__photo">
              <img src={img} alt={name} loading="lazy" />
            </div>
            <div className="dish__body">
              <h3>{name}</h3>
              <p className="dish__price">{price}</p>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
