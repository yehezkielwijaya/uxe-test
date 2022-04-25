module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        acmeprimary: "#325050",
        acmesecondary: "#143232",
      },
      backgroundImage: {
        'flower-banner': "url('./Assets/img/Banner.png')",
        'acme-logo': "url('./Assets/img/logo.svg')",
      },
      width: {
        iphone11pro: '375px',
        desktop: "1024px",
      },
    },
  },
  plugins: [],
};