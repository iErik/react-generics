import { styled } from '../stitches.config'

// Types
// -----

interface InputProps extends JSX.IntrinsicAttributes {
  onInput: Function
}

// Export
// ------

const TextInputEl = styled('input', {
  backgroundColor: '$inputBg',
  color: '$inputFg',

  height: '45px',
  width: '100%',

  borderRadius: '25px',
  textAlign: 'center',
  verticalAlign: 'middle',

  fontFamily: '$sans',
  fontWeight: '$title',
  cursor: 'text',

  variants: {
    disabled: {
      true: {
        userSelect: 'none',
        pointerEvents: 'none',
        cursor: 'default',
        opacity: 0.5
      }
    }
  },

  '&::placeholder': {
    fontFamily: '$sans',
    fontWeight: '300',
    color: '#FFF',
    opacity: 0.65
  },

  '&::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  },

  '&::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  }
})

const TextInput = ({
  onInput,
  ...props
}: InputProps): React.ReactElement => {

  const handleInput = (ev: React.FormEvent) => {
    ev.preventDefault()
    ev.stopPropagation()

    const target = ev.target as HTMLInputElement
    const val = target?.value || ''

    onInput(val, ev)
  }

  return (
    <TextInputEl
      onInput={handleInput}
      {...props}
    />
  )
}

export default TextInput
