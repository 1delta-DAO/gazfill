import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'fuel-green': '#22c55d',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#e300ff",
          "secondary": "#e38b00",
          "accent": "#00e2d0",
          "neutral": "#09090b",
          "base-100": "#18181b",
          "info": "#00a8f2",
          "success": "#22c55d",
          "warning": "#ec5800",
          "error": "#ef4444",
        }
      }
    ]
  }
};
export default config;
