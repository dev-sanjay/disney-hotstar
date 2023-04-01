import styled from 'styled-components';
import StyledCenter from '../center/styles';

const StyledHeader = styled(StyledCenter)`
  justify-content: space-between;
  padding: 12px 80px;
`;

export const LeftSection = styled(StyledCenter)`
  gap: 24px;
`;

export const RightSection = styled(StyledCenter)``;

export default StyledHeader;
