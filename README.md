# Práctica 7 - App de Películas con React

## 1. Nombre del proyecto
Práctica 7 • Aplicación web de películas con React, Vite, React Router, API externa, GitHub y despliegue en Netlify.

## 2. Integrantes del equipo
- Pineda Jimenez Valeria Monserrat (Modalidad individual)

## 3. Objetivo
Desarrollar una aplicación web de una sola página (SPA) utilizando React y Vite que consuma una API externa de películas (TMDB) para visualizar un catálogo general y el detalle individual de cada película mediante rutas dinámicas, integrando control de versiones en GitHub y despliegue continuo en Netlify.

## 4. Tecnologías utilizadas
- React
- Vite
- React Router DOM
- CSS (Grid y Flexbox)
- API REST de The Movie Database (TMDB)
- Git y GitHub
- Netlify

## 5. Estructura general del proyecto
```text
Practica-7-peliculas/
├── public/
│   └── _redirects
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Footer.css
│   │   ├── MovieCard.jsx
│   │   ├── MovieCard.css
│   │   ├── MovieGrid.jsx
│   │   └── MovieGrid.css
│   ├── img/
│   │   ├── escudo-cucei.png
│   │   └── placeholder.png
│   ├── pages/
│   │   ├── LandingPage.jsx
│   │   ├── MovieDetails.jsx
│   │   └── MovieDetails.css
│   ├── routers/
│   │   └── AppRouter.jsx
│   ├── services/
│   │   └── httpClient.js
│   ├── utils/
│   │   └── getMovieImg.js
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .env
├── .gitignore
├── package.json
└── README.md