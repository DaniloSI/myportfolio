import React from 'react';

import { useRouter } from 'next/router';

import Chip from '../Chip';
import { Container, H1, P, About, Skills } from './style';

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
    <Container>
      <About>
        <H1>{locale === 'pt-BR' ? 'Sobre mim' : 'About'}</H1>
        <P>{details.about}</P>
      </About>
      <article>
        <H1>{locale === 'pt-BR' ? 'Habilidades' : 'Skills'}</H1>
        <Skills>
          {details.skills.map((skill) => (
            <Chip key={skill}>{skill}</Chip>
          ))}
        </Skills>
      </article>
    </Container>
  );
};

export default Details;
