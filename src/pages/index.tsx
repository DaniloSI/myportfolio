import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';

import getPortfolio from 'src/services/portfolio';

import { Profile, Details, IProfile, IDetails, Control } from '@/components/index';

type Props = {
  profile: IProfile;
  details: IDetails;
};

const Portfolio: NextPage<Props> = ({ profile, details }) => {
  return (
    <>
      <Head>
        <title>{profile.name}</title>
        <meta name="description" content={`${profile.name}'s portfolio | Front End Engineer`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Control />

      <main>
        <Profile profile={profile} />
        <Details details={details} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = 'pt-BR' } = context;
  const portfolio = getPortfolio(locale);

  return {
    props: {
      profile: {
        name: 'Danilo de Oliveira',
        jobTitle: portfolio.jobTitle,
        github: portfolio.github,
        linkedin: portfolio.linkedin,
      },
      details: {
        about: portfolio.about,
        skills: portfolio.skills,
      },
    },
  };
};

export default Portfolio;
