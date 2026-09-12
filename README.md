# PadelMatch

Plataforma para organizar partidos de pádel, competir en torneos y conectar con jugadores — ranking ELO, estadísticas y comunidad.

## Estado real (importante)

Este es el menos avanzado de la tanda: es una landing + shell de autenticación con las pantallas del producto armadas como **prototipo visual sobre datos mock**, no como features terminadas.

- **Auth** — real, contra Supabase (`profiles` + `user_roles`).
- **Matches** — UI completa pero con datos hardcodeados en el componente (`// Mock data - will be replaced with real data from Supabase`). No hay tabla `matches` en las migraciones.
- **Tournaments** — pantalla "Próximamente", sin lógica.
- **Community** — pantalla "Próximamente", sin lógica.

Lo que falta para que sea real: modelar `matches` (jugadores, cupos, nivel, ubicación), `tournaments` (brackets) y el sistema de ranking ELO que promete la descripción, y conectar las tres pantallas a esas tablas en vez de al array hardcodeado.

## Stack

React 18 + TypeScript + Vite, shadcn/ui sobre Radix, Tailwind, React Router, React Query, Supabase (Postgres + Auth) como backend.

## Desarrollo local

```sh
npm install
cp .env.example .env   # completar con las credenciales de un proyecto Supabase (la instancia original no está conectada)
npm run dev
```
