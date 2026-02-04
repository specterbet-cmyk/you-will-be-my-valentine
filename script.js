const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.onclick = () => {
  alert("Ура! 💖");
};

noBtn.onmouseover = () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * (window.innerHeight - 50) + "px";
  noBtn.style.left = Math.random() * (window.innerWidth - 100) + "px";
};
