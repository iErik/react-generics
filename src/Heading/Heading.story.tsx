import Heading from '.'

export default {
  title: 'Base Generics/Heading',
  component: Heading
}

const Template = (args: any) =>
  <Heading {...args}>
    Some heading in your butt
  </Heading>

export const Default = Template.bind({})
