import { styled } from '../stitches.config'

const Button = styled('button', {
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
