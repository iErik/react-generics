import Text from '.'

export default {
  title: 'Base Generics/Text',
  component: Text
}

const Template = (args: any) =>
  <Text {...args}>
    Some text in your butt
  </Text>

export const Default = Template.bind({})
