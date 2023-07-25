export {
  styled as stitch,
  theme
} from './stitched'

export * from './global'
export { default as baseConfig } from './config'

export * as utils from './utils'

// -> Component exports
// --------------------

export { default as BaseForm } from './Form'
export { default as useForm } from './Form/hook'
export { InputType } from './Form/hook'
export type { FieldSchema, FieldTypeMap } from './Form/hook'

export { default as BaseButton } from './Button'
export { default as BaseGridBox } from './GridBox'
export { default as BaseHeading } from './Heading'
export { default as BaseIcon } from './Icon'
export { default as BaseInput } from './Input'
export { default as BaseText } from './Text'
export { default as BaseWrapper } from './Wrapper'
