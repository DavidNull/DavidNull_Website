# DS Curriculum

An interactive CV template styled as a Nintendo DS Lite. Boot screen, dual screens, animated
game-card menu, per-section panels, fullscreen top screen and a working power button.

All content is lorem ipsum placeholder text — edit `src/data.js` to make it yours.

## Run

The app uses ES modules, so it needs to be served over HTTP (opening `index.html` from the
filesystem will not work).

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

Vue and Tailwind load from a CDN, so an internet connection is required on first load.

## Structure

```
index.html              CDN imports, stylesheets, mount point
src/main.js             app root, stage switching, keyboard shortcuts
src/store.js            reactive state and actions
src/data.js             CV content and section definitions
src/sprites.js          16x16 pixel-art icon grids
src/components/         BootScreen, Console, TopScreen, BottomScreen, FitBox, Sprite
src/styles/console.css  console chassis, screens, menu, animations
src/vendor/ds/          ds.css + fonts, pixel assets and the clock/calendar widgets
assets/cv.pdf           downloadable CV (placeholder - replace with yours)
assets/logos/           project logos (referenced from src/data.js)
```

## Controls

| Action              | How                                     |
| ------------------- | --------------------------------------- |
| Start               | Click the boot screen, or Enter / Space |
| Open a section      | Click a card in the bottom screen       |
| Back to status      | Click the card again, or the B button   |
| Fullscreen          | Button in the top-right of the screen   |
| Exit fullscreen     | Same button, or Escape                  |
| Power off / restart | POWER button on the console             |

## Customising

Everything editable lives in `src/data.js`.

**Projects** — each item has a `logo` slot rendered on the right of the card. Leave it as `''` to
show the dashed `LOGO` placeholder, or point it at an image:

```js
{ title: 'My Project', meta: '...', text: '...', tags: ['Vue'], logo: './assets/logos/mine.png' }
```

**Certifications** — give an item an `href` and the whole card becomes a link to that certificate
(opens in a new tab, marked with a small corner arrow). The `more` block renders the final
"Muchas Mas" card; point it at your Credly profile:

```js
more: { title: 'Muchas Mas', text: '...', href: 'https://www.credly.com/users/<you>' }
```

Any section supports `href` on its items, not just certifications.

**Contact** — `fields` holds your name and email, `links` the social buttons (GitHub, LinkedIn,
Twitter by default; add or remove freely), and `cv` the download tile:

```js
cv: { label: 'CV', note: 'Descarga', href: './assets/cv.pdf', file: 'my-cv.pdf' }
```

`assets/cv.pdf` is a placeholder — **replace it with your real CV**. `file` is the filename the
browser saves it as.

**Other** — `src/sprites.js` holds the icons, each a 16x16 grid of characters mapped to a palette.
The shell colour picker on the boot screen (shown at viewport widths of 900px and up) sets the
casing colour; the default lives in `src/store.js`.

Built on [ds.css](https://github.com/spiritov/ds.css) by spiritov (ISC), vendored in
`src/vendor/ds/`.
