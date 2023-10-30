import './assets/styles/styles.scss';

import { AntdProvider, Router } from './providers';
import ReactQueryProvider from './providers/reactQuery/ReactQueryProvider';
import { routes } from './providers/router';
import { useThemeMode } from './services';

function App() {
  const [themeMode] = useThemeMode();

  return (
    <ReactQueryProvider>
      <AntdProvider isDarkMode={themeMode === 'dark'}>
        <Router routes={routes} />
      </AntdProvider>
    </ReactQueryProvider>
  );
}

export default App;
