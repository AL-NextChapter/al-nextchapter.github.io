let bgColor = document.getElementById("bgColor");
let windowColor = document.getElementById("windowColor");
let textColor = document.getElementById("textColor");
let accentColor = document.getElementById("accentColor");
let resetBtn = document.getElementById("resetBtn");
let windows = document.querySelectorAll(".window");
let windowBars = document.querySelectorAll(".window-bar");

function applyColors() {
  document.body.style.backgroundColor = bgColor.value;
  document.getElementById("labelBg").textContent = bgColor.value;
  document.getElementById("swatchBg").style.backgroundColor = bgColor.value;

  for (let i = 0; i < windows.length; i++) {
    windows[i].style.backgroundColor = windowColor.value;
  }
  document.getElementById("labelWindow").textContent = windowColor.value;
  document.getElementById("swatchWindow").style.backgroundColor = windowColor.value;

  document.body.style.color = textColor.value;
  for (let i = 0; i < windows.length; i++) {
    windows[i].style.color = textColor.value;
  }
  document.getElementById("labelText").textContent = textColor.value;
  document.getElementById("swatchText").style.backgroundColor = textColor.value;

  for (let i = 0; i < windowBars.length; i++) {
    windowBars[i].style.backgroundColor = accentColor.value;
  }
  document.querySelector("header").style.backgroundColor = accentColor.value;
  document.querySelector("footer").style.backgroundColor = accentColor.value;

  let headings = document.querySelectorAll("h2");
  for (let i = 0; i < headings.length; i++) {
    headings[i].style.color = accentColor.value;
  }

  let schemeButtons = document.querySelectorAll(".scheme-btn");
  for (let i = 0; i < schemeButtons.length; i++) {
    schemeButtons[i].style.borderColor = accentColor.value;
    schemeButtons[i].style.color = accentColor.value;
  }

  document.getElementById("resetBtn").style.backgroundColor = accentColor.value;
  document.getElementById("labelAccent").textContent = accentColor.value;
  document.getElementById("swatchAccent").style.backgroundColor = accentColor.value;
}

bgColor.addEventListener("input", applyColors);
windowColor.addEventListener("input", applyColors);
textColor.addEventListener("input", applyColors);
accentColor.addEventListener("input", applyColors);

resetBtn.addEventListener("click", function() {
  bgColor.value = "#f0f0f0";
  windowColor.value = "#ffffff";
  textColor.value = "#333333";
  accentColor.value = "#4a90d9";
  applyColors();
});

function setScheme(bg, win, text, accent) {
  bgColor.value = bg;
  windowColor.value = win;
  textColor.value = text;
  accentColor.value = accent;
  applyColors();
}

document.getElementById("oceanBtn").addEventListener("click", function() {
  setScheme("#e0f0ff", "#ffffff", "#1a3a5c", "#2980b9");
});

document.getElementById("sunsetBtn").addEventListener("click", function() {
  setScheme("#fff5e6", "#ffffff", "#5c3a1a", "#e67e22");
});

document.getElementById("forestBtn").addEventListener("click", function() {
  setScheme("#e8f5e9", "#ffffff", "#1b3a1b", "#27ae60");
});

document.getElementById("darkBtn").addEventListener("click", function() {
  setScheme("#1a1a2e", "#2d2d44", "#e0e0e0", "#7c3aed");
});
