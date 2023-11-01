import { theme } from 'antd';

const { darkAlgorithm, defaultAlgorithm } = theme;

export const darkTheme = {
  token: {
    colorBgBase: '#020b1f', // --surface--100
    colorTextBase: '#c4d4ec', // --surface--600
    colorBorder: '#182040', // --surface--300
    colorBorderSecondary: '#182040', // --surface--300
    colorBgContainer: '#020B1F', // --surface--100
    borderRadius: 16,
    borderRadiusSM: 12,
    controlHeightLG: 46,
  },
  components: {
    Table: {
      headerColor: '#7e848e', // --surface--500
      borderColor: '#182040',
      cellFontSize: '0.75rem',
      cellPaddingBlock: 30,
      headerBorderRadius: 16,
      paddingXS: 6,
      headerBg: '#020B1F', // --surface--100
      stickyScrollBarBg: '#2f3756', // --surface--400
    },
    Segmented: {
      controlHeight: 51,
      borderRadius: 16,
      borderRadiusSM: 16,
      borderRadiusXS: 16,
      lineWidthBold: 6,
    },
    Breadcrumb: {
      itemColor: '#7E848E', // --surface-500
      lastItemColor: '#FBFDFE', // --surface-900
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
  },
  algorithm: darkAlgorithm,
};
export const defaultTheme = {
  token: { borderRadius: 16 },
  components: {
    Table: {
      cellPaddingBlock: 30,
      headerBorderRadius: 16,
      paddingXS: 6,
    },
    Segmented: {
      controlHeight: 51,
      borderRadius: 16,
      borderRadiusSM: 16,
      borderRadiusXS: 16,
      lineWidthBold: 6,
    },
    Typography: {
      titleMarginBottom: 0,
      titleMarginTop: 0,
    },
  },
  algorithm: defaultAlgorithm,
};
