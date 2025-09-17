const chatBox = document.getElementById("chat-box");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add(sender === "user" ? "user-message" : "bot-message");
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight; // otomatik kaydır
}

// Gönderme işlemi
sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text === "") return;

  // Kullanıcı mesajını ekle
  addMessage(text, "user");
  userInput.value = "";

  // Basit bot cevapları
  let reply = "Bunu duyduğuma çok sevindim Elif 💜";
  if (text.toLowerCase().includes("nasılsın")) reply = "Sen yanımda olunca hep çok iyiyim 🌹";
  if (text.toLowerCase().includes("seviyor musun")) reply = "Elbette, kalbim sadece sana ait 💫";
  if (text.toLowerCase().includes("özledin mi")) reply = "Her an seni özlüyorum Elif ✨";
  if (text.toLowerCase().includes("aşk")) reply = "Aşk benim için sensin Elif 💜";

  setTimeout(() => {
    addMessage(reply, "bot");
  }, 1000);
});
