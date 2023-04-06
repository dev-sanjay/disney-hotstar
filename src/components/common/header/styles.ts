import styled from 'styled-components';
import { Flex } from '@components/common/styles';

const StyledHeader = styled(Flex)`
  justify-content: space-between;
  padding: 12px 80px;
  position: fixed;
  width: 100%;
  z-index: 1;
  background: ${({ theme }) => theme.gradient.linear};
`;

export const LeftSection = styled(Flex)`
  gap: 24px;
`;

export const RightSection = styled(Flex)``;

export default StyledHeader;
