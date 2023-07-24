
type DirectionalArg = {
  top?: string | number,
  left?: string | number,
  bottom?: string | number,
  right?: string | number
}

export default {
  theme: {
    fontSizes: {
      xs:    '13px',
      sm:    '14px',
      base:  '16px',
      lg:    '24px',
      xl:    '30px',
      '2xl': '38px',
      '3xl': '45px'
    }
  },

  utils: {
    ellipsis: (maxWidth: string | number = '100%') => ({
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      maxWidth,
    }),

    bgImg: (url: string) => ({
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }),

    size: (value: string | number) => ({
      width: value,
      height: value,
    }),

    gapBottom: (value: string | number) => ({
      '&:not(:last-child)': { marginBottom: value }
    }),

    gapTop: (value: string | number) => ({
      '&:not(:last-child)': { marginTop: value }
    }),

    gapLeft: (value: string | number) => ({
      '&:not(:last-child)': { marginLeft: value }
    }),

    gapRight: (value: string | number) => ({
      '&:not(:last-child)': { marginRight: value }
    }),

    linearGradient: (value: string) => ({
      backgroundImage:`linear-gradient(${value})`
    }),

    btRadius: (value: string | number) => ({
      borderTopLeftRadius: value,
      borderTopRightRadius: value,
    }),

    bbRadius: (value: string | number) => ({
      borderBottomLeftRadius: value,
      borderBottomRightRadius: value,
    }),

    blRadius: (value: string | number) => ({
      borderTopLeftRadius: value,
      borderBottomLeftRadius: value,
    }),

    brRadius: (value: string | number) => ({
      borderTopRightRadius: value,
      borderBottomRightRadius: value,
    })
  },

  media: { }
}
