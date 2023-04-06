import styled, { css, CSSObject } from 'styled-components';

export interface CardStylesProps {
  /**
   * - Size of the card
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * - Extra styling for the card
   */
  $style?: CSSObject;
}

const getStylesAsPerSize = ({ size }: Pick<CardStylesProps, 'size'>) => {
  switch (size) {
    case 'small':
      return css`
        width: 240px;
        height: 136px;
      `;

    case 'medium':
      return css`
        width: 305px;
        height: 174px;
      `;

    case 'large':
      return css`
        width: 240px;
        height: 361px;
      `;

    default:
      return '';
  }
};

export const StyledCard = styled.div<CardStylesProps>`
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.lightBlack};

  ${({ size = 'small' }) => getStylesAsPerSize({ size })}
  ${({ $style }) => $style && css($style)}
`;

export default StyledCard;
