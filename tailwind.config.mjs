module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
    "app/**/*.{js,jsx}",
    "components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      fontSize: {
        xs:    ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        sm:    ["1.09375rem", { lineHeight: "1.5rem" }], // 17.5px
        base:  ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        lg:    ["1.375rem", { lineHeight: "2rem" }], // 22px
        xl:    ["1.5rem", { lineHeight: "2.25rem" }], // 24px
        "2xl": ["1.875rem", { lineHeight: "2.5rem" }], // 30px
        "3xl": ["2.25rem", { lineHeight: "2.75rem" }], // 36px
        "4xl": ["2.8125rem", { lineHeight: "3rem" }], // 45px
        "5xl": ["3.75rem", { lineHeight: "1" }], // 60px
        "6xl": ["4.5rem", { lineHeight: "1" }], // 72px
        "7xl": ["6rem", { lineHeight: "1" }], // 96px
        "8xl": ["8.25rem", { lineHeight: "1" }], // 132px
        "9xl": ["11.25rem", { lineHeight: "1" }], // 180px
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};
