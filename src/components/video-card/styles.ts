import styled, { css, CSSObject } from 'styled-components';

import Card from '@components/common/card';
import { Flex } from '@components/common/styles';

export interface VideoCardStylesProps {
  $style?: CSSObject;
}

export const StyledVideoCard = styled(Card)<VideoCardStylesProps>`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.1);
  }

  ${({ $style }) => $style && css($style)}
`;

export const ImageWrapper = styled(Flex)`
  width: 100%;
  height: 100%;
  z-index: 1;
  position: relative;
  background-color: ${({ theme }) => theme.colors.lightBlack};
  transition: all 0.3s ease-out;
  &:hover {
    opacity: 0;
  }
`;

export const VideoWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
`;
