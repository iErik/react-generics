import type { PropsWithChildren } from 'react'
import { stitch } from '..'

import { toPixel } from '../utils'

// -> Types
// --------

export type FlexboxProps = PropsWithChildren & {
  hAlign?:  'left' | 'center' | 'right' | 'stretch'
  vAlign?:  'top' | 'center' | 'bottom'
  fill?: boolean
  column?:  boolean
  hExpand?: boolean
  vExpand?: boolean
  padding?: string | number
  gap?: string | number
  margin?: string | number
}

// -> Component
// ------------

const FlexboxEl = stitch('div', {
  display: 'flex',

  variants: {
    hAlign: {
      right: {
        justifyItems: 'flex-start'
      },
      center: {
        justifyContent: 'center'
      },
      left: {
        justifyItems: 'flex-end'
      },
      stretch: {
        justifyItems: 'stretch'
      },
      spaceBetween: {
        justifyItems: 'space-between'
      },
      spaceAround: {
        justifyItems: 'space-around'
      }
    },

    vAlign: {
      top: {
        alignItems: 'flex-start'
      },
      center: {
        alignItems: 'center'
      },
      bottom: {
        alignItems: 'flex-end'
      }
    },

    column: { true: { flexDirection: 'column' } },
    hExpand: { true: { width: '100%' } },
    vExpand: { true: { height: '100%' } },
    fill: { true: { width: '100%', height: '100%' } }
  },

  compoundVariants: [
    {
      column: true,
      hAlign: 'left',
      vAlign: 'top',
      css: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
      }
    },
    {
      column: true,
      hAlign: 'left',
      vAlign: 'center',
      css: {
        justifyContent: 'center',
        alignItems: 'flex-start'
      }
    },
    {
      column: true,
      hAlign: 'left',
      vAlign: 'bottom',
      css: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
      }
    },
    {
      column: true,
      hAlign: 'center',
      vAlign: 'top',
      css: {
        justifyContent: 'flex-start',
        alignItems: 'center'
      }
    },
    {
      column: true,
      hAlign: 'center',
      vAlign: 'center',
      css: {
        justifyContent: 'center',
        alignItems: 'center'
      }
    },
    {
      column: true,
      hAlign: 'center',
      vAlign: 'left',
      css: {
        justifyContent: 'flex-end',
        alignItems: 'center'
      }
    },
    {
      column: true,
      hAlign: 'right',
      vAlign: 'top',
      css: {
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
      }
    },
    {
      column: true,
      hAlign: 'right',
      vAlign: 'center',
      css: {
        justifyContent: 'center',
        alignItems: 'flex-end'
      }
    },
    {
      column: true,
      hAlign: 'right',
      vAlign: 'bottom',
      css: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
      }
    }
   ]
})

const Flexbox = (props: FlexboxProps) => {
  const css = {
    ...(props.padding ? {
      padding: toPixel(props.padding || 0),
    } : {}),

    ...(props.gap ? {
      gap : toPixel(props.gap|| 0),
    } : {}),

    ...(props.margin ? {
      gap : toPixel(props.margin || 0),
    } : {}),
  }

  return (
    <FlexboxEl
      className="rg-flexbox"
      children={props.children}
      css={css}
      {...props}
    />
  )
}

Flexbox.toString = () => 'div.cg-flexbox'
export default Flexbox
