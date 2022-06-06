import React from 'react';

import { Container, Span } from './style';

type Props = {
  children: string;
};

const Chip: React.FC<Props> = ({ children }) => (
  <Container>
    <Span>{children}</Span>
  </Container>
);

export default Chip;
