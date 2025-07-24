import { createStitches } from '@stitches/react'
import baseConfig from './config'

/**
 *
 * @param value
 * @param constructor
 * @returns
 */
export const isType = (
  value: any,
  constructorName: string
): boolean =>
  Object.prototype.toString
    .call(value) === `[object ${constructorName}]`

/**
 *
 * @param baseObj
 * @param overridingObject
 * @return
 */
export const extendObj = (
  baseObj: Record<string, any> = {},
  overridingObject: Record<string, any>
): Record<string, any> => {
  const uniqueKeys = Array.from(new Set(Object.keys({
    ...baseObj,
    ...overridingObject
  })))

  return uniqueKeys.reduce((
    acc: Record<string, any>,
    key: string
  ) => ({
    ...acc,
    [key]: Object.keys(overridingObject).includes(key)
      ? isType(overridingObject[key], 'Object')
        ? extendObj(
          (baseObj[key] || {}),
          overridingObject[key])

        : overridingObject[key]
      : baseObj[key]
  }), {})
}

export const extendConfig = (config: Record<string, any>) =>
  extendObj(baseConfig, config)

export const mkStitches = (config: Record<string, any>) =>
  createStitches(extendConfig(config))

type RGBCodes = {
  r: string | number,
  g: string | number,
  b: string | number
}

/**
 *
 */
export const hexToRgb = (
  hex: string,
  opacity: number = 1
): { css: string, codes: RGBCodes } | null => {
  const tokenCapture = '([a-f\d]{2})'.repeat(3)
  const tokens = new RegExp(`^#?${tokenCapture}$`, 'i')
    .exec(hex)

  if (!tokens) return null

  const codes = {
    r: parseInt(tokens[1], 16),
    g: parseInt(tokens[2], 16),
    b: parseInt(tokens[3], 16),
  }

  return {
    codes,
    css: `rgba(${[
      ...Object.values(codes),
      Math.max(Math.min(opacity, 1), 0)
    ].join(', ')})`
  }
}

export const toPixel = (
  number: string | number
): string => {
  if (isType(number, 'Number'))
    return `${number}px`

  const asNum = Number(number)

  return Number.isNaN(asNum)
    ? '0px'
    : `${asNum}px`
}
