const chatBox = document.getElementById("chat-box");
const chatInput = document.getElementById("chat-input");
const sendBtn = document.getElementById("send-btn");

async function sendMessage() {
  const message = chatInput.value.trim();
  if (!message) return;

  // Kullanıcı mesajını ekle
  const userMessage = document.createElement("div");
  userMessage.classList.add("chat-message", "user");
  userMessage.textContent = message;
  chatBox.appendChild(userMessage);

  chatInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const response = await fetch("http://localhost:5050/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();

    const botMessage = document.createElement("div");
    botMessage.classList.add("chat-message", "bot");
    botMessage.textContent = data.reply;
    chatBox.appendChild(botMessage);

    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    console.error("Hata:", err);
  }
}

sendBtn.addEventListener("click", sendMessage);
chatInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") sendMessage();
});
