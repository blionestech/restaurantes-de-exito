Diseña y desarrolla una Funnel Landing Page de alta conversión para el paquete llamado “RESTAURANTE DE ÉXITO”, con un precio final de $5,000 USD, dirigido a empresarios latinos en Estados Unidos que desean abrir su restaurante o profesionalizar uno existente.

LINEAMIENTOS TÉCNICOS (OBLIGATORIOS)

Framework: Astro

Hosting y despliegue: Cloudflare Pages

Estilos: Tailwind CSS

Arquitectura: HTML-first, Astro Islands

Interactividad mínima (solo donde sume): Alpine.js

Mobile-first

Alto performance y carga rápida

SEO básico integrado

Código limpio y componentizado

ARQUITECTURA DEL PROYECTO

Organiza el proyecto con la siguiente estructura:

/src
 ├─ pages/
 │   └─ index.astro
 ├─ layouts/
 │   └─ FunnelLayout.astro
 ├─ components/
 │   ├─ Hero.astro
 │   ├─ Problem.astro
 │   ├─ Solution.astro
 │   ├─ PackageIncludes.astro
 │   ├─ ValueVsPrice.astro
 │   ├─ AudienceFit.astro
 │   ├─ CTASection.astro
 │   ├─ FAQ.astro
 │   └─ Footer.astro
 ├─ data/
 │   └─ content.ts
 └─ styles/
     └─ global.css


Todo el contenido textual debe centralizarse en content.ts para facilitar futuras iteraciones.

OBJETIVO DE LA LANDING

Vender un paquete integral llave en mano que incluye branding, marketing, impresión, presencia digital, uniformes y formación estratégica, mostrando claramente el valor total ($7,897 USD) frente al precio final ($5,000 USD).

ESTRUCTURA DEL FUNNEL (OBLIGATORIA)
1. HERO SECTION

Headline H1 orientado a resultado

Subheadline explicativo

Imagen hero aspiracional (restaurante exitoso, sin clichés)

CTA principal visible sin scroll

2. PROBLEMA

Explicar por qué muchos restaurantes fracasan:

Falta de imagen profesional

Improvisación

Errores de marketing

Falta de estrategia

3. LA SOLUCIÓN

Presentar RESTAURANTE DE ÉXITO como un sistema completo, no como servicios separados.

4. QUÉ INCLUYE EL PAQUETE

Desglosar por bloques:

Branding Básico

Logo

Paleta de colores

Tipografías
(Valor $299)

Material Impreso

50 menús (6 u 8 vistas)

1,000 menús to-go

1,000 flyers promocionales

Banner “Coming Soon”

Tarjetas de presentación o lealtad

Presencia Digital

Página web profesional

Dominio gratis

Alojamiento

Cambios ilimitados

12 meses de mantenimiento

Redes Sociales (3 meses)

Creación de perfiles

8 publicaciones mensuales

Publicaciones pagadas

Segmentación estratégica

Extras

Código QR estándar

25 polos bordadas

6 mandiles bordados

Formación

Curso “Secretos de la Restaurantería”

Checklist de apertura

5. VALOR VS PRECIO

Mostrar claramente:

Valor total: $7,897 USD

Precio del paquete: $5,000 USD

Ahorro evidente

6. PARA QUIÉN ES / PARA QUIÉN NO ES
7. CTA FINAL

CTA claro y directo orientado a iniciar el proceso.

8. FAQ

Incluir acordeón usando Alpine.js para resolver objeciones comunes.

9. FOOTER

Footer limpio con enlaces legales y contacto.

DISEÑO Y UX

Estética profesional y confiable

CTA contrastante

Secciones bien delimitadas

Sticky CTA en mobile

SEO & PERFORMANCE

Meta title y description

H1 único

Open Graph

Optimización de imágenes

Build optimizado para Cloudflare Pages

El resultado final debe ser una landing page completamente funcional, lista para desplegar en Cloudflare Pages, optimizada para conversión y fácil de iterar en el futuro.