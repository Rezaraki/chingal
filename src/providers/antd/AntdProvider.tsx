import { PropsWithChildren } from 'react';
import faIR from 'antd/locale/fa_IR';
import { ConfigProvider } from 'antd';
import { darkTheme, defaultTheme } from './theme';

function AntdProvider({ children, isDarkMode }: PropsWithChildren<{ isDarkMode: boolean }>) {
  return (
    <ConfigProvider theme={isDarkMode ? darkTheme : defaultTheme} direction="rtl" locale={faIR}>
      {children}
    </ConfigProvider>
  );
}
export default AntdProvider;
