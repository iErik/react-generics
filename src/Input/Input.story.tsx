import Input from '.'

export default {
  title: 'Base Generics/Input',
  component: Input
}

const Template = (args: any) => <Input {...args} />

export const Default = Template.bind({})
