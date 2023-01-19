import styled from 'styled-components';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  shadow,
  border,
  typography,
  compose,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
} from 'styled-system';

export const Box = styled('div')(
  compose(
    color,
    space,
    layout,
    flexbox,
    grid,
    shadow,
    border,
    typography,
    backgroundImage,
    backgroundPosition,
    backgroundRepeat
  )
);
