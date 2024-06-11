const setThem = (theme) => {
  if (theme === "dark") {
    document.documentElement.classList.remove("light");
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.add("light");
    document.documentElement.classList.remove("dark");
  }
};

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  setTheme("dark");
} else {
  setTheme("light");
}

const themeToggle = document.getElementById("themeToggle");
const violetIcon = document.querySelector(".fill-violet-700");
const yellowIcon = document.querySelector(".fill-yellow-500");

themeToggle.addEventListener("click", (e) => {
  const darkModeEnabled = e.target.checked;
  localStorage.theme = darkModeEnabled ? "dark" : "light";
  if (themeToggle.checked) {
    violetIcon.classList.add("hidden");
    yellowIcon.classList.remove("hidden");
  } else {
    violetIcon.classList.remove("hidden");
    yellowIcon.classList.add("hidden");
  }
  setTheme(darkModeEnabled ? "dark" : "light");
});

document.addEventListener("DOMContentLoaded", (event) => {
  window.label = document.getElementById("result");

  const isDigitOrOperator = (input) => {
    const regex = /^[0-9+\-*()./]$/;
    return regex.test(input);
  };

  document.addEventListener("keypress", (e) => {
    if (isDigitOrOperator(e.key)) {
      window.label.textContent += e.key;
    } else if (e.key === "Delete") {
      //backspace
      window.label.textContent = window.label.textContent.substring(
        0,
        window.label.textContent.length - 1
      );
    } else if (e.key === "Enter") {
      //backspace
      try {
        window.label.textContent = eval(window.label.textContent);
      } catch (e) {
        window.showModal("Error calculating");
      }
    }
  });
});
