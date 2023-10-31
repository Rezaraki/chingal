import { QueryClient } from '@tanstack/react-query';
import './assets/styles/styles.scss';

import { AntdProvider, Router } from './providers';
import { ContextProvider } from './providers/context/ContextProvider';
import ReactQueryProvider from './providers/reactQuery/ReactQueryProvider';
import { routes } from './providers/router';
import { useThemeMode } from './services';

function App() {
  const [themeMode] = useThemeMode();

  return (
    <ContextProvider>
      <ReactQueryProvider>
        <AntdProvider isDarkMode={themeMode === 'dark'}>
          <Router routes={routes} />
        </AntdProvider>
      </ReactQueryProvider>
    </ContextProvider>
  );
}

export default App;
