import React from 'react';
import Toggle from 'react-toggle';

import 'react-toggle/style.css';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { useDarkMode } from '@/contexts/darkMode';

import style from '@/styles/Control.module.css';

import Brazil from '@/assets/svg/br.svg';
import UnitedStates from '@/assets/svg/us.svg';

const Control: React.FC = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { locale } = useRouter();

  return (
    <div className={style.container}>
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
        <button type="button" className={style.btnLang}>
          {locale === 'pt-BR' ? <Brazil /> : <UnitedStates />}
        </button>
      </Link>
    </div>
  );
};

export default Control;
