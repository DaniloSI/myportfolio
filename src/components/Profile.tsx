import React from 'react';

import Image from 'next/image';

import style from '@/styles/Profile.module.css';

import Github from '@/assets/svg/github.svg';
import Linkedin from '@/assets/svg/linkedin.svg';

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
    <aside className={style.container}>
      <Image
        className={style.photo}
        src={`${profile.gravatarUrl}?size=400`}
        alt="Picture of the author"
        width={200}
        height={200}
        layout="fixed"
      />
      <span className={style.jobTitle}>{profile.jobTitle}</span>
      <span className={style.name}>{profile.name}</span>
      <div className={style.socialMedia}>
        <a href={profile.github} target="_blank" rel="noreferrer">
          <Github />
        </a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
      </div>
    </aside>
  );
};

export default Profile;
