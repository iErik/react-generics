import { useState } from 'react'
import type { ReactElement, FunctionComponent } from 'react'

// -> Types
// --------

export enum InputType {
  Text   = 'text',
  Radio  = 'radio',
  Select = 'select',
  Number = 'number'
}

export interface FieldSchema extends JSX.IntrinsicAttributes {
  type: InputType
  name: string
  value?: any
}


export type FieldTypeMap = {
  [key in InputType]: FunctionComponent
}

// -> Helpers
// ----------

/**
 *
 */
const mapSchema = (
  typeMap: FieldTypeMap,
  schema: FieldSchema,
): ReactElement => {

  const Widget: FunctionComponent =
    Object.keys(typeMap).includes(schema.type)
      ? typeMap[schema.type]
      : typeMap[InputType.Text]

  return <Widget {...schema} />
}


/**
 * Insert a key for each field, and binds the input
 * listeners, and directs the output to the mapSchema
 * function after that
 */
const genFormFields = (
  schema: FieldSchema[],
  handleChangeFn: Function,
  typeMap: FieldTypeMap
) => schema
  .map((field: FieldSchema) => ({
    ...field,
    key: field?.name,
    onInput: handleChangeFn.bind(null, field?.name)
  }))
  .map(mapSchema.bind(null, typeMap))

/**
 * Receives an array of field schemas and from that
 * outputs an object containing a corresponding
 * property for each field in the schema with an
 * initial value deduced from the field's type
 *
 * TODO: Properly map each type of field's appropriate
 * initial value
 */
const mkInitialState = (schema: FieldSchema[]) =>
  schema.reduce((acc, field: FieldSchema) => ({
    ...acc,
    [field?.name]: field?.value || ''
  }), {})

// -> The Hook
// -----------

/**
 *
 */
const useForm = (
  schema: FieldSchema[],
  typeMap: FieldTypeMap
) => {
  const [ formData, setFormData ] = useState(
    mkInitialState(schema))

  const handleChange = (fieldName: string, val: any) =>
    setFormData({
      ...formData,
      [fieldName]: val
    })

  const formFields =
    genFormFields(schema, handleChange, typeMap)

  return {
    formFields,
    formData
  }
}

export default useForm
