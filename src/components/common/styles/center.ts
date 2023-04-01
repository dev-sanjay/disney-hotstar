import styled from 'styled-components';

interface CenterProps {
  /**
   * Center align items with respect to **main axis**
   */
  mainAxis: boolean;

  /**
   * Center align items with respect to **cross axis**
   */
  crossAxis: boolean;
}

export const Center = styled.div<CenterProps>`
  display: flex;

  ${({ mainAxis }) => mainAxis && 'justify-content: center;'}
  ${({ crossAxis }) => crossAxis && 'align-items: center;'}
`;

export default Center;
