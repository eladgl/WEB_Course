/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js, css}"],
  theme: {
    extend: {
      colors: {
        100: "var(--lighterDark)",
        200: "var(--lightDark)",
        background: "var(--background)",
        border: "var(--border)",
        "button-background-number": "rgb(var(--buttonBackgroundNumber))",
        "button-background-operator": "rgba(var(--buttonBackgroundOperator))",
        "button-background-equal": "rgba(var(--buttonBackgroundEqual))",
        "button-text-color": "rgba(var(--buttonTextColor))",
        "button-text-color-hover": "rgba(var(--buttonTextColorHover))",
        "button-equal-hover": "rgba(var(--buttonEqualColorHover))",
        text: "var(--text)",
        row: "var(--row)",
        textArea: "var(--textArea)",
        "textarea-color": "rgba(var(--textAreaColor))",
        modal: "var(--modal)",
        "modal-text": "rgba(var(--modalText))",
        "modal-background": "rgba(var(--modalBackground))",
        modalOverlay: "rgba(var(--modalOverlay))",
      },
    },
    keyframes: {
      slideInLeft: {
        "0%": { transform: "translateX(-100%)", opacity: "0" },
        "50&": { transform: "translate(-50%)", opacity: "0.5" },
        "100%": { transform: "translateX(0)", opacity: "1" },
      },
    },
    animation: {
      slideInLeft: "slideInLeft 2s ease-out",
    },
  },
  plugins: [],
};
