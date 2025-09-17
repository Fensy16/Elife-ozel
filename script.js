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

sendBtn.addEventListener("click", () => {
  const text = userInput.value.trim();
  if (text === "") return;
  
  // Kullanıcı mesajını ekle
  addMessage(text, "user");
  userInput.value = "";

  // Basit bot cevapları
  let reply = "Bunu duyduğuma çok sevindim Elif 💜";
  if (text.includes("nasılsın")) reply = "Sen yanımda olunca hep çok iyiyim 🌹";
  if (text.includes("seviyor musun")) reply = "Elbette, kalbim sadece sana ait 💫";
  if (text.includes("özledin mi")) reply = "Her an seni özlüyorum Elif ✨";

  setTimeout(() => {
    addMessage(reply, "bot");
  }, 1000);
});
