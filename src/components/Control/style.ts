import styled from 'styled-components';

import Moon from '@/assets/svg/moon.svg';
import Sun from '@/assets/svg/sun.svg';

export const Container = styled.div`
  display: flex;
  direction: rtl;
  padding: 10px;
`;

export const Button = styled.button`
  background: none;
  width: 24px;
  height: 24px;
  margin-left: 24px;
  border: none;
  padding: 0px;
  cursor: pointer;
`;

export const SunIcon = styled(Sun)`
  color: ${({ theme }) => theme.text};
`;

export const MoonIcon = styled(Moon)`
  color: ${({ theme }) => theme.text};
`;
