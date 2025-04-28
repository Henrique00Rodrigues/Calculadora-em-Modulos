import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import {
  handleClearButton,
  handleButtonPress,
  handleTypping,
} from "./keyHandlers.js";
import themeSwitcher from "./themeSwitcher.js";

document.querySelectorAll(".charKey").forEach((charKeyBtn) => {
  charKeyBtn.addEventListener("click", handleButtonPress);
});

document.getElementById("clear").addEventListener("click", handleClearButton);
document.querySelector("input").addEventListener("keydown", handleTypping);
document.getElementById("equal").addEventListener("click", calculate);
document
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);
document
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);
