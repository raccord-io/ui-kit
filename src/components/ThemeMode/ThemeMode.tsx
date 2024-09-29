import { useState } from 'react';

import { Moon, Sun } from 'lucide-react';

import { useLocalStorage } from '../../util/useLocalStorage';

interface ThemeProps {
  onSetTheme?: (theme: string) => void;
}

export function ThemeMode(props: ThemeProps) {
  const { onSetTheme } = props;

  const [storedTheme, setStoredTheme] = useLocalStorage<string>(
    'raccord-theme',
    'theme-light',
  );
  const [theme, setTheme] = useState(storedTheme || 'theme-light');

  function handleClick() {
    const newTheme = theme === 'theme-light' ? 'theme-dark' : 'theme-light';

    setTheme(newTheme);
    setStoredTheme(newTheme);

    onSetTheme?.(newTheme);
  }

  const themeIcons = {
    'theme-dark': <Sun className="h-8 w-8" />,
    'theme-light': <Moon className="h-8 w-8" />,
  };

  return (
    <button
      data-testid="theme-mode"
      className={`text-f-primary cursor-pointer rounded-md w-12 h-12
                  hover:bg-tertiary
                  active:bg-secondary`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center">
        {themeIcons[theme as keyof typeof themeIcons]}
      </div>
    </button>
  );
}
