/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["system-ui", "Inter", "sans-serif"],
      },
      colors: {
        brand: {
          50:  "#ebf5ff",
          100: "#d1e4ff",
          500: "#2563eb",
          600: "#1d4ed8",
          700: "#1e40af",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15,23,42,0.85)",
      },
      backgroundImage: {
        "radial-glow":
          "radial-gradient(circle at top, rgba(37,99,235,0.40), transparent 60%)",
      },
    },
  },
  plugins: [],
};
