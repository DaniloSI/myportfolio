import React from 'react';

import photo from '@/assets/img/me.jpeg';

import { Container, Photo, JobTitle, Name, SocialMedia, SocialMediaLink, GithubIcon, LinkedInIcon } from './style';

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
        <SocialMediaLink href={profile.github} target="_blank" rel="noreferrer">
          <GithubIcon />
        </SocialMediaLink>
        <SocialMediaLink href={profile.linkedin} target="_blank" rel="noreferrer">
          <LinkedInIcon />
        </SocialMediaLink>
      </SocialMedia>
    </Container>
  );
};

export default Profile;
