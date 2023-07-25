import { useState, useEffect } from 'react'

import { stitch } from '..'
import TextInput from '../Input'
import Button from '../Button'

// Types
// -----

type InputType = 'text' | 'radio' | 'select' | 'number'

interface FieldSchema extends JSX.IntrinsicAttributes {
  type: InputType
  name: string
  value?: any
}

type FormProps = {
  schema: FieldSchema[],
  submitText: string,
  disabled?: boolean,
  onSubmit: Function
}

// Fragments
// ---------

const FormInput = stitch(TextInput, {
  '&:not(:last-child)': {
    marginBottom: '10px'
  }
})

const FormSelect = stitch('select', {

})

const FormRadio = stitch('input', {

})

const FormBox = stitch('form', {
  display: 'flex',
  flexDirection: 'column',
})


// Helpers
// -------

const mapSchema = (
  schema: FieldSchema
): React.ReactElement => {
  const typeMap = {
    'text': FormInput,
    'number': FormInput,
    'select': FormSelect,
    'radio': FormRadio,
  }

  const Widget: React.FunctionComponent =
    Object.keys(typeMap).includes(schema.type)
    ? typeMap[schema.type]
    : FormInput

  return <Widget {...schema} />
}

const genInitialState = (schema: Array<FieldSchema>) =>
   schema.reduce((acc, field: FieldSchema) => ({
      ...acc,
      [field?.name]: field?.value || ''
    }), {})

const genFormFields = (
  schema: Array<FieldSchema>,
  handleChangeFn: Function
) =>
  schema
    .map((field: FieldSchema) => ({
      ...field,
      key: field?.name,
      onInput: handleChangeFn.bind(null, field?.name)
    }))
    .map(mapSchema)

// Form
// ----

const Form = ({
  schema,
  submitText,
  onSubmit,
  disabled,
  ...props
}: FormProps): React.ReactElement => {
  const initialState = genInitialState(schema)
  const [ formData, setFormData ] = useState(initialState)

  useEffect(() => setFormData(genInitialState(schema)),
    [ schema ])

  const handleChange = (fieldName: string, val: any) =>
    setFormData({
      ...formData,
      [fieldName]: val
    })

  const formFields = genFormFields(schema, handleChange)

  const handleSubmit = (ev: React.SyntheticEvent) => {
    ev.preventDefault()
    ev.stopPropagation()

    onSubmit(formData)
  }

  return (
    <FormBox onSubmit={handleSubmit} {...props}>
      { formFields }

      <Button type="submit" css={{ marginTop: '10px' }}>
        { submitText }
      </Button>
    </FormBox>
  )
}

export default Form
