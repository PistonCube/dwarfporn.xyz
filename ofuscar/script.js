const images = [
  "../assets/images/1.png",
  "../assets/images/2.png"
];

const titles = [
  "DWARFPORN.XYZ",
  "JOIN THE DWARFS",
  "THE DWARFS ARE WATCHING",
  "WELCOME TO THE UNDERGROUND UNION.",
  "THE DWARVES ARE COMING",
  "EVIL ORGANIZATION THEAT ENSLAVES DWARVES",
  "THE DWARVES HAVE ALREADY GIVEN THEIR NAMES."
];

const texts = [
  "THE DWARFS ARE WATCHING",
  "JOIN THE DWARFS",
  "THE DWARFS ARE WATCHING",
  "WELCOME TO THE UNDERGROUND UNION.",
  "THE DWARVES ARE COMING",
  "EVIL ORGANIZATION THEAT ENSLAVES DWARVES",
  "THE DWARVES HAVE ALREADY GIVEN THEIR NAMES."
];

const bg = document.getElementById("bg");
const mainText = document.getElementById("mainText");

let i = 0;

setInterval(() => {
  bg.style.backgroundImage = `url(${images[i % images.length]})`;

  document.title =
    titles[Math.floor(Math.random() * titles.length)];

  mainText.innerText =
    texts[Math.floor(Math.random() * texts.length)];

  i++;
}, 120);

setInterval(() => {
  document.body.style.filter =
    `hue-rotate(${Math.random() * 360}deg) contrast(1.4)`;

  setTimeout(() => {
    document.body.style.filter = "none";
  }, 50);
}, 700);

document.addEventListener("contextmenu", e => {
  e.preventDefault();
});

document.addEventListener("keydown", e => {
  if (e.key === "F12") {
    e.preventDefault();
  }

  if (
    e.ctrlKey &&
    e.shiftKey &&
    ["I", "J", "C", "S"].includes(e.key)
  ) {
    e.preventDefault();
  }

  if (e.ctrlKey && e.key.toLowerCase() === "u") {
    e.preventDefault();
  }
});

const enterScreen = document.getElementById("enterScreen");
const music = document.getElementById("music");

enterScreen.addEventListener("click", async () => {

    try {

        if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen();
        }

        await music.play();

        enterScreen.style.opacity = "0";
        enterScreen.style.pointerEvents = "none";

        setTimeout(() => {
            enterScreen.remove();
        }, 500);

    } catch(err) {
        console.log(err);
    }

});