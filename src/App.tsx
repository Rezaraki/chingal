import './assets/styles/styles.scss';

import { AntdProvider, Router } from './providers';
import { routes } from './providers/router';
import { useThemeMode } from './services';

function App() {
  const [themeMode] = useThemeMode();

  return (
    <AntdProvider isDarkMode={themeMode === 'dark'}>
      <Router routes={routes} />
    </AntdProvider>
  );
}

export default App;
