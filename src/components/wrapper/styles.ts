import styled, { css, CSSObject } from 'styled-components';

export interface WrapperStylesProps {
  $style?: CSSObject;
}

const StyledWrapper = styled.section<WrapperStylesProps>`
  ${({ $style }) => $style && css($style)}
`;

export const VideoContainer = styled.div`
  display: flex;
  position: fixed;
  overflow: hidden;

  video {
    transform: scale(1.36);
  }

  &:before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &::after {
    background: ${({ theme }) => theme.gradient.linearExtraDark};
  }
`;

export default StyledWrapper;
