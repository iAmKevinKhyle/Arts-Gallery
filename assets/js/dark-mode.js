const DARK_MODE = document.querySelector(".dark-mode-container > i");
const ROOT = document.querySelector(":root").style;
let isDarkMode = getMode();

window.addEventListener("load", () => {
  saveMode(isDarkMode);
  blendMode(isDarkMode);
});

DARK_MODE.addEventListener("click", () => {
  setModeButton();
  blendMode(isDarkMode);
});

function blendMode(mode) {
  if (mode) {
    document.querySelector("article#contact > div.left-content > img").style =
      "mix-blend-mode: normal; border-radius: 50%; box-shadow: 0 1px 75px 1px white;";

    document
      .querySelectorAll("article#prices > div.slider > figure > img")
      .forEach((item) => {
        item.style = "mix-blend-mode: normal;";
      });
  } else {
    document.querySelector("article#contact > div.left-content > img").style =
      "mix-blend-mode: multiply; border-radius: 0; box-shadow: none;";
    document
      .querySelectorAll("article#prices > div.slider > figure > img")
      .forEach((item) => {
        item.style = "mix-blend-mode: multiply;";
      });
  }
}

function saveMode(darkMode) {
  localStorage.setItem("dark-mode", JSON.stringify(darkMode));

  if (!darkMode) {
    DARK_MODE.classList.add("fa-solid");
    DARK_MODE.classList.remove("fa-regular");
    ROOT.setProperty("--background-color", "#e7dfd8");
    ROOT.setProperty("--text-color", "#231f20");
  } else {
    DARK_MODE.classList.add("fa-regular");
    DARK_MODE.classList.remove("fa-solid");
    ROOT.setProperty("--background-color", "#231f20");
    ROOT.setProperty("--text-color", "#e7dfd8");
  }
}

function getMode() {
  return localStorage.getItem("dark-mode")
    ? JSON.parse(localStorage.getItem("dark-mode"))
    : false;
}

function setModeButton() {
  if (!isDarkMode) {
    isDarkMode = true;
    saveMode(isDarkMode);
  } else {
    isDarkMode = false;
    saveMode(isDarkMode);
  }
}
