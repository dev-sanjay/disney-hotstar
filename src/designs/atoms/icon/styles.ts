import styled, { css, CSSObject } from 'styled-components';

export type Size =
  | 'icon-lg'
  | 'icon-xs'
  | 'icon-sm'
  | 'icon-1x'
  | 'icon-1.5x'
  | 'icon-2x'
  | 'icon-2.5x'
  | 'icon-3x'
  | 'icon-3.5x'
  | 'icon-4x'
  | 'icon-4.5x'
  | 'icon-5x'
  | 'icon-6x'
  | 'icon-7x'
  | 'icon-8x'
  | 'icon-9x'
  | 'icon-10x';

const sizeMap: Record<Size, string> = {
  'icon-lg': '1.33333rem',
  'icon-xs': '0.75rem',
  'icon-sm': '0.875rem',
  'icon-1x': '1rem',
  'icon-1.5x': '1.5rem',
  'icon-2x': '2rem',
  'icon-2.5x': '2.5rem',
  'icon-3x': '3rem',
  'icon-3.5x': '3.5rem',
  'icon-4x': '4rem',
  'icon-4.5x': '4.5rem',
  'icon-5x': '5rem',
  'icon-6x': '6rem',
  'icon-7x': '7rem',
  'icon-8x': '8rem',
  'icon-9x': '9rem',
  'icon-10x': '10rem',
};

const StyledIconWrapper = styled.span<{ size?: Size; $style?: CSSObject }>`
  display: inline-block;
  width: ${({ size = 'icon-1.5x' }) => sizeMap[size]};
  height: ${({ size = 'icon-1.5x' }) => sizeMap[size]};

  ${({ $style }) => $style && css($style)}
`;

export const StyledIcon = styled.i<{ size?: Size }>`
  font-size: ${({ size = 'icon-1.5x' }) => sizeMap[size]};
`;

export default StyledIconWrapper;
