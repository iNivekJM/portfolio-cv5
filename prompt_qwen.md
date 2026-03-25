# Prompt para Generar Portafolio Web Profesional

Actúa como un **desarrollador frontend senior experto en Astro,
TailwindCSS, SEO y performance web**.

Debes crear un **sitio web de portafolio profesional para un
desarrollador**, enfocado en causar una excelente impresión a
reclutadores y empresas tecnológicas.

------------------------------------------------------------------------

## Tecnologías obligatorias

-   Framework: **Astro**
-   Estilos: **TailwindCSS**
-   Debe seguir **buenas prácticas de desarrollo y arquitectura limpia**
-   Código modular y fácil de mantener

------------------------------------------------------------------------

## Fuente de datos

Toda la información del sitio **debe leerse desde archivos JSON**
ubicados en una carpeta llamada:

    /data

Cada archivo JSON ya existe y contiene la información en **dos idiomas:
español e inglés**.

Los datos incluyen información para las siguientes secciones:

-   Perfil
-   Estudios / Educación
-   Experiencia laboral
-   Habilidades
-   Proyectos

No debes generar ejemplos de estructura JSON ni datos ficticios, **solo
consumir los archivos existentes**.

------------------------------------------------------------------------

## Internacionalización (i18n)

El sitio debe tener **soporte para dos idiomas**:

-   Español
-   Inglés

Debe existir un **selector de idioma** que cambie dinámicamente todo el
contenido según el idioma seleccionado.

------------------------------------------------------------------------

## Modo oscuro

Debe incluir:

-   **Modo claro y modo oscuro**
-   Toggle para cambiar entre ambos
-   Detectar preferencia del sistema (`prefers-color-scheme`)
-   Guardar preferencia en `localStorage`

------------------------------------------------------------------------

## Diseño

El diseño debe ser:

-   Muy **profesional**
-   **Minimalista moderno**
-   Pensado para **impresionar reclutadores**
-   Con excelente **jerarquía visual**

Debe incluir:

-   Hero section con presentación profesional
-   Sección sobre mí
-   Experiencia laboral
-   Educación
-   Habilidades técnicas
-   Proyectos destacados
-   Contacto

------------------------------------------------------------------------

## UI / UX

-   Animaciones sutiles y elegantes
-   Uso adecuado de espacios
-   Buen contraste de colores
-   Tipografía moderna
-   Diseño limpio y profesional

------------------------------------------------------------------------

## Responsive

El sitio debe ser completamente **responsive**:

-   Mobile first
-   Tablet
-   Desktop

------------------------------------------------------------------------

## Performance

Optimiza el sitio para **velocidad de carga**:

-   Uso correcto de Astro (Islands Architecture)
-   Lazy loading cuando sea necesario
-   Minimizar JavaScript innecesario
-   Imágenes optimizadas

------------------------------------------------------------------------

## SEO

Implementar buenas prácticas SEO:

-   Meta tags
-   Open Graph
-   Structured data
-   Buen uso de headings (H1, H2, H3)
-   Sitemap
-   Robots.txt
-   URLs limpias

------------------------------------------------------------------------

## Estructura recomendada del proyecto

    src/
      components/
      layouts/
      pages/
      styles/
      utils/
    data/
    public/

------------------------------------------------------------------------

## Despliegue

El proyecto debe estar **listo para desplegar en Netlify** sin
configuraciones complejas.

------------------------------------------------------------------------

## Extras recomendados

Si es posible agregar:

-   Animaciones suaves con CSS o librerías ligeras
-   Transiciones elegantes
-   Sección de proyectos con tarjetas visuales
-   Iconos profesionales

------------------------------------------------------------------------

## Objetivo final

El resultado debe ser un **portafolio moderno, rápido, profesional y
atractivo para reclutadores**, demostrando buenas prácticas de
desarrollo frontend y una excelente presentación del perfil profesional.
