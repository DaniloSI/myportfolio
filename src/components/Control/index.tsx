import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useDarkMode } from '@/contexts/DarkModeContext';

import Brazil from '@/assets/svg/br.svg';
import UnitedStates from '@/assets/svg/us.svg';

import { SunIcon, MoonIcon, Button, Container } from './style';

const Control: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { locale } = useRouter();

  return (
    <Container>
      <Button type="button" aria-label="Dark mode" onClick={toggleDarkMode}>
        {darkMode ? <MoonIcon /> : <SunIcon />}
      </Button>

      <Link href="/" locale={locale === 'pt-BR' ? 'en-US' : 'pt-BR'}>
        <Button type="button" aria-label="Change language">
          {locale === 'pt-BR' ? <Brazil /> : <UnitedStates />}
        </Button>
      </Link>
    </Container>
  );
};

export default Control;
