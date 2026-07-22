module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "bg-base": "#F9FAFB",
        "text-primary": "#09090B",
        "accent": "#FF5500"
      },
      borderColor: {
        DEFAULT: "#e5e7eb"
      }
    }
  },
  plugins: []
};
