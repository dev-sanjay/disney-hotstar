import styled, { css, CSSObject } from 'styled-components';

export interface WrapperStylesProps {
  $style?: CSSObject;
}

const StyledWrapper = styled.section<WrapperStylesProps>`
  ${({ $style }) => $style && css($style)}
`;

export const ImageContainer = styled.div`
  display: flex;
  position: relative;

  &:before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &::before {
    background: ${({ theme }) => theme.gradient.linearDark};
  }
  &::after {
    background: ${({ theme }) => theme.gradient.linearExtraDark};
  }
`;

export const Content = styled.div``;

export default StyledWrapper;
