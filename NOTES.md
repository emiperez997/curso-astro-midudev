# Notas - Curso de Astro 3 - Midudev

## Conceptos

`Arquitectura de Islas`: Carga JavaScript de forma dinámica conforme necesita la app. Siguiendo el gráfico de islas, Todo lo estático es agua y lo dinámico es tierra. Grcias a las islas pueden optimizar y mejorar la performance de la app.

> [!TIP]
> Lo importante es entender es que por defecto no carga JavaScript en el cliente

`Es agnóstico a la biblioteca de UI`: Astro no está atado a ninguna librería, se puede utilizar con React, Vue, Svelte, etc.

`Bonus`: Astro provee muchas plantillas para comenzar a trabajar.

¿Qué proyectos se pueden hacer con Astro?

- Landing pages
- Blogs
- E-commerce
- Aplicaciones web

> [!TIP]
> Se puede hacer de todo, pero lo mejor es utilizarlo para proyectos pequeños o con contenido estático.

## Instalación

> [!TIP]
> En el curso Midu usa pnpm pero se puede usar npm o yarn

```bash
pnpm create astro@latest
```

## Estructura de carpetas

- `astro.config.mjs`: Configuración de Astro

> [!NOTE]
> Astro utiliza su propia sintaxis para los componentes

- `src/pages`: Páginas de la app

Donde podemos utilizar JavaScript está separado por `---`:

```js
---
import Layout from '../layouts/Layout.astro';
import Card from '../components/Card.astro';

console.log('Hola mundo');
---
```

Los styles tienen scope, es decir, que el CSS de cada componente apunta solo a ese componente.

```html
<main>
  <h1>Hola mundo</h1>
</main>

<style>
  h1 {
    color: red;
  }
</style>
```

- `src/layouts`: Layouts de la app. Por defecto Astro utiliza el layout `src/layouts/Layout.astro`

En cada componente podemos definir las interfaces que va a recibir:

```html
---
interface Props {
  title: string;
}

const { title } = Astro.props;
---
```

También es posible definir estilos globales con la notacion `is:global`:

```html
<style is:global>
  body {
    background-color: #f5f5f5;
  }
</style>
```

> [!NOTE]
> Esto da cierta ventaja ya que no necesitamos crear un archivo CSS global o para cada componente.

- `src/components`: Componentes de la app. Por defecto tiene el archivo `Card.astro`

Boilerplate: No es necesario exportar los componentes, Astro los exporta por defecto.

```html
---
interface Props {
	title: string;
	body: string;
	href: string;
}

const { href, title, body } = Astro.props;
---
```

## Sistema de integración

Astro tiene un sistema de integración con otras librerías como React, Vue, Svelte, etc.

```bash
pnpm astro add --help
```

Añadir Tailwind:

```bash
pnpm astro add tailwind
```

## Enrutamiento de Páginas / Layout

Para agregar una página al proyecto debo agregar un archivo en `src/pages` con la extensión `.astro`.

```html
<h1>Other page</h1>
```

> [!TIP]
> Cada página debe tener un layout asociado

- `color-scheme`: Es una propiedad de CSS que permite cambiar el color del texto dependiendo del tema del sistema operativo.

- `<slot />`: Seria como el `children` de React. Los slots pueden poner nombres para poder utilizarlos en el layout.

```html
<slot name="title" />
```

```html
<Layout>
  <h1 slot="title">Other page</h1>
</Layout>
```

> [!TIP]
> Si no le pones la propiedad `slot` se renderiza en el slot por defecto

Tambien es posible agregar información por defecto en el slot:

```html
<slot name="title">Default title</slot>
```

## Markdown (.md)

Se pueden crear páginas con markdown, para eso se debe crear un archivo `.md` en `src/pages`.

```md
---
title: "Markdown page"
---

# Markdown page
```

- `Frontmatter`: Es la información que se encuentra entre `---` en un archivo `.md`

- `Content Collections`: Es una colección de archivos `.md` que se encuentran en una carpeta. Por ejemplo, si tenemos una carpeta `src/pages/posts` con archivos `.md` Astro va a crear una ruta por cada archivo.

```bash
- src
  - pages
    - posts
      - post-1.md
      - post-2.md
      - post-3.md
```

> [!TIP]
> Los archivos `.md` se pueden utilizar como páginas o como contenido al igual que si creamos archivos `.html`

## Fetching de datos

> [!TIP]
> Cuando hagamos `console.log` dentro de cualquier componente se va a mostrar en la consola del servidor nunca en el cliente
