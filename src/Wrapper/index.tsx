import { styled } from '../stitches.config'

// TODO: Add fit-content options
const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',
  height: '100%',

  variants: {
    hAlign: {
      right: {
        alignItems: 'flex-start'
      },
      center: {
        alignItems: 'center'
      },
      left: {
        alignItems: 'flex-end'
      },
      stretch: {
        alignItems: 'stretch'
      }
    },

    vAlign: {
      top: {
        justifyContent: 'flex-start'
      },
      center: {
        justifyContent: 'center'
      },
      bottom: {
        justifyContent: 'flex-end'
      }
    },

    column: {
      true: { flexDirection: 'column' }
    }
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

export default Wrapper
