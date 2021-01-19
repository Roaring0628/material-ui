import * as React from 'react';
import {
  borders,
  ComposedStyleFunction,
  display,
  flexbox,
  grid,
  palette,
  positions,
  shadows,
  sizing,
  spacing,
  typography,
  PropsFor,
  SxProps,
} from '@material-ui/system';
import { OverrideProps, OverridableComponent } from '../OverridableComponent';
import { Theme } from '../styles/createMuiTheme';

type SystemProps = PropsFor<
  ComposedStyleFunction<
    [
      typeof borders,
      typeof display,
      typeof flexbox,
      typeof grid,
      typeof palette,
      typeof positions,
      typeof shadows,
      typeof sizing,
      typeof spacing,
      typeof typography
    ]
  >
>;

export interface BoxTypeMap<P = {}, D extends React.ElementType = 'div'> {
  props: P &
    SystemProps & {
      children?: React.ReactNode | ((props: React.ComponentPropsWithRef<D>) => React.ReactNode);
      component?: React.ElementType;
      clone?: boolean;
      ref?: React.Ref<unknown>;
      sx?: SxProps<Theme>;
    };
  defaultComponent: D;
}

declare const Box: OverridableComponent<BoxTypeMap>;

export type BoxProps<
  D extends React.ElementType = BoxTypeMap['defaultComponent'],
  P = {}
> = OverrideProps<BoxTypeMap<P, D>, D>;

export default Box;
