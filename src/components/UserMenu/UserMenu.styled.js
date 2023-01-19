import styled from 'styled-components';

export const Header = styled.header`
  /* display: flex;
  justify-content: end;
  align-items: center;
  gap: ${p => p.theme.space[4]}px; */
  padding: ${p => p.theme.space[5]}px;
  min-width: ${p => p.theme.sizes.sectionBox};
  font-size: ${p => p.theme.fontSizes.button};
  font-weight: bold;
  text-align: center;
  color: ${p => p.theme.colors.textPrimary};
  background-color: ${p => p.theme.colors.bgButton};
`;

export const LogOutButton = styled.button`
  padding-top: ${p => p.theme.space[2]}px;
  padding-bottom: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[3]}px;

  font-size: ${p => p.theme.fontSizes.button};
  font-weight: bold;
  color: ${p => p.theme.colors.bgButton};
  background-color: ${p => p.theme.colors.bgPrimary};
  border: none;
  border-radius: ${p => p.theme.radii.primary};
  cursor: pointer;
`;
