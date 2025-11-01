const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const value = e.target.getAttribute("data-value");

    if (value === "C") {
      screen.value = "";
    } else if (value === "=") {
      try {
        let result = screen.value.replace(/×/g, "*").replace(/÷/g, "/");
        screen.value = eval(result);
      } catch {
        screen.value = "Error";
      }
    } else {
      screen.value += value;
    }
  });
});

// --- Theme Toggle Logic ---
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const htmlElement = document.documentElement; // The <html> tag

function switchTheme() {
  const currentTheme = htmlElement.getAttribute("data-theme");

  if (currentTheme === "light") {
    htmlElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    htmlElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

// Event listener for the theme button
themeToggleBtn.addEventListener("click", switchTheme, false);

// Load saved theme on page load
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  htmlElement.setAttribute("data-theme", savedTheme);
}
