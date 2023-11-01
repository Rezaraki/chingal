import { Dispatch, useEffect, useState } from 'react';
import { THEME_MODES } from '../../enums';
import { TTheme } from '../../types';

function useThemeMode(): [TTheme, Dispatch<React.SetStateAction<TTheme>>] {
  const [themeMode, setThemeMode] = useState<TTheme>(THEME_MODES.DARK);
  // Todo: complete dark/light mode switch functionality
  useEffect(() => {
    const { body } = document;
    const currentThemeMode = body.getAttribute('data-theme-mode');
    if (currentThemeMode) {
      (currentThemeMode === THEME_MODES.DARK || currentThemeMode === THEME_MODES.LIGHT) &&
        setThemeMode(currentThemeMode);
    } else {
      body.setAttribute('data-theme-mode', themeMode);
    }
  }, [themeMode]);

  return [themeMode, setThemeMode];
}
export default useThemeMode;
