import { useEffect, useState } from 'react';

function useThemeMode() {
  const [themeMode, setThemeMode] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const { body } = document;
    const currentThemeMode = body.getAttribute('data-theme-mode');
    if (currentThemeMode) {
      (currentThemeMode === 'dark' || currentThemeMode === 'light') && setThemeMode(currentThemeMode);
    } else {
      body.setAttribute('data-theme-mode', themeMode);
    }
  }, [themeMode]);

  return [themeMode, setThemeMode];
}
export default useThemeMode;
