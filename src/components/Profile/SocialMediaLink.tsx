import React from 'react';

import { SocialMediaLink as SocialMediaLinkStyled } from './style';

type Props = {
  link: string;
  label: string;
  children: React.ReactNode;
};

const SocialMediaLink: React.FC<Props> = ({ link, label, children }) => (
  <SocialMediaLinkStyled href={link} target="_blank" rel="noreferrer" aria-label={label}>
    {children}
  </SocialMediaLinkStyled>
);

export default SocialMediaLink;
