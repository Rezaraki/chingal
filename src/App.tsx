import './assets/styles/styles.scss';

import { AntdProvider, Router } from './providers';
import { useThemeMode } from './services';

function App() {
  const [themeMode] = useThemeMode();

  return (
    <AntdProvider isDarkMode={themeMode === 'dark'}>
      <Router />
    </AntdProvider>
  );
}

export default App;
