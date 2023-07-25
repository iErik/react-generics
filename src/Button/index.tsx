import type * as Stitches from '@stitches/react'
import { stitch } from '..'

// -> Types
// --------

interface ButtonProps extends React.PropsWithChildren {
  text?: string,
  children?: React.ReactNode,
  css?: Stitches.CSS
  type?: 'button' | 'submit' | 'reset'
}


const Button = stitch('button', {
  borderRadius: '$button',
  padding: '$btnPad',

  $$shadowColor: '$colors$buttonBg',
  backgroundColor: '$buttonBg',
  boxShadow: '0 4px 13px -4px $$shadowColor',

  transition: 'box-shadow 300ms',
  willChange: 'box-shadow',

  fontSize: '$btnPad',
  fontFamily: '$sans',
  fontWeight: '$base',
  color: '$buttonFg',

  userSelect: 'none',
  outline: 'none',

  '&:hover': {
    cursor: 'pointer',
    boxShadow: '0 4px 13px 2px $$shadowColor',
  }
})

export default Button
export type { ButtonProps }
