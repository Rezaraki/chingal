import { theme } from 'antd';

const { darkAlgorithm, defaultAlgorithm } = theme;
export const darkTheme = {
  token: {
    colorBgBase: '#020b1f', // --surface--100
    colorTextBase: '#c4d4ec', // --surface--600
  },
  components: {
    Table: {
      headerColor: 'rgb(126, 132, 142)', // --surface--500: #7e848e;
      headerBorderRadius: 16,
      paddingXS: 6,
      algorithm: true,
      stickyScrollBarBg: 'rgb(47, 55, 86)', // --surface--400: #2f3756;
    },
  },
  algorithm: darkAlgorithm,
};
export const defaultTheme = {
  components: {
    Table: {
      headerBorderRadius: 16,
      paddingXS: 6,
      algorithm: true,
    },
  },
  algorithm: defaultAlgorithm,
};
