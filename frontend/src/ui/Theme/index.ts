interface TypographyDefinition {
  size: string;
  lineHeight: string;
  weight: number;
}

export interface ITheme {
  colors: {
    mainBrand: string;
    lightPure: string;
    lightShade: string;
    lightAccent: string;
    darkAccent: string;
    darkShade: string;
    darkAccentOpposite: string;
  };
  spacing: string[];
  spacingRaw: number[];
  typography: {
    headline: {
      1: TypographyDefinition;
      2: TypographyDefinition;
      3: TypographyDefinition;
      4: TypographyDefinition;
    };
    body: {
      0: TypographyDefinition;
      1: TypographyDefinition;
      2: TypographyDefinition;
    };
    caption: {
      1: TypographyDefinition;
      2: TypographyDefinition;
    };
  };
}

const Theme: ITheme = {
  colors: {
    mainBrand: '#ff914d',
    lightPure: '#fff',
    lightShade: '#f4f6f6',
    lightAccent: '#979ca5',
    darkAccent: '#c2565b',
    darkAccentOpposite: '#008f52',
    darkShade: '#3e3b45',
  },
  spacing: ['5px', '10px', '12px', '20px', '28px'],
  spacingRaw: [5, 10, 12, 20, 28],
  typography: {
    headline: {
      1: {
        size: '30px',
        lineHeight: '46px',
        weight: 500,
      },
      2: {
        size: '22px',
        lineHeight: '34px',
        weight: 500,
      },
      3: {
        size: '16px',
        lineHeight: '26px',
        weight: 500,
      },
      4: {
        size: '14px',
        lineHeight: '28px',
        weight: 500,
      },
    },
    body: {
      0: {
        size: '11px',
        lineHeight: '19px',
        weight: 400,
      },
      1: {
        size: '16px',
        lineHeight: '24px',
        weight: 400,
      },
      2: {
        size: '14px',
        lineHeight: '20px',
        weight: 400,
      },
    },
    caption: {
      1: {
        size: '12px',
        lineHeight: '20px',
        weight: 500,
      },
      2: {
        size: '12px',
        lineHeight: '20px',
        weight: 400,
      },
    },
  },
};

export default Theme;
