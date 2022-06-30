import React from 'react';

import photo from '@/assets/img/me.jpeg';

import {
  Container,
  Photo,
  JobTitle,
  Name,
  SocialMedia,
  SocialMediaLink as SocialMediaLinkStyled,
  GithubIcon,
  LinkedInIcon,
} from './style';

type SocialMediaLinkProps = {
  link: string;
  label: string;
  children: React.ReactNode;
};

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ link, label, children }) => (
  <SocialMediaLinkStyled href={link} target="_blank" rel="noreferrer" aria-label={label}>
    {children}
  </SocialMediaLinkStyled>
);

export interface IProfile {
  name: string;
  jobTitle: string;
  github: string;
  linkedin: string;
}

type Props = {
  profile: IProfile;
};

const Profile: React.FC<Props> = ({ profile }) => {
  return (
    <Container>
      <Photo src={photo} alt="Picture of the author" width={200} height={200} layout="fixed" quality={65} />
      <JobTitle>{profile.jobTitle}</JobTitle>
      <Name>{profile.name}</Name>
      <SocialMedia>
        <SocialMediaLink link={profile.github} label="Github">
          <GithubIcon />
        </SocialMediaLink>
        <SocialMediaLink link={profile.linkedin} label="LinkedIn">
          <LinkedInIcon />
        </SocialMediaLink>
      </SocialMedia>
    </Container>
  );
};

export default Profile;
