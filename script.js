const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const result = document.getElementById("result");

let yesSize = 1;

noBtn.addEventListener("mouseover", moveNo);
noBtn.addEventListener("click", moveNo);

function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 60 - 30;
  noBtn.style.transform = translate(${x}px, ${y}px);

  yesSize += 0.15;
  yesBtn.style.transform = scale(${yesSize});
}

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
  yesBtn.classList.add("grow");
  noBtn.style.display = "none";
});