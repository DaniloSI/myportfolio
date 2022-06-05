import React from 'react';

import style from '@/styles/Chip.module.css';

type Props = {
  children: string;
};

const Chip: React.FC<Props> = ({ children }) => (
  <div className={style.container}>
    <span>{children}</span>
  </div>
);

export default Chip;
