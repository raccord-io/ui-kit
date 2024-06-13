![Raccord Banner](https://i.imgur.com/ipZFSMQ.png)

# Raccord React TS ui-kit

Tech:

- React typescript
- tailwind

## Presentation

The shareable preset our in the `presets` directory.

## How to use it?

- `npm install @raccord/react-ui-kit -D`
- update your tailwind configuration file `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@raccord/ui-kit/src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@raccord/ui-kit/presets/raccord-preset.js")],
};
```

- import the global css in you main tsx file (`main.tsx` or `App.tsx`):

```ts
import "@raccord/ui-kit/src/global.css";
```

- use the components:

```ts
import { Button } from "@raccord/ui-kit";
```

## Contribute

You can add global CSS in `src/global.css`.

### How to clean code

- use tailwind alias to avoid long `className` string
- create react function component: `export function Button(props: ButtonProps) {}`
  - or `export const Button = (props: ButtonProps) => {}`
- create one folder per component with
  - component
  - unit tests
  - storybook stories

### Theme

To apply a theme, use the class `theme-light` or `theme-dark`. All nested elements will apply the theme.

See <https://github.com/L-Blondy/tw-colors#nested-themes> for details.

Raccord's design system color palette in implemented in `presets/raccord-preset.js` thanks to `tw-colors` plugin.

You can now use our custom colors thanks to `className`:

- `<p className="bg-primary"></p>`
- `<p className="text-neutral"></p>`

### Typography

All typographies are defined in the tailwind preset.

To use them, simple add the name of the typography in the `className` prefixed by `rac-`:

`<h1 className="rac-banner">My title</h1>`
