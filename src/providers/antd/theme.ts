import { theme } from 'antd';

const { darkAlgorithm, defaultAlgorithm } = theme;
export const darkTheme = {
  token: {
    colorBgBase: '#020b1f', // --surface--100
    colorTextBase: '#c4d4ec', // --surface--600
    colorBorder: '#182040', // --surface--300
    colorBgContainer: '#020B1F', // --surface--100
    borderRadius: 16,
  },
  components: {
    Table: {
      headerColor: 'rgb(126, 132, 142)', // --surface--500: #7e848e;
      headerBorderRadius: 16,
      paddingXS: 6,
      algorithm: true,
      stickyScrollBarBg: 'rgb(47, 55, 86)', // --surface--400: #2f3756;
    },
    Segmented: {
      controlHeight: 56,
      borderRadius: 16,
      borderRadiusSM: 16,
      borderRadiusXS: 16,
      lineWidthBold: 6,
    },
    input: {
      controlHeightLG: 48,
    },
  },
  algorithm: darkAlgorithm,
};
export const defaultTheme = {
  token: { borderRadius: 16 },
  components: {
    Table: {
      headerBorderRadius: 16,
      paddingXS: 6,
      algorithm: true,
    },
    Segmented: {
      controlHeight: 56,
      borderRadius: 16,
      borderRadiusSM: 16,
      lineWidthBold: 6,
    },
  },
  algorithm: defaultAlgorithm,
};
