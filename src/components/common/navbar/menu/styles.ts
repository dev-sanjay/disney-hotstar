import styled from 'styled-components';

import { Center } from '@components/common/styles';

const StyledMenu = styled(Center)<{ isActive: boolean }>`
  gap: 8px;

  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.accent200 : theme.colors.white};
  margin: 8px 16px;
  padding-bottom: 6px;
`;

export const LinkText = styled.span`
  letter-spacing: 0;
`;

export default StyledMenu;
