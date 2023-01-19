import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  position: relative;
  font-size: ${p => p.theme.fontSizes.link};
  text-decoration: none;
  color: ${p => p.theme.colors.link};

  &:hover {
    color: ${p => p.theme.colors.linkHover};
  }

  &.active {
    color: ${p => p.theme.colors.linkActive};

    ::after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 0;
      height: 2px;
      width: 100%;
      background-color: ${p => p.theme.colors.linkActive};
    }
  }
`;
