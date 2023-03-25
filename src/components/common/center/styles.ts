import styled from 'styled-components';

export interface ICenter {
  /**
   * Center align items with respect to **main axis**
   */
  mainAxis: boolean;

  /**
   * Center align items with respect to **cross axis**
   */
  crossAxis: boolean;
}

const StyledCenter = styled.div<ICenter>`
  display: flex;

  ${({ mainAxis }) => mainAxis && 'justify-content: center;'}
  ${({ crossAxis }) => crossAxis && 'align-items: center;'}
`;

export default StyledCenter;
