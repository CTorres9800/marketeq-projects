import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          25: "#F6F8FE",
          50: "#E8EEFF",
          100: "#C9D9FF",
          200: "#98B6FF",
          300: "#779EFF",
          400: "#5687FF",
          500: "#306CFE",
          600: "#2459DB",
          700: "#1948BD",
          800: "#0E379E",
          900: "#032782",
        },
        gray: {
          25: "#FCFCFD",
          50: "#F9FAFB",
          100: "#F2F4F7",
          200: "#EAECF0",
          300: "#D0D5DD",
          400: "#98A2B3",
          500: "#667085",
          600: "#475467",
          700: "#344054",
          800: "#1D2939",
          900: "#101828",
        },
        "light-gray": {
          25: "#FDFDFE",
          50: "#FDFDFD",
          100: "#FCFCFD",
          200: "#FBFBFC",
          300: "#F8F8FA",
          400: "#F5F5F8",
          500: "#F2F2F5",
          600: "#EFEFF3",
          700: "#EFEFF3",
          800: "#EEEEF2",
          900: "#ECECF1",
        },
        "dark-blue": {
          25: "#6A89D6",
          50: "#607EC6",
          100: "#5572B7",
          200: "#4B66A8",
          300: "#374F89",
          400: "#22376B",
          500: "#0E204C",
          600: "#0B1A3D",
          700: "#08132E",
          800: "#060D1E",
          900: "#040A17",
        },
        "light-blue": {
          25: "#FBFCFF",
          50: "#F9FBFF",
          100: "#F7F9FF",
          200: "#F5F8FF",
          300: "#F0F4FF",
          400: "#EBF1FF",
          500: "#E6EDFF",
          600: "#E4EBFF",
          700: "#E1EAFF",
          800: "#DFE8FF",
          900: "#DCE6FF",
        },
        error: {
          25: "#FFFBFA",
          50: "#FEF3F2",
          100: "#FEE4E2",
          200: "#FECDCA",
          300: "#FDA29B",
          400: "#F97066",
          500: "#F04438",
          600: "#D92D20",
          700: "#B42318",
          800: "#912018",
          900: "#7A271A",
        },
        warning: {
          25: "#FFFCF5",
          50: "#FFFAEB",
          100: "#FEF0C7",
          200: "#FEDF89",
          300: "#FEC84B",
          400: "#FDB022",
          500: "#F79009",
          600: "#DC6803",
          700: "#B54708",
          800: "#93370D",
          900: "#7A2E0E",
        },
        success: {
          25: "#F6FEF9",
          50: "#ECFDF3",
          100: "#D1FADF",
          200: "#A6F4C5",
          300: "#6CE9A6",
          400: "#32D583",
          500: "#12B76A",
          600: "#039855",
          700: "#027A48",
          800: "#05603A",
          900: "#000000",
        },
      },
      screens: {
        xs: "0px",
        sm: "375px",
        md: "768px",
        "md-lg": "1144px",
        lg: "1200px",
        xl: "1600px",
        "2xl": "1920px",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans)", ...defaultTheme.fontFamily.sans],
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
        "scale-up": {
          from: {
            transform: "scale(1)",
          },
          to: {
            transform: "scale(1.125)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "scale-up": "scale-up 20s linear forwards",
      },
      zIndex: {
        "60": "60",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwindcss-animate"),
    require("@headlessui/tailwindcss"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    require("@tailwindcss/typography"),
    require("tailwindcss-react-aria-components"),
  ],
}

export default config
