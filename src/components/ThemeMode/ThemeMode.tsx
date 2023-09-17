import { useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
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
  const [theme, setTheme] = useState(storedTheme || 'theme-dark');

  function handleClick() {
    const newTheme = theme === 'theme-light' ? 'theme-dark' : 'theme-light';

    setTheme(newTheme);
    setStoredTheme(newTheme);

    onSetTheme?.(newTheme);
  }

  const themeIcons = {
    'theme-dark': <FiSun className="h-8 w-8" />,
    'theme-light': <FiMoon className="h-8 w-8" />,
  };

  return (
    <button
      data-testid="theme-mode"
      className={`text-f-primary cursor-pointer rounded-lg w-12 h-12
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
