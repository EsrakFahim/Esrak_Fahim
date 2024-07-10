/** @type {import('tailwindcss').Config} */
module.exports = {
      content: [
            "./pages/**/*.{js,ts,jsx,tsx,mdx}",
            "./components/**/*.{js,ts,jsx,tsx,mdx}",
            "./app/**/*.{js,ts,jsx,tsx,mdx}",
      ],
      theme: {
            extend: {
                  backgroundImage: {
                        "gradient-radial":
                              "radial-gradient(var(--tw-gradient-stops))",
                        "gradient-conic":
                              "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                  },
                  colors: {
                        primary: {
                              DEFAULT: "#f0ece2", // This is the default primary color
                              dark: "#0A75A5", // Darker shade
                              light: "#71C9F8", // Lighter shade
                        },
                        TextPrimary: {
                              DEFAULT: "#393e46", // This is the default primary color
                              dark: "#f0ece2", // Darker shade
                              light: "#71C9F8", // Lighter shade
                        },
                  },
            },
      },
      plugins: [],
};
