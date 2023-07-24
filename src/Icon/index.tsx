import { styled } from '../stitches.config'

type IconProps = {
  icnName: string,
  size?: number | string
}

const IconWrapper = styled('div', {
  display: 'flex'
})

const Icon = (props: IconProps) => {
  if (!props.icnName)
    return <IconWrapper />

  return (
    <IconWrapper className="icon-wrapper">
    </IconWrapper>
  )
}

Icon.toString = () => '.icon-wrapper'

export default Icon
