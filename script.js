const chatBox = document.getElementById("chat-box");
const nextBtn = document.getElementById("next-btn");

const conversation = [
  { bot: "Merhaba Elif 💜 Nasılsın bugün?", user: "Sen yanımdayken hep çok iyiyim 🌹" },
  { bot: "Beni hatırladın mı?", user: "Seni unutmak mümkün mü? Her an aklımdasın 💫" },
  { bot: "Bir dilek hakkın olsa ne dilerdin?", user: "Hayatımın geri kalanını seninle geçirmek ✨" },
  { bot: "Sence ben özel miyim?", user: "Özel değil, eşsizsin Elif 💜" },
  { bot: "Sonsuza kadar yanında olsam, mutlu olur musun?", user: "Benim en büyük mutluluğum bu olurdu 💍" }
];

let step = 0;

nextBtn.addEventListener("click", () => {
  if (step < conversation.length) {
    const botMsg = document.createElement("div");
    botMsg.classList.add("bot-message");
    botMsg.innerText = conversation[step].bot;

    const userMsg = document.createElement("div");
    userMsg.classList.add("user-message");
    userMsg.innerText = conversation[step].user;

    chatBox.appendChild(botMsg);
    chatBox.appendChild(userMsg);
    step++;
  } else {
    nextBtn.disabled = true;
    nextBtn.innerText = "💜 Sohbet bitti";
  }
});
