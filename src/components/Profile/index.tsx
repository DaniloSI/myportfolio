import React from 'react';

import { Container, Photo, JobTitle, Name, SocialMedia, SocialMediaLink, GithubIcon, LinkedInIcon } from './style';

export interface IProfile {
  gravatarUrl: string;
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
      <Photo src={`${profile.gravatarUrl}?size=400`} alt="Picture of the author" width={200} height={200} layout="fixed" />
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
