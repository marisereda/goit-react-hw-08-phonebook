import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonLink = styled(NavLink)`
  display: block;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-right: ${p => p.theme.space[4]}px;
  padding-left: ${p => p.theme.space[4]}px;
  min-width: ${p => p.theme.sizes.buttonWidth};
  font-size: ${p => p.theme.fontSizes.button};
  font-weight: bold;
  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.bgButton};
  border: none;
  border-radius: ${p => p.theme.radii.primary};
  cursor: pointer;
  text-decoration: none;
  /* outline: none; */
`;