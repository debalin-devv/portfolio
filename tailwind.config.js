/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary-fixed-dim": "#c5c5d8",
        "on-primary-fixed": "#121f00",
        "outline-variant": "#c2caaf",
        "on-surface": "#191d11",
        "surface-container-low": "#f1f6e2",
        "surface-container": "#ecf0dc",
        "on-error-container": "#93000a",
        "on-tertiary-fixed": "#1d1d03",
        "tertiary": "#60603e",
        "on-tertiary-container": "#6b6b47",
        "tertiary-fixed": "#e6e5b9",
        "error": "#ba1a1a",
        "inverse-on-surface": "#eff3df",
        "on-secondary-container": "#626374",
        "primary-container": "#b8ff3b",
        "on-background": "#191d11",
        "on-tertiary-fixed-variant": "#484828",
        "surface-container-highest": "#e0e5d1",
        "surface": "#f7fce7",
        "outline": "#727a63",
        "on-primary-fixed-variant": "#344e00",
        "inverse-surface": "#2d3225",
        "tertiary-fixed-dim": "#cac99f",
        "primary-fixed": "#b1f733",
        "on-surface-variant": "#424935",
        "on-secondary-fixed": "#191b29",
        "on-primary": "#ffffff",
        "secondary": "#5c5d6e",
        "surface-bright": "#f7fce7",
        "surface-container-lowest": "#ffffff",
        "secondary-container": "#e1e1f5",
        "tertiary-container": "#eeecc0",
        "secondary-fixed": "#e1e1f5",
        "surface-variant": "#e0e5d1",
        "primary-fixed-dim": "#96da02",
        "on-secondary": "#ffffff",
        "primary": "#466800",
        "surface-container-high": "#e6ead6",
        "on-secondary-fixed-variant": "#444655",
        "inverse-primary": "#96da02",
        "surface-tint": "#466800",
        "background": "#f7fce7",
        "on-primary-container": "#4e7400",
        "on-tertiary": "#ffffff",
        "surface-dim": "#d8dcc9",
        "on-error": "#ffffff",
        "error-container": "#ffdad6"
      },
      borderRadius: {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "0.75rem"
      },
      spacing: {
        "unit": "8px",
        "margin-desktop": "40px",
        "container-max": "1200px",
        "gutter": "24px",
        "margin-mobile": "16px"
      },
      fontFamily: {
        "body-md": ["Inter", "sans-serif"],
        "label-caps": ["Space Mono", "monospace"],
        "headline-md": ["Hanken Grotesk", "sans-serif"],
        "display-lg-mobile": ["Hanken Grotesk", "sans-serif"],
        "display-lg": ["Hanken Grotesk", "sans-serif"],
        "body-lg": ["Inter", "sans-serif"],
        "headline-sm": ["Hanken Grotesk", "sans-serif"]
      },
      fontSize: {
        "body-md": ["16px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.05em", "fontWeight": "700" }],
        "headline-md": ["32px", { "lineHeight": "1.3", "fontWeight": "700" }],
        "display-lg-mobile": ["40px", { "lineHeight": "1.2", "fontWeight": "800" }],
        "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "800" }],
        "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
        "headline-sm": ["24px", { "lineHeight": "1.4", "fontWeight": "700" }]
      }
    }
  },
  plugins: [],
}
