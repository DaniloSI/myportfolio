import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.backgroundSkill};
  border-radius: 16px;
  height: 32px;
  display: flex;
  align-items: center;
  align-content: center;
  padding: 0px 8px;
  margin: 3px;
`;

export const Span = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.textSkill};
`;
