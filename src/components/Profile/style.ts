import Image from 'next/image';

import styled from 'styled-components';

import Github from '@/assets/svg/github.svg';
import LinkedIn from '@/assets/svg/linkedin.svg';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Photo = styled(Image)`
  border-radius: 50%;
`;

export const JobTitle = styled.span`
  color: ${({ theme }) => theme.highlight};
  margin-top: 10px;
  margin-bottom: 5px;
  font-weight: 400;
  font-size: 16px;
`;

export const Name = styled.span`
  color: ${({ theme }) => theme.text};
  margin-bottom: 5px;
  font-weight: 500;
  font-size: 18px;
`;

export const SocialMedia = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
`;

export const SocialMediaLink = styled.a`
  margin-right: 5px;
`;

export const GithubIcon = styled(Github)`
  color: ${({ theme }) => theme.text};
`;

export const LinkedInIcon = styled(LinkedIn)`
  color: ${({ theme }) => theme.text};
`;
