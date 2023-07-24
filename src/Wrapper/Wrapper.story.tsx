import Wrapper from '.'

export default {
  title: 'Base Generics/Wrapper',
  component: Wrapper
}

const Template = (args: any) =>
  <Wrapper {...args}>
    Some wrapper in your butt
  </Wrapper>

export const Default = Template.bind({})
