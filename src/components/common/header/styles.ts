import styled from 'styled-components';
import { Center } from '@components/common/styles';

const StyledHeader = styled(Center)`
  justify-content: space-between;
  padding: 12px 80px;
  position: absolute;
  width: 100%;
  z-index: 1;
  background: ${({ theme }) => theme.gradient.linear};
`;

export const LeftSection = styled(Center)`
  gap: 24px;
`;

export const RightSection = styled(Center)``;

export default StyledHeader;
