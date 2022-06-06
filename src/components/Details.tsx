import React from 'react';

import { useRouter } from 'next/router';

import style from '@/styles/Details.module.css';

import Chip from './Chip';

export interface IDetails {
  about: string;
  skills: string[];
}

type Props = {
  details: IDetails;
};

const Details: React.FC<Props> = ({ details }) => {
  const { locale } = useRouter();

  return (
    <section className={style.container}>
      <article className={style.about}>
        <h1>{locale === 'pt-BR' ? 'Sobre mim' : 'About'}</h1>
        <p>{details.about}</p>
      </article>
      <article>
        <h1>{locale === 'pt-BR' ? 'Habilidades' : 'Skills'}</h1>
        <div className={style.skills}>
          {details.skills.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </div>
      </article>
    </section>
  );
};

export default Details;
