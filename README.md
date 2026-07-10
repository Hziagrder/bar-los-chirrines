# Bar Los Chirrines — Web

Página de una sola vista (landing) para Bar Los Chirrines, en Pg. de Fabra i Puig, 301, Barcelona.
React + Vite, sin backend, sin login, sin dependencias externas más allá de React.

## Estructura

```
bar-los-chirrines/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── App.css          (botones y estilos compartidos)
    ├── index.css         (variables de color, tipografía, reset)
    └── components/
        ├── Nav.jsx / Nav.css
        ├── Hero.jsx / Hero.css              → sección 1: HERO
        ├── About.jsx / About.css            → sección 2: SOBRE NOSOTROS
        ├── Menu.jsx / Menu.css              → sección 3: PLATOS DESTACADOS
        ├── Reservations.jsx / Reservations.css → sección 4: RESERVAS
        ├── Location.jsx / Location.css      → sección 5: UBICACIÓN
        └── Footer.jsx / Footer.css
```

## Poner en marcha en local

```bash
npm install
npm run dev
```

Abre `http://localhost:5173`.

## Compilar para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para servir estáticamente.

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub (o usa `vercel` CLI directamente desde aquí).
2. En Vercel: **New Project** → importa el repo.
3. Framework detectado automáticamente: **Vite**. No hace falta tocar nada:
   - Build Command: `npm run build`
   - Output Directory: `dist`
4. Deploy.

O por CLI, desde esta carpeta:

```bash
npm i -g vercel
vercel
```

## Cosas que probablemente quieras cambiar

- **Número de WhatsApp**: ahora usa el teléfono real que aparece en Google (`+34 602 06 42 26`,
  `https://wa.me/34602064226`), en `Hero.jsx`, `Nav.jsx`, `Reservations.jsx` y `Footer.jsx`.
  Si el negocio usa otro número para WhatsApp, cámbialo ahí.
- **Enlace de Just Eat**: no encontré la ficha exacta del restaurante en Just Eat, así que el
  botón apunta a `https://www.just-eat.es/` de forma genérica. Búscalo en la app/web y
  sustitúyelo en `Delivery.jsx` y `Footer.jsx` en cuanto tengas el enlace directo.
- **Horario**: en `Location.jsx`. Ahora mismo usa el horario público de Google (todos los días,
  6:00–23:00); confírmalo con el horario real del local.
- **Fotos de los platos**: son fotografía de stock (Unsplash, uso comercial libre) elegida para
  que encaje con cada categoría, no fotos reales del bar. Si tienes fotos propias de los platos,
  sustitúyelas en `Menu.jsx` y `Hero.jsx` — dará más autenticidad que las de stock.
- **Valoración de Google**: no se muestra la puntuación ni las reseñas en la web a propósito
  (la puntuación pública actual es baja). Si mejora con el tiempo, se podría añadir un enlace
  a "Ver opiniones en Google" o similar.
- **Textos de "Sobre nosotros" y platos**: en `About.jsx` y `Menu.jsx`.
- **Mapa**: usa el embed público de Google Maps (sin API key) basado en la dirección.

## Notas técnicas

- Sin librerías de terceros aparte de `react` y `react-dom`.
- Sin fuentes de pago: Fraunces y Work Sans se cargan desde Google Fonts en `index.html`.
- Totalmente responsive, probado desde 360px de ancho.
- Respeta `prefers-reduced-motion`.
