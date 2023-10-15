import React from 'react';

import Image from 'next/image';

import me from '@/assets/img/me.jpeg';

import SocialMediaLink from './SocialMediaLink';
import { Container, JobTitle, Name, SocialMedia, GithubIcon, LinkedInIcon, PhotoContainer } from './style';

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
      <PhotoContainer>
        <Image src={me} alt="Picture of the author" placeholder="blur" quality={50} />
      </PhotoContainer>
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
