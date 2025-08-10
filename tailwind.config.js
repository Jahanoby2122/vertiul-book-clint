module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/theming/themes")["[data-theme=light]"],
          "base-100": "#f2f4f8", // তোমার কাস্টম লাইট ব্যাকগ্রাউন্ড
        },
        dark: {
          ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
          "base-100": "#1e293b", // প্রফেশনাল slate-blue-gray ডার্ক ব্যাকগ্রাউন্ড
        },
      },
    ],
  },
};
