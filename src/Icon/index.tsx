import { stitch } from '..'

type IconProps = {
  icnName: string,
  size?: number | string
}

const IconWrapper = stitch('div', {
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
