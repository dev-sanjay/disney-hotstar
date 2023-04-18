import styled from 'styled-components';

interface FlexProps {
  /**
   * Center align items with respect to **main axis**
   */
  mainAxis?: boolean;

  /**
   * Center align items with respect to **cross axis**
   */
  crossAxis?: boolean;
}

const Flex = styled.div<FlexProps>`
  display: flex;

  ${({ mainAxis }) => mainAxis && 'justify-content: center;'}
  ${({ crossAxis }) => crossAxis && 'align-items: center;'}
`;

export default Flex;
