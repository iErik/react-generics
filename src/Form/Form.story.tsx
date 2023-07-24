import Form from '.'

export default {
  title: 'Base Generics/Form',
  component: Form
}

const Template = (args: any) => <Form {...args} />

export const Default = Template.bind({})
