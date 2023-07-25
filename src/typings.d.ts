export = ReactGenerics
export as namespace ReactGenerics

import { createStitches } from '@stitches/react'

import {
  FunctionComponent as FC,
  PropsWithChildren
} from 'react'

import type { ButtonProps } from './Button'
import type { WrapperProps } from './Wrapper'
import type { PanelProps } from './Panel'

interface PanelComponent extends FC<PanelProps> {
  Header: FC<PropsWithChildren>
  Body: FC<PropsWithChildren>
}

type StitchesHelpers = ReturnType<typeof createStitches>

declare namespace ReactGenerics {
  export const mkStithes: () => StitchesHelpers

  export {
    ButtonProps,
    WrapperProps,
    PanelProps
  }

  /**
   * A basic and stylish button component
   */
  export const Button: FC<ButtonProps>

  /**
   * A basic flexbox wrapper component
   */
  export const Wrapper: FC<WrapperProps>

  /**
   * A basic text component
   */
  export const Text: FC<PropsWithChildren>

  /**
   * A Card/Panel component that can show/hide and be
   * resized by the user
   */
  export const Panel: PanelComponent

  /**
   * A wrapper component for a scrollable area with a custom
   * scrollbar powered by overlayscrollbars-react
   */
  export const ScrollView: FC<ScrollViewProps>

}
