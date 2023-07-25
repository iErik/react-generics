import { globalCss } from './stitched'

// -> Global
// ----------

export const baseGlobalCss = {
  '*, *::before, *::after': {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    '-webkit-font-smoohting': 'antialiased',
  },

  'html, body, #root, #root > .app': {
    maxWidth: '100vw',
    maxHeight: '100vh',

    width: '100vw',
    height: '100vh',
    overflow: 'hidden'
  },

  table: {
    borderCollapse: 'collapse',
    backgroundColor: 'transparent',
    borderSpacing: 0,
    width: '100%',
    maxWidth: '100%',
  },

  a: { textDecoration: 'none' },

  'input, button, select, textarea': {
    background: 'none',
    color: 'inherit',
    font: 'inherit',
    margin: 0,
    padding: 0,
    outline: 'none',
    resize: 'none',
    border: 'none',
    cursor: 'pointer',
    '-webkit-appearance': 'none',
  },
}

export const globalStyles = globalCss(baseGlobalCss)
