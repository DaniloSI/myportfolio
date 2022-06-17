import React from 'react';
import Toggle from 'react-toggle';

import 'react-toggle/style.css';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useDarkMode } from '@/contexts/DarkModeContext';

import Brazil from '@/assets/svg/br.svg';
import UnitedStates from '@/assets/svg/us.svg';

import { Button, Container } from './style';

const Control: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { locale } = useRouter();

  return (
    <Container>
      <Toggle
        className="toggle-dark"
        defaultChecked={darkMode}
        icons={{
          checked: <span className="toggle_icon">🌜</span>,
          unchecked: <span className="toggle_icon">🌞</span>,
        }}
        onChange={toggleDarkMode}
      />
      <Link href="/" locale={locale === 'pt-BR' ? 'en-US' : 'pt-BR'}>
        <Button type="button" aria-label="Change language">
          {locale === 'pt-BR' ? <Brazil /> : <UnitedStates />}
        </Button>
      </Link>
    </Container>
  );
};

export default Control;
