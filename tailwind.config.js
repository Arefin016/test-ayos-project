/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        inter: ["Inter", "serif"],
        roboto: ["Roboto", "serif"],
      },
      container: {
        center: true,
        screens: {
          "2xl": "1720px",
        },
        padding: "20px",
      },
      screens: {
        xs: "360px",
        sm: "480px", // Small mobile devices
        md: "576px", // Tablets and small mobile screens
        lg: "768px", // Medium tablets and large phones
        xl: "992px", // Laptops or larger tablets
        "2xl": "1200px", // Standard desktop screens
        "3xl": "1500px", // Larger desktop displays
        "4xl": "1920px", // High-resolution or ultra-wide displays
      },
      colors: {
        primaryColor: "#FFF",
        secondaryColor: "#000",
        paragraphColor: "#646464",
        button: "#083EC5",
        secondaryButton: "#1E1E1E",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      backgroundColor: {
        white_transparent: "#FFF",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(90deg, rgba(9, 25, 64, 0.80) -0.85%, rgba(23, 64, 166, 0.00) 99.73%)",
      },
      borderRadius: {
        custom: "48px 48px 48px 48px",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      boxShadow: {
        custom_shadow: "0px 0px 4px 0px rgba(0, 9, 54, 0.06)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
