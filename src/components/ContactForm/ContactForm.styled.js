import styled from 'styled-components';
import { Field } from 'formik';

export const ErrorText = styled.div`
  color: red;
`;

export const InputTitle = styled.label`
  display: block;
  font-weight: bold;
  color: ${p => p.theme.colors.label};
`;

export const Input = styled(Field)`
  font-size: ${p => p.theme.fontSizes.input};
  line-height: ${p => p.theme.fontSizes.input};
  min-width: ${p => p.theme.sizes.input};
`;

// export const Button = styled.button`
//   display: block;
//   margin-right: auto;
//   margin-left: auto;
//   padding-top: ${p => p.theme.space[3]}px;
//   padding-bottom: ${p => p.theme.space[3]}px;
//   padding-right: ${p => p.theme.space[4]}px;
//   padding-left: ${p => p.theme.space[4]}px;
//   min-width: ${p => p.theme.sizes.buttonWidth};
//   font-size: ${p => p.theme.fontSizes.button};
//   font-weight: bold;
//   color: ${p => p.theme.colors.textPrimary};
//   background-color: ${p => p.theme.colors.bgButton};
//   border: none;
//   border-radius: ${p => p.theme.radii.primary};
//   cursor: pointer;
//   /* outline: none; */
// `;
