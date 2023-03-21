import { createContext, useMemo, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import themes from '@themes/index';
import { ThemeType } from '@themes/theme';

type Context = {
  theme: ThemeType;
  setTheme: (themeType: ThemeType) => void;
};

export const ThemeContext = createContext<Context>({
  theme: 'light',
  setTheme: () => {},
});

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeTheme, setActiveTheme] = useState<ThemeType>('light');

  const context: Context = useMemo(
    () => ({
      theme: activeTheme,
      setTheme: setActiveTheme,
    }),
    [activeTheme]
  );

  return (
    <ThemeContext.Provider value={context}>
      <ThemeProvider theme={themes[activeTheme] || themes.light}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
