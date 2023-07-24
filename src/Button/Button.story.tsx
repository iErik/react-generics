import Button from './index'

export default {
  title: 'Base Generics/Button',
  component: Button
}

const Template = (args: any) =>
  <Button {...args}>
    Some text in your butt
  </Button>

export const Default = Template.bind({})
