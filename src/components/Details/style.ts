import styled from 'styled-components';

export const Container = styled.section`
  border-radius: 12px;
  margin-left: 64px;
  padding: 48px 72px;
  background-color: ${({ theme }) => theme.backgroundCard};
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1064px) {
    margin-top: 32px;
    margin-left: 0px;
    padding: 24px 16px;
  }
`;

export const H1 = styled.section`
  color: ${({ theme }) => theme.highlight};
  font-size: 20px;
  font-weight: 500;
  margin: 0px;
  text-align: center;
`;

export const P = styled.section`
  color: ${({ theme }) => theme.text};
  line-height: 22px;
  margin-top: 16px;
`;

export const About = styled.article`
  margin-bottom: 32px;
`;

export const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 16px;
`;
