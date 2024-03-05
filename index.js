const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

let emoji = [];

async function getEmoji() {
  const data = await fetch(
    "https://emoji-api.com/emojis?access_key=3c626d5812d0d527029029f0518e6e10f860a9c3"
  ).then((res) => res.json());
  for (let i = 0; i < 1500; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}
getEmoji();
btnEl.addEventListener("click", () => {
  const randomNum = Math.floor(Math.random() * emoji.length);
  btnEl.innerText = emoji[randomNum].emojiName;
  emojiNameEl.innerText = emoji[randomNum].emojiCode;
});
