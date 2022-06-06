import React, { useState, createContext, useMemo, useContext } from 'react';

import theme from '@/utils/theme';
import { ThemeProvider } from 'styled-components';

const DarkModeContext = createContext({} as { darkMode: boolean; toggleDarkMode: () => void });

type Props = {
  children: React.ReactNode;
};

export const DarkModeProvider: React.FC<Props> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  const contextValue = useMemo(
    () => ({
      darkMode,
      toggleDarkMode: () => setDarkMode((value) => !value),
    }),
    [darkMode],
  );

  return (
    <DarkModeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme[darkMode ? 'dark' : 'light']}>{children}</ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
