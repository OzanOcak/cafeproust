/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Playfair Display",
      secondary: "Lato",
    },
    container: {
      padding: {
        DEFAULT: "10px",
        // lg: '0',
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },
    extend: {
      colors: {
        body: "#e5e5e5",
        dark: "#0a0909",
        grey: {
          DEFAULT: "#777876",
          100: "#e4e4e3",
        },
        accent: {
          DEFAULT: "#fe7634",
          hover: "#F55304",
        },
      },
      backgroundImage: {
        pattern: "url('assets/img/body-bg-pattern.png')",
        hero: "url('assets/img/hero/hero.jpeg')",
        menu: "url('assets/img/menu/woodbg.jpeg')",
        testimonial: "url('assets/img/testimonial/woodbg.jpeg')",
        newsletter: "url('assets/img/newsletter/bg.png')",
        footer: "url('assets/img/footer/woodbg.jpeg')",
      },
    },
  },
  plugins: [],
};
