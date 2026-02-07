const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");
const buttons = document.getElementById("buttons");
const collage = document.getElementById("collage");

let dodgeActive = true;

const photoFiles = [
  "cat.jpeg",
  "WhatsApp Image 2026-02-07 at 19.25.55.jpeg",
  "WhatsApp Image 2026-02-07 at 19.26.24.jpeg",
  "WhatsApp Image 2026-02-07 at 19.27.40.jpeg",
  "WhatsApp Image 2026-02-07 at 19.28.05.jpeg",
  "WhatsApp Image 2026-02-07 at 19.32.33.jpeg"
];

function buildCollage() {
  collage.innerHTML = "";

  for (const file of photoFiles) {
    const img = document.createElement("img");
    img.src = file;
    img.alt = "Valentine memory";
    img.loading = "lazy";
    collage.appendChild(img);
  }
}

function moveNoButton() {
  if (!dodgeActive) return;

  const wrapRect = buttons.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const maxX = wrapRect.width - btnRect.width;
  const maxY = wrapRect.height - btnRect.height;

  const x = Math.max(0, Math.random() * maxX);
  const y = Math.max(0, Math.random() * maxY);

  noBtn.style.position = "absolute";
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("mousedown", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton, { passive: true });

yesBtn.addEventListener("click", () => {
  dodgeActive = false;
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  buildCollage();
  result.classList.remove("hidden");
});