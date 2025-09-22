/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#ffffff",
        "bg-200": "#f5f5f5",
        "bg-300": "#cccccc",
        primary: "#3f51b5",
        "primary-200": " #757de8",
        accent: "#2196f3",
        text: "#333333",
        "text-200": "#5c5c5c",
      },
      height: {
        xlg: "400px",
        medium: "200px",
        xxlg: "600px",
      },
      width: {
        xlg: "400px",
        medium: "200px",
        xxlg: "600px",
      },
      
    },
  },
  plugins: [],
};
